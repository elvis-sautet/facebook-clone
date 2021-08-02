import { useSession } from "next-auth/client";
import firebase from "firebase";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";

function InputBox() {
  const [session, loading] = useSession();
  const [file, setFile] = useState(null);

  const inputRef = useRef(null);
  const filepickerRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (file) {
          // upload the image
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(file, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (err) => console.log(err),
            () => {
              // start uploading
              storage
                .ref(`posts/${doc.id}`)
                .getDownloadURL()
                .then((url) => {
                  db.collection(`posts`).doc(doc.id).set(
                    {
                      postImage: file,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setFile(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        {session?.user && (
          <>
            <Image
              className="rounded-full "
              src={session.user.image}
              height={40}
              width={40}
              layout="fixed"
            />
            <form className="flex flex-1">
              <input
                ref={inputRef}
                className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                type="text"
                placeholder={`What's on your mind, ${session.user.name}?`}
              />
              <button className="hidden" onClick={sendPost}>
                Submit
              </button>
            </form>
          </>
        )}
      </div>
      {file && (
        <div className="relative">
          <p
            className="absolute text-red-500 p-4 bg-white rounded-full h-6 w-6 flex justify-center items-center font-bold right-2 top-2 text-base cursor-pointer hover:bg-gray-300"
            onClick={removeImage}
          >
            &times;
          </p>
          <img
            className="transition"
            className="object-cover"
            src={file}
            loading="lazy"
            alt={file}
          />
        </div>
      )}
      <div className="p-4 flex justify-evenly border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
