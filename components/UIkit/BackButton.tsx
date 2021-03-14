import Link from "next/link";

interface BackButtonProps {
  link: string;
}

export const BackButton = ({ link }: BackButtonProps) => {
  return (
    <>
      <div className="flex justify-between text-white fixed z-10 sm:hidden">
        <Link href={link}>
          <div className="mx-3 px-5 py-3 border cursor-pointer hover:bg-black hover:opacity-50 duration-300">
            ＜
          </div>
        </Link>
      </div>
    </>
  );
};
