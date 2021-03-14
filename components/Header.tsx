import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const menu01 = "プロフィール";
  const menu02 = "写真集";

  const [showNav, setShowNav] = useState<boolean>(false);
  // const [showPhotoCategory, setShowPhotoCategory] = useState<boolean>(false);

  const onClickShowNav = () => {
    setShowNav(!showNav);
  };
  // const onClickShowPhotoCategory = () => {
  //   setShowPhotoCategory(!showPhotoCategory);
  // };

  return (
    <header className="">
      <div className="fixed w-screen py-2 bg-purple-500 z-10 shadow-md opacity-90">
        <div className="h-12 flex justify-between max-w-screen-lg m-auto">
          <Link href="/">
            <div className="pt-3 pl-5 text-white cursor-pointer font-mono">
              まいまろわーるど
            </div>
          </Link>
          <button onClick={onClickShowNav} className="mr-2">
            {showNav ? (
              <div className="rounded-full w-12 h-12 text-4xl text-white sm:hidden hover:bg-purple-600 duration-300 hover:opacity-70">
                ×
              </div>
            ) : (
              <div className="rounded-full w-12 h-12 text-4xl text-white sm:hidden hover:bg-purple-600 duration-300 hover:opacity-70">
                =
              </div>
            )}
          </button>

          {/* ヘッダーに表示される */}
          <nav className="hidden sm:flex py-3 text-white">
            <ul className="flex">
              <Link href="/profile">
                <li className="mx-5 hover:text-purple-100 cursor-pointer duration-300 hover:opacity-80">
                  {menu01}
                </li>
              </Link>
              <Link href="/photos">
                <li className="mx-5 hover:text-purple-100 cursor-pointer duration-300 hover:opacity-80">
                  {menu02}
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      {/* ハンバーガーメニューのクリックで表示される */}
      {showNav && (
        <nav className="mt-16 w-full h-full fixed bg-purple-500 sm:hidden z-20 shadow-md opacity-90 right-0">
          <ul className="mt-2 text-center text-white sm:hidden">
            <Link href="/profile">
              <li
                onClick={onClickShowNav}
                className="border-b border-purple-300 text-xl px-5 py-2 hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                {menu01}
              </li>
            </Link>
            <Link href="/photos">
              <li
                onClick={onClickShowNav}
                className="border-b text-xl px-5 py-2 border-purple-300 hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                {menu02}
              </li>
            </Link>
            {/* {showPhotoCategory && (
              <ul className="text-sm">
                <Link href="/">
                  <li
                    onClick={onClickShowNav}
                    className="py-2 hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer"
                  >
                    リスト01
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onClick={onClickShowNav}
                    className="py-2 hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer"
                  >
                    リスト02
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onClick={onClickShowNav}
                    className="py-2 hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer"
                  >
                    リスト03
                  </li>
                </Link>
              </ul>
            )} */}
            <div
              onClick={onClickShowNav}
              className="m-auto w-16 h-16 mt-2 pt-1 text-xs hover:bg-purple-500 duration-300 hover:opacity-70 cursor-pointer"
            >
              <div className="text-2xl rounded-full">×</div>
              close
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
