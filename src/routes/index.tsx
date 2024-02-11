import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";

export default component$(() => {
  return (
    <>
      <Hero />
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
