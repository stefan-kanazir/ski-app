import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Menu from "./menu";

export default component$(() => (
  <header class="max-md:bg-blue-50 md:backdrop-blur-lg sticky top-0 w-full">
    <div class="flex container justify-between items-center py-6">
      <Link href="/" class="font-bold text-2xl">
        Ski App
      </Link>

      <Menu />

      <button class="hidden md:block btn-primary">Get Started</button>
    </div>
  </header>
));
