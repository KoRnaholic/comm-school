import user from "../icons/user.svg";
import cart from "../icons/cart.svg";
import menu from "../icons/menu.svg";
import { navigation } from "../data/data.js";

function Header() {
  return (
    <header className="py-5 px-5 lg:py-5 lg:px-20 bg-slate-50">
      <nav className="flex justify-between items-center">
        <div>
          <div className="logo">
            Open<span className="text-yellow-300">Market</span>
          </div>
        </div>

        <div>
          <ul className="hidden lg:flex gap-8 text-lg">
            {navigation.map((data) => {
              return (
                <li
                  key={data.name}
                  className="border-b-4 border-transparent hover:border-black"
                >
                  <a href={data.url}>{data.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ul className="hidden lg:flex gap-5 items-center">
            <li>
              <img
                className="cursor-pointer"
                src={user}
                alt="logo2"
                width="25px"
              />
            </li>
            <li>
              <img
                className="cursor-pointer"
                src={cart}
                alt="logo3"
                width="25px"
              />
            </li>
          </ul>
        </div>

        <div className="lg:hidden cursor-pointer">
          <img src={menu} alt="menu" width="35px" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
