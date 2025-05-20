import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        remotes: {
          mfe1: env.VITE_MFE1_URL,
          mfe2: env.VITE_MFE2_URL,
        },
        shared: ["react", "react-dom"],
      }),
    ],
    server: {
      port: 3000,
    },
    build: {
      target: "esnext",
      minify: false,
    },
  };
});
