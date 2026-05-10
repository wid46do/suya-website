import Responsive from "@components/Responsive";
import Wrapper from "@components/Wrapper";
import Sections from "@features/portfolio/Sections";
import useDictionary from "@functions/dictionary";

interface PortfolioPage extends Page {
  searchParams: Promise<{
    portfolio?: string | string[];
  }>;
}

const Portfolio: React.FC<PortfolioPage> = async ({ params, searchParams }) => {
  const { lang } = await params;
  const { portfolio } = await searchParams;
  const dict = await useDictionary(lang);
  const targetPortfolioId = Array.isArray(portfolio) ? portfolio[0] : portfolio;

  return (
    <Wrapper lang={lang}>
      <Responsive className="justify-center flex ">
        <div className="flex flex-col gap-1 justify-center items-center py-20">
          <h1 className="font-extralight uppercase">Portfolio</h1>
          <p>Explore our works here.</p>
        </div>
      </Responsive>
      <Sections targetPortfolioId={targetPortfolioId} />
    </Wrapper>
  );
};

export default Portfolio;
