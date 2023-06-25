import "./Header.css";

const Header = ({ headerText = "Hello" }) => {
  return (
    <header className="header-class">
      <div className="container">{headerText}</div>
    </header>
  );
};

export default Header;
