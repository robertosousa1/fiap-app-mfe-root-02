import React, { Suspense, useEffect } from "react";
import VueMFERenderer from "./VueMFERenderer";

const MFE1 = React.lazy(() =>
  import("mfe1/App").catch((err) => {
    console.error("Erro ao carregar MFE1:", err);
    return {
      default: () => <div className="alert alert-danger">Erro ao carregar MFE1</div>,
    };
  })
);

function App() {
  useEffect(() => {
    window.addEventListener("addItem", (e) => {
      console.log("Evento 'addItem' recebido:", e.detail);
    });
  },[])
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Dashboard 20/05 20:30</span>
        </div>
      </nav>

      <div className="container text-center mt-5">
        <div className="row mt-4">
          <div className="col">
            <Suspense fallback={<div>Carregando MFE1...</div>}>
              <MFE1 />
            </Suspense>
          </div>

          <div className="col">
            <VueMFERenderer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;