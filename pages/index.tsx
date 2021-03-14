import { PhotoCard, ShareButton, SNSButton } from "components/UIkit";
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
              src="/top.png"
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
                <a href="https://www.youtube.com/channel/UC7fZCrGDqZeFrHA4WUFZncg/featured">
                  <img
                    src="/snsIcons/youtube.png"
                    alt=""
                    className="w-32 sm:w-56 duration-300 hover:opacity-70 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:px-5 m-auto max-w-screen-md">
          <div className="grid grid-cols-2 mt-0.5 bg-black">
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
            <div className="mt-1 bg-white text-center rounded-md grid grid-cols-2">
              <img
                src="/logo_youtube.jpg"
                className="m-auto w-20 object-cover h-12"
              />
              <a
                href="https://www.youtube.com/channel/UC7fZCrGDqZeFrHA4WUFZncg/featured"
                className="my-3"
              >
                <p className="bg-red-500 w-28 m-auto rounded-full py-1.5 text-white text-xs shadow-md sm:py-3 duration-300 hover:bg-red-600 cursor-pointer">
                  チャンネル登録
                </p>
              </a>
            </div>
            <div className="mt-2">
              <iframe
                className="w-full h-52 sm:h-96"
                src="https://www.youtube.com/embed/_KyTv0TgiWE?start=120"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
          <ul className="grid grid-cols-2 mt-2">
            <PhotoCard
              title={"プロフィール"}
              img={"/profile.jpg"}
              link={"/profile"}
            />
            <PhotoCard
              title={"写真集"}
              img={"/photos/sexy_02.jpg"}
              link={"/photos"}
            />
          </ul>
          <div className="text-center m-3">
            <p className="text-white text-sm"></p>
            <ShareButton text={title} url={url} />
          </div>
        </div>
      </main>
    </>
  );
}
