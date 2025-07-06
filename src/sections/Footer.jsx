import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map(({ name, imgPath, link }) => (
            <a 
              key={name} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={imgPath} alt={`${name} social media icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aliya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;