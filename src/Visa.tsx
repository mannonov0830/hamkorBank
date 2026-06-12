const Visa = () => {
  return (
    <>
      <div className="visaFlex container">
        <div>
          <div className="textFlex">
            <h4>Hamkor ilovasi</h4>
            <ul>
              <li>Valyutani bir zumda ayirboshlang</li>
              <li>Oyiga 5 000 000 so‘mgacha bepul pul o‘tkazing</li>
              <li>Visa Classic kartasini bepul rasmiylashtiring</li>
            </ul>
          </div>
          <div className="secener">
            <img
              src="https://hamkorbank.uz/assets/images-cache/qr/physical-qr-new.b5ccad8a.webp"
              alt=""
            />
            <div>
              <h5>Mobil bankMobil bank</h5>
              <p>
                Bank xizmatlariga tezkor <br /> kirish uchun QR-kodni <br />{" "}
                skanerlash
              </p>
            </div>
          </div>
        </div>
        <img
          className="mobilApp"
          src="https://hamkorbank.uz/assets/images-cache/mobile-app/mobile_app_%D1%81_xl.e625cf8a.webp"
          alt=""
        />
      </div>
      <div className="cart-flex container">
        <div className="cart_box boxtext">
          <div className="imgFlex">
            <h3>Bank ofislari va bankomatlar</h3>
            <img
              src="https://hamkorbank.uz/assets/images-cache/icons/map.24c46457.webP"
              alt=""
            />
          </div>
          <p>
            Naqd pul yechib olishingiz uchun va bizning mahsulotlarni
            rasmiylashtirishingiz uchun yaqin masofada joylashgan bankomatlarni
            ko‘rsatamiz
          </p>
          <button>Xaritani ochish</button>
        </div>
        <div className="cart_box2 boxtext">
          <div className="imgFlex">
            {" "}
            <h3>Qayta aloqa</h3>
            <img
              src="https://hamkorbank.uz/assets/images-cache/icons/message.24c46457.webP"
              alt=""
            />
          </div>
          <p>
            Barcha mahsulotlar bo‘yicha <br /> savollarga javob beramiz
          </p>
          <button>Qo'llab-quvvatlash bilan</button>
        </div>
        <div className="cart_box2 boxtext">
          <div className="imgFlex">
            <h3>Virtual</h3>
            <img
              src="https://hamkorbank.uz/assets/images-cache/icons/documents.24c46457.webP"
              alt=""
            />
          </div>
          <p>Bank Boshqaruv raisiga murojaat</p>
          <button>Murojat qilish</button>
        </div>
      </div>
    </>
  );
};

export default Visa;
