import text from "./text.json";

const splashImg = require("../../../../assets/coolhalopicture.jpg");

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <img src={splashImg} />
      <h1>{text.header}</h1>
      <p>{text.text1}</p>
      <p>{text.text2}</p>
      <p>{text.text3}</p>
      <p>
        {text.text4}
        <a href="https://youtu.be/dQw4w9WgXcQ?si=fsCY_DbPk7pRtFG3">
          {text.linkword1}
        </a>
      </p>
      <p>
        {text.text5}
        <a href="https://youtu.be/dQw4w9WgXcQ?si=fsCY_DbPk7pRtFG3">
          {text.linkword1}
        </a>
      </p>
      <p>{text.text6}</p>
      <p>{text.text7}</p>
    </div>
  );
};

export default WelcomePage;
