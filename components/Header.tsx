import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showPhotoCategory, setShowPhotoCategory] = useState<boolean>(false);

  const onClickShowNav = () => {
    setShowNav(!showNav);
  };
  const onClickShowPhotoCategory = () => {
    setShowPhotoCategory(!showPhotoCategory);
  };

  return (
    <header className="fixed w-screen py-2 bg-purple-500 z-10 shadow-md opacity-90">
      <div className="h-12 flex justify-between max-w-screen-lg m-auto">
        <Link href="/">
          <div className="pt-3 pl-5 text-white cursor-pointer font-mono">
            (ホームページ名またはロゴ画像)
          </div>
        </Link>
        <button onClick={onClickShowNav} className="mr-2">
          {showNav ? (
            <div className="border-white w-12 h-12 border rounded-md text-4xl text-white sm:hidden hover:bg-purple-600 duration-300 hover:opacity-70">
              ×
            </div>
          ) : (
            <div className="border-white w-12 h-12 border rounded-md text-4xl text-white sm:hidden hover:bg-purple-600 duration-300 hover:opacity-70">
              =
            </div>
          )}
        </button>

        {/* ヘッダーに表示される */}
        <nav className="hidden sm:flex py-3 text-white">
          <ul className="flex">
            <Link href="/">
              <li className="mx-5 hover:text-purple-100 cursor-pointer duration-300 hover:opacity-80">
                メニュー１
              </li>
            </Link>
            <Link href="/">
              <li className="mx-5 hover:text-purple-100 cursor-pointer duration-300 hover:opacity-80">
                メニュー２
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* ハンバーガーメニューのクリックで表示される */}
      {showNav && (
        <nav>
          <ul className="mt-2 text-center text-white sm:hidden">
            <Link href="/">
              <li
                onClick={onClickShowNav}
                className="px-5 py-2 hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                メニュー01
              </li>
            </Link>
            <li
              onClick={onClickShowPhotoCategory}
              className="px-5 py-2 border-t border-white hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer"
            >
              リストメニュー01 ▼
            </li>
            {showPhotoCategory && (
              <ul className="text-sm">
                {/* <Link href="/photos"><li onClick={onClickShowNav} className="border-b border-purple-200 py-2 hover:bg-purple-400 duration-300 hover:opacity-80 cursor-pointer">カテゴリ一覧</li></Link> */}
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
            )}
            <div
              onClick={onClickShowNav}
              className="m-auto w-16 h-16 mt-2 pt-1 text-xs hover:bg-purple-500 duration-300 hover:opacity-70 cursor-pointer"
            >
              <div className="text-2xl">×</div>
              close
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
