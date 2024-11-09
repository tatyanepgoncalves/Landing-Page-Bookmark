import LogoImage from "../../images/logo-bookmark.svg";

export default function Header() {
  return (
    <header>
      <img src={LogoImage} alt="BookMark Logo" className="logo" />

      <nav>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <a href="#login" className="btn-login">Login</a>
      </nav>
    </header>
  )
}
