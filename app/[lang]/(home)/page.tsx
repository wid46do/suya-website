import Wrapper from "@components/Wrapper";
import Jumbotron from "@features/home/Jumbotron";
import Porto from "@features/home/Porto";
import useDictionary from "@functions/dictionary";

const Home: React.FC<Page> = async ({ params }) => {
  const { lang } = await params;
  const dict = await useDictionary(lang);

  return (
    <Wrapper lang={lang}>
      <Jumbotron />
      <Porto />
    </Wrapper>
  );
};

export default Home;
