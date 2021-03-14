import { BackButton, Photo, ShareButton, TitleBar } from "components/UIkit";
import Head from "next/head";

export default function Natural() {
  const title = "まいまろわーるど";
    const url = "https://maimaro.vercel.app/photos/natural";
    const baseUrl = "https://maimaro.vercel.app";
  const image = "photos/nature_03.jpg";
  const pageTitle = "まいまろわーるど｜ナチュラル写真集";
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
        <meta property="og:image" content={`${baseUrl}/${image}`} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        {/* TwitterCardの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta property="twitter:image" content={`${baseUrl}/${image}`} />
      </Head>
      <main>
        <BackButton link={"/photos"} />
        <TitleBar text={"ナチュラル"} />
        <ul className="grid grid-cols-2 w-11/12 max-w-screen-md m-auto sm:grid-cols-3 md:grid-cols-4">
          <Photo photo={"/nature.jpg"} photoName={"nature"} />
          <Photo photo={"/nature_02.jpg"} photoName={"nature02"} />
          <Photo photo={"/nature_03.jpg"} photoName={"nature03"} />
          <Photo photo={"/swimsuit_03.jpg"} photoName={"swimsuit03"} />
          <Photo photo={"/swimsuit_04.jpg"} photoName={"swimsuit04"} />
        </ul>
        <div className="text-center m-3">
          <p className="text-white text-sm"></p>
          <ShareButton text={pageTitle} url={url} />
        </div>
      </main>
    </>
  );
}
