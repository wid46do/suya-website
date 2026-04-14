"use client";

import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Header from "@components/Header";

interface Props {
  children: React.ReactNode;
  lang: string;
  contact?: boolean;
}

const Wrapper: React.FC<Props> = ({ children, lang, contact = false }) => {
  return (
    <div>
      <Header lang={lang} />
      <div className="">{children}</div>
      {!contact && <Contact />}
      <Footer lang={lang} />
    </div>
  );
};

export default Wrapper;
