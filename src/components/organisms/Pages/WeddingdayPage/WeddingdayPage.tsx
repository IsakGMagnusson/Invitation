import WeddingdayLine from "../../../atoms/WeddingdayLine";
import text from "./text.json";
const fikabild = require("../../../../assets/fikabild.jpg");
const vigselbild = require("../../../../assets/vigselbild.jpg");

const WeddingdayPage = () => {
  return (
    <div className="weddingday-page">
      <h1>{text.header}</h1>

      <div className="weddingday-section">
        <img className="weddingday-image" src={fikabild} />
        <div className="weddingday-text">
          <h3>{text.header1}</h3>
          <p>{text.text1}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={vigselbild} />
        <div className="weddingday-text">
          <h3>{text.header2}</h3>
          <p>{text.text2}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={fikabild} />
        <div className="weddingday-text">
          <h3>{text.header3}</h3>
          <p>{text.text3}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={fikabild} />
        <div className="weddingday-text">
          <h3>{text.header4}</h3>
          <p>{text.text5}</p>
          <p>{text.text6}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={fikabild} />
        <div className="weddingday-text">
          <h3>{text.header5}</h3>
          <p>{text.text7}</p>
        </div>
      </div>
      <WeddingdayLine />
    </div>
  );
};

export default WeddingdayPage;
