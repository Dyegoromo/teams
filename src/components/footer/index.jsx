import "./footer-css.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/DyegoR" target="_blank">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/dyegoromo/" target="_blank">
          <img src="/img/linkedin.png" alt="twitter" className="linkedin" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Website developed by Diego R.</strong>
    </footer>
  );
};

export default Footer;
