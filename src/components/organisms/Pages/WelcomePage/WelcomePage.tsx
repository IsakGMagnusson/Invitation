import text from "./text.json";

const splashImg = require("../../../../assets/coolhalopicture.jpg");

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <img src={splashImg} />
      <h1>{text.header}</h1>
      <h2>{text.text1}</h2>
      <h2>{text.text2}</h2>
      <h2>{text.text3}</h2>
      <h2>
        {text.text4}
        <a href="https://youtu.be/dQw4w9WgXcQ?si=fsCY_DbPk7pRtFG3">
          {text.linkword1}
        </a>
      </h2>
      <h2>
        {text.text5}
        <a href="https://youtu.be/dQw4w9WgXcQ?si=fsCY_DbPk7pRtFG3">
          {text.linkword1}
        </a>
      </h2>
      <h2>{text.text6}</h2>
      <h2>{text.text7}</h2>
    </div>
  );
};

export default WelcomePage;
