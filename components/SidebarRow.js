import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-100 rounded-lg cursor:pointer">
      {src && (
        <Image
          src={src}
          className="rounded-full"
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium cursor-pointer">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
