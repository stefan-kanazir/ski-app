import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import Promo from "~/components/promo";

export default component$(() => {
  return (
    <>
      <Hero />
      <Promo />
    </>
  );
});

export const head: DocumentHead = {
  title: "Ski App",
  meta: [
    {
      name: "description",
      content:
        "Easily plan your ideal ski trip from home with the help of professionals.",
    },
  ],
};
