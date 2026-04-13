"use client";

import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Header from "@components/Header";

interface Props {
  children: React.ReactNode;
  lang: string;
}

const Wrapper: React.FC<Props> = ({ children, lang }) => {
  return (
    <div>
      <Header lang={lang} />
      <div className="">{children}</div>
      <Contact />
      <Footer lang={lang} />
    </div>
  );
};

export default Wrapper;
