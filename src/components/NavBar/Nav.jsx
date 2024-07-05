import imglogo from "../../assets/images/Galleries/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../modules/Context/Contextindex";
import { doSignOut } from "../../modules/Firebase/auth";
const Nav = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (

    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={imglogo} className="w-10 h-10 rounded-full" />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            <span className="ml-3 text-xl">Orimo</span>
          </Link>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link
              to="/modules/Products/Productspage"
              className="mr-5 hover:text-gray-900"
            >
              Product
            </Link>
            <Link to="" className="mr-5 hover:text-gray-900">
              Members
            </Link>
            <Link
              to="/modules/Contact/Contact"
              className="mr-5 hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>

          <div className=" flex flex-wrap items-center">
            <Link to="/modules/Cart/Cart">
              <button className="inline-flex items-center mr-5  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Cart
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>

            {userLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate("/modules/Login/Login");
                    });
                  }}
            className="inline-flex items-center mr-5  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  Logout
                </button>


                
              </>
            ) : (
              <>
                <Link to="/modules/Login/Login">
                  <button className="inline-flex items-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-3 md:mt-0">
                    Login
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>{" "}
                
                <Link to="/modules/SignUp/SignUp">
                  <button className="inline-flex items-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    SignUp
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
