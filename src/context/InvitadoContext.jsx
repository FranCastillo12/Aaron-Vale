import { createContext, useContext, useEffect, useState } from "react";

export const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzBqXIN2vZJELiLdVKdVRS-P99meyWJgcaqTTG1IKEa-d9hkyhr5OXSTEgcBPEbgYWF/exec";

const InvitadoContext = createContext(null);

const aInterno = (v) => (v === "Sí" ? "si" : v === "No" ? "no" : "");

export function InvitadoProvider({ children }) {
  const [estado, setEstado] = useState("cargando");
  const [invitado, setInvitado] = useState(null);

  const [codigo] = useState(() => {
    const deUrl = new URLSearchParams(window.location.search).get("i");
    try {
      if (deUrl) {
        sessionStorage.setItem("codigo", deUrl);
        return deUrl;
      }
      return sessionStorage.getItem("codigo");
    } catch {
      return deUrl;
    }
  });

  useEffect(() => {
    if (!codigo) {
      setEstado("invalido");
      return;
    }
    fetch(`${SCRIPT_URL}?i=${encodeURIComponent(codigo)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          const respuestas = {};
          data.personas.forEach((p) => {
            respuestas[p] = aInterno((data.respuestas || {})[p]);
          });
          setInvitado({ nombres: data.nombres, personas: data.personas, respuestas });
          setEstado("ok");
        } else {
          setEstado("invalido");
        }
      })
      .catch(() => setEstado("invalido"));
  }, [codigo]);

  async function enviar(respuestas) {
    const url =
      `${SCRIPT_URL}?i=${encodeURIComponent(codigo)}` +
      `&r=${encodeURIComponent(JSON.stringify(respuestas))}`;
    const r = await fetch(url);
    const data = await r.json();
    if (!data.ok) throw new Error(data.error || "error");
    setInvitado((prev) => ({ ...prev, respuestas }));
  }

  
  return (
    <InvitadoContext.Provider value={{ estado, invitado, codigo, enviar }}>
      {children}
    </InvitadoContext.Provider>
  );
}

export function useInvitado() {
  return useContext(InvitadoContext);
}