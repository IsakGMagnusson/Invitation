import text from "./text.json";

const HeaderText = () => {
  return (
    <div className="startText">
      <div className="startText">
        <p className="header-line1">{text.welcome}</p>
        <p className="header-line2">{text.date}</p>
      </div>
    </div>
  );
};

export default HeaderText;
