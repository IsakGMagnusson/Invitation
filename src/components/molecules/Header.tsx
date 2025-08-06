import MenuButton from "../atoms/MenuButton";

type HeaderProps = {
  selectedWelcome: () => void;
  selectedInfo: () => void;
};

const Header = ({ selectedWelcome, selectedInfo }: HeaderProps) => {
  return (
    <div className="Header">
      <MenuButton label={"Välkommen"} onClick={selectedWelcome} />
      <MenuButton label={"Info"} onClick={selectedInfo} />
    </div>
  );
};

export default Header;
