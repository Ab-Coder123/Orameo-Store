import { Link } from "react-router-dom";

Link;
const Footer = () => {
  return (
    <>
      <section className="text-gray-400body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">
            Kickstarter Actually Pinterest Brunch Bitters Occupy
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="flex md:mt-4 mt-6">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <a className="text-indigo-400 w-72 inline-flex items-center ml-4">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Products
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Tablets
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Smart Home Devices
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Offers and Discounts
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Daily Deals
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Weekly Discounts
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Seasonal Sales
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Clearance
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Support and Customer Service"
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-400 hover:text-white">FAQs</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                About Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    About the Store
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Our Vision and Mission
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Testimonials and Reviews
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Meet the Team
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                My Account
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Account Settings
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Blog
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Tech Tips
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Latest Gadgets
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Product Reviews
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white">
                    Industry News
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label className="leading-7 text-sm text-gray-400">
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" />
                waistcoat green juice
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <Link className="text-gray-400">
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2020 DopamineCode7 —
              <Link
                to="linkedin.com/in/abdo-ahmed-ali-708a5a213"
                className="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Abdulrahman
              </Link>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
              Enamel pin tousled raclette tacos irony
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
