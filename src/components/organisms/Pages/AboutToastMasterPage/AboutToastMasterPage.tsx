import text from "./text.json";

const AboutToastMasterPage = () => {
  return (
    <div className="welcome-page">
      <h1>{text.header}</h1>
      <p>{text.text1}</p>
      <p>{text.text2}</p>

      <h2>{text.toastmasterheader}</h2>
      <p>{text.toastmasterinfo1}</p>
      <h2>{text.toastmadameheader}</h2>
      <p>{text.toastmadameinfo1}</p>
    </div>
  );
};

export default AboutToastMasterPage;
