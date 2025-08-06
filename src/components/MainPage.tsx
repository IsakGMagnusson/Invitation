import useSelectedPage from "../hooks/useSelectedPage";
import Header from "./molecules/Header";
import InfoPage from "./organisms/InfoPage";
import WelcomePage from "./organisms/WelcomePage";

const MainPage = () => {
  const { page, selectedWelcome, selectedInfo } = useSelectedPage();

  function selectPage(page: number) {
    if (page === 0) return <WelcomePage />;
    else if (page === 1) return <InfoPage />;
  }

  return (
    <div>
      <div className="startText">
        <h1>Välkommen på bröllop: x & y edition</h1>
      </div>
      <div className="HeaderBox">
        <Header selectedWelcome={selectedWelcome} selectedInfo={selectedInfo} />
      </div>

      <div>{selectPage(page)}</div>
    </div>
  );
};

export default MainPage;
