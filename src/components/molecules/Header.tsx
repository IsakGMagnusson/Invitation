import MenuButton from "../atoms/MenuButton";

type HeaderProps = {
  setPageValue: (pageValue: number) => void;
};

const Header = ({ setPageValue }: HeaderProps) => {
  return (
    <div className="Header">
      <MenuButton label={"VÄLKOMMEN"} onClick={setPageValue} pageValue={0} />
      <MenuButton label={"INFO"} onClick={setPageValue} pageValue={1} />
      <MenuButton label={"ÖNSKELISTA"} onClick={setPageValue} pageValue={2} />
      <MenuButton label={"O.S.A."} onClick={setPageValue} pageValue={3} />
      <MenuButton label={"KONTAKT"} onClick={setPageValue} pageValue={4} />
    </div>
  );
};

export default Header;
