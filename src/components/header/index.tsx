import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Menu from "./menu";
import MenuIcon from "./menu-icon";

export default component$(() => (
  <header class="flex justify-between items-center py-6 backdrop-blur-lg sticky top-0">
    <Link href="/" class="font-bold text-2xl pl-6">
      Ski App
    </Link>

    <Menu />
    <MenuIcon />

    <button class="hidden md:block btn-primary mr-6">Get Started</button>
  </header>
));
