import Wrapper from "@components/Wrapper";
import Hero from "@features/service/Hero";
import Timber from "@features/service/Timber";
import Works from "@features/service/Works";
import useDictionary from "@functions/dictionary";

const Services: React.FC<Page> = async ({ params }) => {
  const { lang } = await params;
  const dict = await useDictionary(lang);
  return (
    <Wrapper lang={lang}>
      <Hero />
      <Works />
      <Timber />
    </Wrapper>
  );
};

export default Services;
