import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const NAV_ITEMS = [
  {
    label: "Mountains",
    href: "mountains ",
  },
  {
    label: "About",
    href: "about ",
  },
  {
    label: "Blog",
    href: "blog",
  },
];

export default component$(() => (
  <nav class="bg-slate-200/50 px-20 py-4 rounded-full">
    <ul class="flex gap-10 ">
      {NAV_ITEMS.map((navItem) => (
        <li key={navItem.label}>
          <Link href={navItem.href}>{navItem.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
));
