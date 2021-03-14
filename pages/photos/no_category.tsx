import { BackButton, Photo, ShareButton, TitleBar } from "components/UIkit";
import Head from "next/head";

export default function NoCategory() {
  const title = "まいまろわーるど";
    const url = "https://maimaro.vercel.app/photos/no_category";
    const baseUrl = "https://maimaro.vercel.app";
  const image = "photos/unique.jpg";
  const pageTitle = "まいまろわーるど｜その他写真";
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
        <TitleBar text={"その他"} />
        <ul className="grid grid-cols-2 w-11/12 m-auto max-w-screen-md sm:grid-cols-3 md:grid-cols-4">
          <Photo photo={"/standard.jpg"} photoName={"standard"} />
          <Photo photo={"/standard_02.jpg"} photoName={"standard02"} />
          <Photo photo={"/dog.jpg"} photoName={"dog"} />
          <Photo photo={"/dog_02.jpg"} photoName={"dog02"} />
          <Photo photo={"/unique.jpg"} photoName={"unique"} />
          <Photo photo={"/unique_02.jpg"} photoName={"unique02"} />
          <Photo photo={"/student.jpg"} photoName={"student"} />
        </ul>
        <div className="text-center m-3">
          <p className="text-white text-sm"></p>
          <ShareButton text={pageTitle} url={url} />
        </div>
      </main>
    </>
  );
}
