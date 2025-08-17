import text from "./text.json";

const AboutToastMasterPage = () => {
  return (
    <div className="welcome-page">
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>

      <h3 className="standard-header">{text.toastmasterheader}</h3>
      <p className="standard-text">{text.toastmasterinfo1}</p>
      <h3 className="standard-header">{text.toastmadameheader}</h3>
      <p className="standard-text">{text.toastmadameinfo1}</p>
    </div>
  );
};

export default AboutToastMasterPage;
