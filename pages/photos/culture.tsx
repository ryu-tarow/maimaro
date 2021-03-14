import { BackButton, Photo, ShareButton, TitleBar } from "components/UIkit";
import Head from "next/head";

export default function Culture() {
  const title = "まいまろわーるど";
  const url = "https://maimaro.vercel.app/photos/culture";
  const image = "photos/kimono.jpg";
  const pageTitle = "まいまろわーるど｜日本文化写真集";
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
        <BackButton link={"/photos"} />
        <TitleBar text={"日本文化"} />
        <ul className="grid grid-cols-2 w-11/12 m-auto max-w-screen-md sm:grid-cols-3 md:grid-cols-4">
          <Photo photo={"/kimono.jpg"} photoName={"kimono"} />
          <Photo photo={"/yukata_04.jpg"} photoName={"yukata02"} />
          <Photo photo={"/yukata_02.jpg"} photoName={"yukata03"} />
          <Photo photo={"/yukata_03.jpg"} photoName={"yukata02"} />
          <Photo photo={"/yukata.jpg"} photoName={"yukata03"} />
        </ul>
        <div className="text-center m-3">
          <p className="text-white text-sm"></p>
          <ShareButton text={pageTitle} url={url} />
        </div>
      </main>
    </>
  );
}
