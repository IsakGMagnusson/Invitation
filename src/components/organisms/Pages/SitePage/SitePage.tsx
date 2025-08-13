import text from "./text.json";

const SitePage = () => {
  return (
    <div className="welcome-page">
      <h1>{text.header}</h1>
      <p>{text.text1}</p>
      <p>{text.text2}</p>
      <p>{text.text3}</p>
      <p>{text.text4}</p>
      <p>{text.text5}</p>
    </div>
  );
};

export default SitePage;
