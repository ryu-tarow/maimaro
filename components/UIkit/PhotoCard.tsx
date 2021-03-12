import Link from "next/link";

interface PhotoCardProps {
  title: string;
  img: string;
  link: string;
}

export const PhotoCard = ({ title, img, link }: PhotoCardProps) => {
  return (
    <Link href={link}>
      <li className="text-white m-1 rounded-md duration-300 hover:opacity-70 cursor-pointer">
        <h3 className="px-3 py-1.5 bg-purple-700 text-sm rounded-md rounded-b-none">
          {title}
        </h3>
        <img
          src={img}
          className="w-full h-32 sm:h-48 object-cover rounded-md rounded-t-none"
        />
      </li>
    </Link>
  );
};
