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

  const todo = () => {
    alert("todo: fixa funktionalitet");
  };

  const [isComing, setIsComing] = useState("");

  return (
    <form className="notice-form" onSubmit={handlePost}>
      <div className="form-section">
        <FormHeader text="Namn" />
        <FormTextInput name="name" />
      </div>
      <div className="form-section">
        <div className="form-radiobuttons-section">
          <FormHeader text="Kommer du?" />
          <div className="radiobuttons-box">
            <FormRadioButtons
              label="Ja, såklart!"
              value="yes"
              setIsComing={setIsComing}
            />
          </div>
          <div className="radiobuttons-box">
            <FormRadioButtons
              label="Nej, tyvärr!"
              value="no"
              setIsComing={setIsComing}
            />
          </div>
        </div>
      </div>
      {isComing === "yes" && (
        <>
          <div className="form-section">
            <FormHeader text="Ange eventuella allergier och specialkost, skriv nej om du inte har några" />
            <FormTextArea name="allergies" />
          </div>

          <div className="form-section">
            <FormHeader text="En låt jag absolut inte kan sitta still till…" />
            <FormTextArea name="song" />
          </div>

          <div className="form-section">
            <FormHeader text="Jag kommer ta bil och vill ta med mig fler bröllopsgäster eller skulle vilja samåka med någon som har bil." />
            <FormTextArea name="transport" />
          </div>

          <button type="button" onClick={todo}>
            +Lägg till person
          </button>
        </>
      )}
      <button type="submit">Svara</button>
    </form>
  );
};

export default NoticeForm;
