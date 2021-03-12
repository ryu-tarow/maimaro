import Header from "components/Header";
import Footer from "components/Footer";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col bg-black">
        <Header />
        <div className="flex-grow mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
