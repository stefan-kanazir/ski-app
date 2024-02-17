import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import MenuIcon from "./menu-icon";

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
      {isMenuOpened.value ? (
        <nav
          class="md:bg-blue-300/50 px-20 py-4 md:rounded-full flex gap-10
          absolute md:static flex-col md:flex-row w-full md:w-auto top-0 h-screen md:h-auto bg-blue-300
        "
        >
          {NAV_ITEMS.map((navItem) => (
            <Link key={navItem.label} href={navItem.href}>
              {navItem.label}
            </Link>
          ))}
        </nav>
      ) : (
        <button
          onClick$={() => {
            console.log("test Test");
            isMenuOpened.value = true;
          }}
          class="w-6 mr-6 md:hidden"
        >
          <MenuIcon />
        </button>
      )}
    </>
  );
});
