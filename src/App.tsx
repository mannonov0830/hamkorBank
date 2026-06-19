import { useState, useEffect } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Grid from "./Grid";
import Visa from "./Visa";
import Footer from "./Footer";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const online = () => {
      setIsOnline(true);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    };

    const offline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="offline">
        <div className="spinner"></div>
        <h1>Siz oflaynsiz</h1>
        <p>Internetni tekshiring...</p>
      </div>
    );
  }

  return (
    <>
      
      {showMessage && (
        <div className="toast">
          ✅ Siz yana onlaynsiz
        </div>
      )}

      <Navbar />
      <Cart />
      <Grid />
      <Visa />
      <Footer />
    </>
  );
};

export default App;