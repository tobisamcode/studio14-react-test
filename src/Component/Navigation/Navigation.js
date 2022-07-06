import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";
import { ReactComponent as LogoText } from "../../assets/icons/logoText.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="logo-wrapper">
        <LogoIcon />
        <LogoText />
      </div>
      <div className="navigation-right">
        <ul>
          <li>The App</li>
          <li>About Us</li>
          <li>Get in Touch</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
