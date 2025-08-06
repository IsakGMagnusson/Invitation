import useSelectedPage from "../hooks/useSelectedPage";
import Header from "./molecules/Header";
import InfoPage from "./organisms/InfoPage";
import ContactPage from "./organisms/ContactPage";
import NoticePage from "./organisms/NoticePage";
import WelcomePage from "./organisms/WelcomePage";
import WishListPage from "./organisms/WishListPage";

const MainPage = () => {
  const { page, setPageValue } = useSelectedPage();

  function selectPage(page: number) {
    if (page === 0) return <WelcomePage />;
    else if (page === 1) return <InfoPage />;
    else if (page === 2) return <WishListPage />;
    else if (page === 3) return <NoticePage />;
    else if (page === 4) return <ContactPage />;
  }

  return (
    <div className="MainPage">
      <div className="startText">
        <h1>Välkommen på bröllop: x & y edition</h1>
      </div>
      <div className="HeaderBox">
        <Header setPageValue={setPageValue} />
      </div>

      <div className="PageBox">{selectPage(page)}</div>
    </div>
  );
};

export default MainPage;
