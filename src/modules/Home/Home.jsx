import React, { useEffect, useState } from "react";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Main from "../../components/Main/Main";
import Member from "../../components/Members/Member";
import Nav from "../../components/NavBar/Nav";
import Products from "../../components/Product/Products";
import Statistic from "../../components/Statistics/Statistic";
import { useAuth } from "../Context/Contextindex";

const Home = () => {
  //  dark mode

  const [darkblack, setDarkMode] = useState("light");

  useEffect(() => {
    if (darkblack === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkblack]);

  const toggleDarkMode = () => {
    setDarkMode(darkblack === "dark" ? "light" : "dark");
  };
  // هنا هتحط ال كود بتاعك ال هو المنتجات عشان تسمع ف السيكشن بتاع المنتجات


  const { currentUser } = useAuth()

  return (

    <>
        <div className='text-2xl font-bold pt-4'> {
  currentUser 
    ? (
      
       <span className="flex justify-center">Hello {currentUser.displayName ? currentUser.displayName : currentUser.text}</span>
     
        
      )
    : (undefined)
}</div>

      <div className="bg-none  fixed  top-32 ml-5">
        <label class="ui-switch">
          <input type="checkbox" />
          <div onClick={toggleDarkMode} class="slider">
            <div class="circle"></div>
          </div>
        </label>
      </div>
      <Nav />
      <Main />
      <Gallery />
      <Feature />
      <Statistic />
      <Products />
      <Member />
      <Footer />
    </>
  );
};

export default Home;
