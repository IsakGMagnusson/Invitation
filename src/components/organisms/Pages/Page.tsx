import InfoPage from "./InfoPage/InfoPage";
import ContactPage from "./ContactPage/ContactPage";
import NoticePage from "./NoticePage/NoticePage";
import WelcomePage from "./WelcomePage/WelcomePage";
import WeddingdayPage from "./WeddingdayPage/WeddingdayPage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import SitePage from "./SitePage/SitePage";
import AboutToastMasterPage from "./AboutToastMasterPage/AboutToastMasterPage";

type PageProps = {
  page: number;
};
const Page = ({ page }: PageProps) => {
  function selectPage(page: number) {
    if (page === 0) return <WelcomePage />;
    else if (page === 1) return <WeddingdayPage />;
    else if (page === 2) return <InfoPage />;
    else if (page === 3) return <AboutUsPage />;
    else if (page === 4) return <SitePage />;
    else if (page === 5) return <NoticePage />;
    else if (page === 6) return <AboutToastMasterPage />;
    else if (page === 7) return <ContactPage />;
  }

  return <div className="PageBox">{selectPage(page)}</div>;
};

export default Page;
