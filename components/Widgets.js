import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    src: "https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/183431715_132044272308895_1284263617734889357_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fdxr_OaWwywAX8WZoMv&_nc_ht=scontent.fmba5-1.fna&oh=ff13624616fdc41fa052516145909087&oe=612F3ABC",
    name: "Marike Nasibo",
  },
  {
    src: "https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/117444693_1173207789712843_7903982758688517329_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=19026a&_nc_ohc=5FTGpeY3wLsAX_a3k2U&_nc_ht=scontent.fmba5-1.fna&oh=45c5fab85a27af62baaa245a5a1df453&oe=612CD254",
    name: "Elvis Sautet",
  },
  {
    src: "https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/118730544_1467850006740142_6299486351962257652_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=zCIHY9fzCDsAX8KyByv&tn=BXQ5YRaY-t6i6L8f&_nc_ht=scontent.fmba5-1.fna&oh=00f9b9e9ccaf2b187d571e28967befff&oe=612E62F1",
    name: "Harrison Totona",
  },
  {
    src: "https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/118730544_1467850006740142_6299486351962257652_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=zCIHY9fzCDsAX8KyByv&tn=BXQ5YRaY-t6i6L8f&_nc_ht=scontent.fmba5-1.fna&oh=00f9b9e9ccaf2b187d571e28967befff&oe=612E62F1",
    name: "Kamau Peterson",
  },
  {
    src: "https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/118730544_1467850006740142_6299486351962257652_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=zCIHY9fzCDsAX8KyByv&tn=BXQ5YRaY-t6i6L8f&_nc_ht=scontent.fmba5-1.fna&oh=00f9b9e9ccaf2b187d571e28967befff&oe=612E62F1",
    name: "Lary Monserat",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col max-w-max p-2 mt-5">
      <div className="flex justify-between mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
