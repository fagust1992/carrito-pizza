import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light  menu">
      <div class="container-fluid">
        <div className="nav-item">
          <Link to="/"> 🍕🍕¡Pizzería Mamma Mia!🍕🍕</Link>
        </div>

        <div className="d-flex gap-2">
          <div className="nav-item">
            <Link
              to="/carrito
            "
            >
              {" "}
              <i class="fa-solid fa-cart-arrow-down icono"></i> Total
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
