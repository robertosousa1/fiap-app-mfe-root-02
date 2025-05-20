import React, { useEffect, useRef, useState } from "react";

const VueMFERenderer = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    import("mfe2/mount")
      .then((mod) => {
        const mount = mod.mount || mod.default;
        if (active && ref.current && typeof mount === "function") {
          mount(ref.current);
          setLoading(false);
        }
      })
      .catch((err) => console.error("Erro ao carregar MFE2:", err));

    return () => { active = false };
  }, []);

  return (
    <>
      {loading && <div>Carregando MFE2...</div>}
      <div ref={ref} />
    </>
  );
};

export default VueMFERenderer;