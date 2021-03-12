import { PhotoCard } from "components/UIkit/PhotoCard";
import { ShareButton } from "components/UIkit/ShareButton";
import { SNSButton } from "components/UIkit/SNSButton";
import Head from "next/head";

export default function Home() {
  const title = "まいまろわーるど";
  const url = "https://maimaro.vercel.app/";
  const image = "top.jpg";
  const pageTitle = "まいまろわーるど";
  const description = "まいまろ。のオフィシャルサイト";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="icon" href="" />

        <meta name="description" content={description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/${image}`} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        {/* TwitterCardの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta property="twitter:image" content={`${url}/${image}`} />
      </Head>

      <main>
        <div className="max-w-screen-md m-auto">
          <div className="relative">
            <img
              src="/top.jpg"
              alt="top_image"
              className="w-screen sm:h-5/6 object-cover"
            />
            <div className="top-1/4 absolute right-2/4 sm:left-28">
              <a href="https://www.youtube.com/channel/UC7fZCrGDqZeFrHA4WUFZncg/featured">
                <img
                  src="/snsIcons/youtube.png"
                  alt=""
                  className="w-32 sm:w-56 duration-300 hover:opacity-70 cursor-pointer sm:hidden"
                />
              </a>
              <div className="hidden sm:flex">
                <img src="/" />
                <div>（タブレット・PCで表示）</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:px-5 m-auto max-w-screen-md">
          <div className="grid grid-cols-2 mt-0.5">
            <SNSButton
              img={"/tiktok.jpg"}
              imgClass={"object-cover m-auto h-12 px-4 sm:px-20 rounded-lg"}
              bgClass={"object-cover"}
              link={"https://www.tiktok.com/@maimaro.world?"}
            />
            <div className="grid grid-cols-2">
              <SNSButton
                img={"/instaglam.png"}
                imgClass={"w-8 m-auto"}
                bgClass={"bg-black py-2"}
                link={"https://www.instagram.com/maimaro.world/"}
              />
              <SNSButton
                img={"/twitter.png"}
                imgClass={"w-8 m-auto"}
                bgClass={"bg-black py-2"}
                link={"https://twitter.com/maimaro_poppin"}
              />
            </div>
          </div>
          <div className="m-1">
            <div className="mt-1 bg-white py-1.5 text-center rounded-md rounded-b-none grid grid-cols-2">
              <img
                src="/logo_youtube.jpg"
                className="m-auto w-20 object-cover h-12"
              />
              <a href="https://www.youtube.com/channel/UC7fZCrGDqZeFrHA4WUFZncg/featured" className="my-3">
                <p className="bg-red-500 w-28 m-auto rounded-full py-1.5 text-white text-xs shadow-md sm:py-3 duration-300 hover:opacity-70 cursor-pointer">
                  チャンネル登録
                </p>
              </a>
            </div>
            <div className="border rounded-md rounded-t-none border-white">
              <iframe
                className="w-full h-56 sm:h-72 md:h-96 m-auto max-w-screen-md p-2"
                src="https://www.youtube.com/embed/_KyTv0TgiWE?start=120"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
          <ul className="grid grid-cols-2 mt-2">
            <PhotoCard title={"プロフィール"} img={"/profile.jpg"} link={"/"} />
            <PhotoCard title={"（ページ名）"} img={"/top.jpg"} link={"/"} />
          </ul>
          <br />
          <div className="text-center">
            <p className="text-white text-sm">SNSで共有する</p>
            <ShareButton text={title} url={url} />
          </div>
        </div>
      </main>
    </>
  );
}
