import Link from "next/link";

interface PhotoCardProps {
  title: string;
  img: string;
  link: string;
}

export const PhotoCard = ({ title, img, link }: PhotoCardProps) => {
  return (
    <Link href={link}>
      <li className="text-white m-1 rounded-md duration-300 cursor-pointer relative hover:opacity-70">
        <h3 className="px-3 py-1.5 text-sm absolute bg-black w-full opacity-50">
          {title}
        </h3>
        <img
          src={img}
          className="w-full h-48 sm:h-72 object-cover rounded-sm"
        />
      </li>
    </Link>
  );
};
