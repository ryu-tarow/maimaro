import Link from "next/link";

interface PhotoCategoryProps {
  text: string;
  text02: string;
  photo: string;
  link: string;
  style: string;
}

export const PhotoCategory = ({
  text,
  text02,
  photo,
  link,
  style,
}: PhotoCategoryProps) => {
  return (
    <li className="bg-gray-800">
      <div className="text-white absolute p-4 bg-black opacity-70 w-32">
        <h2 className="">{text}</h2>
        <p>{text02}</p>
      </div>
      <div className="flex justify-end text-white rounded-md">
        <div className="flex">
          <div className="">
            <Link href={link}>
              <div
                className={`${style} absolute shadow-lg right-0 px-2 py-20 rounded-md my-6 text-xl bg-white text-gray-400 hover:opacity-90 duration-200 cursor-pointer opacity-50`}
              >
                ＞
              </div>
            </Link>
          </div>
          <img
            src={`/photos${photo}`}
            className="m-1 object-cover h-56 w-full"
          />
        </div>
      </div>
    </li>
  );
};
