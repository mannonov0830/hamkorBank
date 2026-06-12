let data = [
  {
    id: 1,
    images:
      "https://hamkorbank.uz/assets/images-cache/products/physical/home-slider-menu/loans_new_xl.196cae40.webp",
    title: "Kreditlar",
    text: "Onlayn kredit",
    btn: "Rasmilashtirish",
  },
  {
    id: 2,
    images:
      "https://hamkorbank.uz/assets/images-cache/products/physical/home-slider-menu/debit_cards_xl.196cae40.webp",
    title: "Debet kartalar",
    text: "Yutuqli aksiyalar",
    btn: "Ochish",
  },
  {
    id: 3,
    images:
      "https://hamkorbank.uz/assets/images-cache/products/physical/home-slider-menu/autoloan_xl.196cae40.webp",
    title: "Avtokreditlar",
    text: "Sizning avtomobilingiz uchun",
    btn: "Rasmilashtirish",
  },
  {
    id: 4,
    images:
      "https://hamkorbank.uz/assets/images-cache/products/physical/home-slider-menu/credit_card_xl.196cae40.webp",
    title: "Kredit karta",
    text: "Odatdagidan tezroq",
    btn: "Rasmilashtirish",
  },
  {
    id: 5,
    images:
      "https://hamkorbank.uz/assets/images-cache/products/physical/home-slider-menu/mortgage_xl.196cae40.webp",
    title: "Ipoteka",
    text: "20 yilgacha",
    btn: "Rasmilashtirish",
  },
  {
    id: 6,
    images:
      "https://hamkorbank.uz/assets/images-cache/products/physical/home-slider-menu/deposits_xl.196cae40.webp",
    title: "Omonatlar",
    text: "Har oyda daromad",
    btn: "Rasmilashtirish",
  },
];

const Cart = () => {
  return (
    <>
      <div className="swpier container">
        <h4>Avtokeridit</h4>
        <p>Orzuyigzdaki mashinani oling</p>
        <button>Rasmilashtirish</button>
      </div>
      <div className="cart container">
        {data.map(({ id, images, title, text, btn }) => (
          <div className="cartBox" key={id}>
            <img src={images} alt="" />
            <h4>{title}</h4>
            <p>{text.length > 20 ? text.slice(0, 20) + "..." : text}</p>
            <button>{btn}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
