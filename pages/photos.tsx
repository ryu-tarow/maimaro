import { PhotoCategory, TitleBar } from "components/UIkit";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>写真集</title>
      </Head>
      <main>
        <TitleBar text={"写真集"} />
        <div className="w-11/12 m-auto max-w-screen-md">
          <ul className="relative grid sm:grid-cols-2">
            <PhotoCategory
              text={"セクシー"}
              text02={"sexy"}
              photo={"/sexy_02.jpg"}
              link={"/"}
              style={"sm:right-1/2"}
            />
            <PhotoCategory
              text={"ナチュラル"}
              text02={"nature"}
              photo={"/nature_02.jpg"}
              link={"/"}
              style={""}
            />
            <PhotoCategory
              text={"日本文化"}
              text02={"culture"}
              photo={"/kimono.jpg"}
              link={"/"}
              style={"sm:right-1/2"}
            />
            <PhotoCategory
              text={"その他"}
              text02={"no category"}
              photo={"/dog_02.jpg"}
              link={"/"}
              style={""}
            />
          </ul>
        </div>
      </main>
    </>
  );
}
