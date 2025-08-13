import { useState } from "react";
import FormHeader from "../atoms/Form/FormHeader";
import FormRadioButtons from "../atoms/Form/FormRadioButtons";
import FormTextArea from "../atoms/Form/FormTextArea";
import FormTextInput from "../atoms/Form/FormTextInput";

const NoticeForm = () => {
  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
    };
    const date = new Date();
    const inputValue: { [key: string]: string } = {
      name: target.name.value,
      isComing: isComing,
      sent: date.toLocaleString(),
    };
    console.log(inputValue);
    if (inputValue.name === "" || inputValue.isComing === "") {
      alert("Ge all info");
      return;
    }
    const APP_ID =
      "AKfycbx5auii34v2lN8FNR6jKHvBpb4d7rvXJedc9T9pOCTiTnoI9btDUzHE_zte6t2iD-aC";
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;
    const formData = new FormData();
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key]);
    });

    try {
      const res = await fetch(baseURL, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Worked");

        console.log("Request was successful:", res);
      } else {
        alert("Failed");
        console.log("Request Failed:", res);
      }
    } catch (e) {
      alert("Failed");

      console.error("Error during fetch:", e);
    }
  };

  const [isComing, setIsComing] = useState("");

  return (
    <form onSubmit={handlePost} className="notice-form">
      <div className="form-section">
        <FormHeader text="Namn" />
        <FormTextInput name="name" />
      </div>
      <div className="form-section">
        <div className="form-radiobuttons-section">
          <FormHeader text="Kommer du dyka upp?" />
          <div className="radiobuttons-box">
            <FormRadioButtons
              label="Ja, klart man får ställa upp"
              value="yes"
              setIsComing={setIsComing}
            />
          </div>
          <div className="radiobuttons-box">
            <FormRadioButtons
              label="Nei, vil ikke"
              value="no"
              setIsComing={setIsComing}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <FormHeader text="Allergier / matavvikelser - lämna blank om inga" />

        <FormTextArea name="allergies" />
      </div>

      <button>Svara</button>
    </form>
  );
};

export default NoticeForm;
