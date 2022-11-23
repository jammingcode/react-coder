import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/#" className="navbar-brand">
          Mi Tienda
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Mostrar / Ocultar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
