import { ProfileBar, TitleBar } from "components/UIkit";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>プロフィール</title>
      </Head>
      <main>
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
      </main>
    </>
  );
}
