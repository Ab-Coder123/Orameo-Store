import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./modules/Home/Home";
import Contact from "./modules/Contact/Contact";
import Products from "./modules/Products/Productspage";
import Cart from "./modules/Cart/Cart";
import Categoriez from "./modules/ProductFeature/Category";
import Buy from "./modules/Buy/Buy";

import img_watch from "./assets/images/Freature/watch_7183194.png";
import img_headphone from "./assets/images/Freature/headphones_8849470.png";
import img_charge from "./assets/images/Freature/wireless-charger_8394735.png";
import Login from "./modules/Login/Login";
import SignUp from "./modules/SignUp/SignUp";
import ForgetPass from "./modules/ForgetPass/ForgetPass";
// داكله عشان البانر 



function App() {
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      {load ? (
        <div className="load">
          <div className="loader">
            <div className="box box-1">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top"></div>
            </div>
            <div className="box box-2">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top"></div>
            </div>
            <div className="box box-3">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top"></div>
            </div>
            <div className="box box-4">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules/Contact/Contact" element={<Contact />} />
            <Route
              path="/modules/Products/Productspage"
              element={<Products />}
            />
            <Route
              path="/modules/ProductFeature/Category"
              element={<Categoriez />}
            />

            <Route path="/modules/Cart/Cart" element={<Cart />} />
            <Route
              path="/watch"
              element={<Categoriez banner={img_watch} category="watch" />}
              //  اما الاكتيجوري دي انتا سويتها ب كل اسم عشان تستخدمها مع ال كوندشن   props البانر ال موجوده دي عشان تبقا ال مود=وده ف كل صفحه من ال تلالته و ب تستدعيها من خلال ال 
            />
            <Route
              path="/headphone"
              element={
                <Categoriez banner={img_headphone} category="headphone" />
              }
            />
            <Route
              path="/charge"
              element={<Categoriez banner={img_charge} category="charge" />}
            />

            <Route path="/Buy" element={<Buy />} >
            <Route path=":Buyid" element={<Buy />} />
            </Route>

            <Route path="/modules/Login/Login" element={<Login/>} />
            <Route path="/modules/SignUp/SignUp" element={<SignUp/>} />
            <Route path="/modules/ForgetPass/ForgetPass" element={<ForgetPass/>} />



          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
