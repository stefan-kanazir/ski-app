import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Menu from "./menu";

export default component$(() => (
  <header class="flex justify-between items-center py-6 backdrop-blur-lg sticky top-0">
    <Link href="/" class="font-bold text-2xl pl-6">
      Ski App
    </Link>

    <Menu />

    {/* TODO: Create reusable Button component */}
    <button class="bg-blue-500 px-4 py-2 rounded-md font-bold text-white mr-6">
      Get Started
    </button>
  </header>
));
