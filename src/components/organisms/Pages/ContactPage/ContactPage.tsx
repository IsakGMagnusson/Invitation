import text from "./text.json";

const ContactPage = () => {
  return (
    <div className="welcome-page">
      <h1>{text.header}</h1>
      <p>{text.text1}</p>
      <p>{text.text2}</p>

      <h2>{text.person1}</h2>
      <p>{text.email1}</p>
      <p>{text.phone1}</p>

      <h2>{text.person2}</h2>
      <p>{text.email2}</p>
      <p>{text.phone2}</p>
    </div>
  );
};

export default ContactPage;
