import Logo from "../logo.svg";

function Header() {
  return (
    <header>
      <div className="header-wrap">
        <img className="react-logo" src={Logo} alt="React logo"></img>
        <h1>Welcome to React</h1>
      </div>
    </header>
  );
}
export default Header;
