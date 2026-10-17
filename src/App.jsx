import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import MainContent from "./pages/Main-Content";
import { InvitadoProvider, useInvitado } from "./context/InvitadoContext";

function Gate({ children }) {
  const { estado } = useInvitado();

  if (estado === "cargando") {
    return (
      <p style={{ textAlign: "center", marginTop: "30vh" }}>
        Cargando tu invitación…
      </p>
    );
  }

  if (estado === "invalido") {
    return (
      <div
        style={{ textAlign: "center", marginTop: "30vh", padding: "0 20px" }}
      >
        <h1>Necesitás tu enlace personal</h1>
        <p>Abrí el enlace que te enviaron los novios por WhatsApp o correo.</p>
      </div>
    );
  }

  return children;
}

function MantenerCodigo() {
  const { codigo } = useInvitado();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const yaTiene = new URLSearchParams(location.search).get("i");
    if (codigo && !yaTiene) {
      navigate(
        { pathname: location.pathname, search: `?i=${codigo}` },
        { replace: true },
      );
    }
  }, [codigo, location, navigate]);

  return null;
}

function App() {
  return (
    <InvitadoProvider>
      <BrowserRouter>
        <MantenerCodigo />
        <Gate>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuestra-boda" element={<MainContent />} />
          </Routes>
        </Gate>
      </BrowserRouter>
    </InvitadoProvider>
  );
}

export default App;
