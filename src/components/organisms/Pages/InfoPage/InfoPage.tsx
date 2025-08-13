import WeddingdayLine from "../../../atoms/WeddingdayLine";
import text from "./text.json";

const InfoPage = () => {
  return (
    <div className="weddingday-page">
      <h1>{text.header}</h1>

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3>{text.header1}</h3>
          <p>{text.text1}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3>{text.header2}</h3>
          <p>{text.text2}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3>{text.header3}</h3>
          <p>{text.text3}</p>
          <p>{text.text4}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3>{text.header4}</h3>
          <p>{text.text5}</p>
          <p>{text.text6}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3>{text.header5}</h3>
          <p>{text.text7}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3>{text.header6}</h3>
          <p>{text.text8}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3>{text.header7}</h3>
          <p>{text.text9}</p>
          <p>{text.text10}</p>
        </div>
      </div>
      <WeddingdayLine />
    </div>
  );
};

export default InfoPage;
