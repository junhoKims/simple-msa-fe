import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { federation } from "@module-federation/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        aProject: "https://msa-fe-projecta-vite.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
