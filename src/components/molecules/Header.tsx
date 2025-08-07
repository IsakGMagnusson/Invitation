import MenuButton from "../atoms/MenuButton";

type HeaderProps = {
  setPageValue: (pageValue: number) => void;
};

const Header = ({ setPageValue }: HeaderProps) => {
  return (
    <div className="Header">
      <div className="startText">
        <p className="header-line1">Välkommen på bröllop</p>
        <p className="header-line2">Bla & Blä</p>
        <p className="header-line3">15 april 2026</p>
      </div>
      <div className="Line"></div>
      <div className="HeaderButtons">
        <MenuButton label={"VÄLKOMMEN"} onClick={setPageValue} pageValue={0} />
        <MenuButton label={"INFO"} onClick={setPageValue} pageValue={1} />
        <MenuButton label={"ÖNSKELISTA"} onClick={setPageValue} pageValue={2} />
        <MenuButton label={"O.S.A."} onClick={setPageValue} pageValue={3} />
        <MenuButton label={"KONTAKT"} onClick={setPageValue} pageValue={4} />
      </div>
    </div>
  );
};

export default Header;
