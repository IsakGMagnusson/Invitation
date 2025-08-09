import text from "./text.json";

const WeddingdayPage = () => {
  return (
    <div className="welcome-page">
      <h1>{text.header}</h1>
      <h1>{text.header1}</h1>
      <h2>{text.text1}</h2>
      <h1>{text.header2}</h1>

      <h2>{text.text2}</h2>
      <h1>{text.header3}</h1>

      <h2>{text.text3}</h2>
      <h2>{text.text4}</h2>
      <h1>{text.header4}</h1>

      <h2>{text.text5}</h2>
      <h2>{text.text6}</h2>
      <h1>{text.header5}</h1>

      <h2>{text.text7}</h2>
    </div>
  );
};

export default WeddingdayPage;
