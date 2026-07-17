import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import "./Layout.css";

import type { JSX } from "solid-js";

export default function Layout(props: { children?: JSX.Element }) {
  return (
    <div class="min-h-screen">
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
