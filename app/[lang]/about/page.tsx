import useDictionary from "@functions/dictionary";

import Wrapper from "@components/Wrapper";
import Hero from "@features/about/Hero";
import History from "@features/about/History";
import Vision from "@features/about/Vision";
import Export from "@features/about/Export";

const Home: React.FC<Page> = async ({ params }) => {
  const { lang } = await params;
  const dict = await useDictionary(lang);

  return (
    <Wrapper lang={lang}>
      <Hero />
      <History />
      <Vision />
      <Export />
    </Wrapper>
  );
};

export default Home;
