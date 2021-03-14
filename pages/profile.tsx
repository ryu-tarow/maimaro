import {
  ProfileBar,
  TitleBar,
  BackButton,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Profile() {
  const title = "まいまろわーるど";
  const url = "https://maimaro.vercel.app/profile";
  const image = "profile.jpg";
  const pageTitle = "まいまろわーるど｜プロフィール";
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
        <TitleBar text={"プロフィール"} />
        <div className="max-w-screen-md w-11/12 m-auto grid sm:grid-cols-2">
          <div>
            <img src="/profile.jpg" className="p-4 rounded-3xl" />
          </div>
          <div className="my-3">
            <ProfileBar item={"名前"} text={"まいまろ。"} />
            <ProfileBar item={"出身地"} text={"福岡県"} />
            <ProfileBar item={"誕生日"} text={"10月7日"} />
            <ProfileBar item={"血液型"} text={"AB型"} />
            {/* <ProfileBar item={""} text={""} /> */}
          </div>
        </div>
        <div className="text-center m-3">
          <p className="text-white text-sm"></p>
          <ShareButton text={pageTitle} url={url} />
        </div>
      </main>
    </>
  );
}
