import useDictionary from "@functions/dictionary";

import Wrapper from "@components/Wrapper";
import Hero from "@features/contact/Hero";
import FormInput from "@features/contact/FormInput";
import ConnectUs from "@features/contact/ConnectUs";

const Home: React.FC<Page> = async ({ params }) => {
  const { lang } = await params;
  const dict = await useDictionary(lang);

  return (
    <Wrapper lang={lang} contact>
      <Hero />
      <FormInput />
      <ConnectUs />
    </Wrapper>
  );
};

export default Home;
