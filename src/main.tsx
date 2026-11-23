import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const app = <App />;

// Prerendered routes arrive with markup already in the container: hydrate it so
// the static HTML is reused instead of thrown away. `vite dev` has no markup.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
