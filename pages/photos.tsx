import {
  BackButton,
  PhotoCategory,
  ShareButton,
  TitleBar,
} from "components/UIkit";
import Head from "next/head";

export default function Profile() {
  const title = "まいまろわーるど";
  const url = "https://maimaro.vercel.app/photos";
  const image = "photos/nature_03.jpg";
  const pageTitle = "まいまろわーるど｜写真集";
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
        <BackButton link={"/"} />
        <TitleBar text={"写真集"} />
        <div className="w-11/12 m-auto max-w-screen-md">
          <ul className="relative grid sm:grid-cols-2">
            <PhotoCategory
              text={"セクシー"}
              text02={"sexy"}
              photo={"/sexy_02.jpg"}
              link={"photos/sexy"}
              style={"sm:right-1/2"}
            />
            <PhotoCategory
              text={"ナチュラル"}
              text02={"natural"}
              photo={"/nature_02.jpg"}
              link={"photos/natural"}
              style={""}
            />
            <PhotoCategory
              text={"日本文化"}
              text02={"culture"}
              photo={"/kimono.jpg"}
              link={"photos/culture"}
              style={"sm:right-1/2"}
            />
            <PhotoCategory
              text={"その他"}
              text02={"no category"}
              photo={"/dog_02.jpg"}
              link={"photos/no_category"}
              style={""}
            />
          </ul>
          <div className="text-center m-3">
            <p className="text-white text-sm"></p>
            <ShareButton text={pageTitle} url={url} />
          </div>
        </div>
      </main>
    </>
  );
}
