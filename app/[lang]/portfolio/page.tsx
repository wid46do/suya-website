import Responsive from "@components/Responsive";
import Wrapper from "@components/Wrapper";
import Sections from "@features/portfolio/Sections";
import useDictionary from "@functions/dictionary";

const Portfolio: React.FC<Page> = async ({ params }) => {
  const { lang } = await params;
  const dict = await useDictionary(lang);
  return (
    <Wrapper lang={lang}>
      <Responsive className="justify-center flex ">
        <div className="flex flex-col gap-1 justify-center items-center py-20">
          <h1 className="font-extralight uppercase">Portfolio</h1>
          <p>Explore our works here.</p>
        </div>
      </Responsive>
      <Sections />
    </Wrapper>
  );
};

export default Portfolio;
