import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

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

export default component$(() => (
  <nav class="bg-blue-300/50 px-20 py-4 rounded-full hidden md:flex gap-10">
    {NAV_ITEMS.map((navItem) => (
      <Link key={navItem.label} href={navItem.href}>
        {navItem.label}
      </Link>
    ))}
  </nav>
));