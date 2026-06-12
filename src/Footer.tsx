import logo from "./assets/mobile_app.svg";
const Footer = () => {
  return (
    <footer className="bank-footer">
      <div className="footer-container">
        <div className="footer-column contact-column">
          <div className="phone-group">
            <span className="phone-number">0 (800) 1 200 200, 1256</span>
            <span className="phone-label">Aloqa markazi</span>
          </div>
          <div className="phone-group">
            <span className="phone-number">+998 78 150-91-25</span>
            <span className="phone-label">Ishonch telefoni</span>
          </div>
        </div>

        <div className="footer-column">
          <ul>
            <li>
              <a href="#ofislar">Bank ofislari va bankomatlar</a>
            </li>
            <li>
              <a href="#kurslar">Valyutalar kursi</a>
            </li>
            <li>
              <a href="#kabinet">Shaxsiy kabinet</a>
            </li>
            <li>
              <a href="#qayta-aloqa">Qayta aloqa</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <ul>
            <li>
              <a href="#jismoniy">Jismoniy shaxslar uchun</a>
            </li>
            <li>
              <a href="#biznes">Biznes uchun</a>
            </li>
            <li>
              <a href="#moliyaviy">Moliyaviy tashkilotlarga</a>
            </li>
            <li>
              <a href="#haqida">Bank haqida</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <ul>
            <li>
              <a href="#matbuot">Matbuot markazi</a>
            </li>
            <li>
              <a href="#rekvizitlar">Rekvizitlar</a>
            </li>
            <li>
              <a href="#internet-bank">Internet-bank</a>
            </li>
            <li>
              <a href="#sayt-xaritasi">Sayt xaritasi</a>
            </li>
          </ul>
        </div>

        <div className="footer-column mobile-bank-column">
          <div className="mobile-bank-container">
            <div className="bank-logo-wrapper">
              <div className="bank-logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="mobile-bank-text">
              <h4>Mobil bank</h4>
              <p>Android va iOS uchun ilova</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <button className="corruption-btn">
          Korrupsiya haqida xabar berish
        </button>

        <div className="social-icons">
          <a href="#facebook" className="social-link">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#instagram" className="social-link">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#youtube" className="social-link">
            <i className="ri-youtube-fill"></i>
          </a>
          <a href="#telegram" className="social-link">
            <i className="ri-telegram-2-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
