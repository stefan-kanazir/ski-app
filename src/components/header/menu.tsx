import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import MenuIcon from "./menu-icon";
import CloseIcon from "./close-icon";

const NAV_ITEMS = [
  {
    label: "Mountains",
    href: "mountains",
  },
  {
    label: "Ski Instructors",
    href: "instructors",
  },
  {
    label: "Blog",
    href: "blog",
  },
];

export default component$(() => {
  const isMenuOpened = useSignal(false);

  return (
    <>
      <nav
        class={`bg-blue-200 flex gap-10 md:py-4 md:bg-blue-300/60 md:px-20 md:rounded-full ${isMenuOpened.value ? "max-md:absolute max-md:inset-0 max-md:top-20 max-md:flex-col py-20 px-6 max-md:h-screen" : "max-md:hidden"}`}
      >
        {NAV_ITEMS.map((navItem) => (
          <Link key={navItem.label} href={navItem.href}>
            {navItem.label}
          </Link>
        ))}
      </nav>
      <button
        onClick$={() => {
          isMenuOpened.value = !isMenuOpened.value;
        }}
        class="w-6 mr-6 md:hidden"
      >
        {isMenuOpened.value ? <CloseIcon /> : <MenuIcon />}
      </button>
    </>
  );
});
