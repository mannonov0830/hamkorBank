import logo from "./assets/logo.svg";
const arr = [
  "Kreditlar",
  "Kartalar",
  "Avtokreditlar",
  "Ipoteka",
  "Omonatlar",
  "Valyutalar kursi",
  "Yana",
];
const Navbar = () => {
  return (
    <header>
      <nav className="navbar container">
        <div className="logFlex">
          <img src={logo} alt="" />
          {arr.map((item, inedx) => (
            <ul>
              <li key={inedx}>{item}</li>
            </ul>
          ))}
        </div>
        <div className="btnFlex">
          <div className="btn">
            <p>$</p>
            <div>
              <h4>Sotib olish</h4>
              <p>12 339</p>
            </div>
            <div>
              <h4>Sotish</h4>
              <p>12 356</p>
            </div>
          </div>
          <button>Onlayn arizalar</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

