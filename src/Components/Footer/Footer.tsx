import ImageLogoWhite from "../../images/logo-bookmark-white.svg";
import { BsFacebook, BsTwitter  } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className='footer'>

      <div className="footer-links">
        <div className="logo-img">
          <img src={ImageLogoWhite} alt="Logo White" />
        </div>

        <ul className="footer-link">
          <li><a href="#features">Features</a></li>
          <li><a href="#Pricing">Princing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="RS">
          <ul>
            <li><a href="#"><BsFacebook /></a></li>
            <li><a href="#"><BsTwitter /></a></li>
          </ul>
        </div>
      </div>

      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="https://github.com/tatyanepgoncalves" target="_blank">Tatyane Gonçalves</a>.
      </p>
    </footer>
  )
}
