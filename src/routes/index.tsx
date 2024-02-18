import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import Instructor from "~/components/instructor";
import Mountain from "~/components/mountain";
import Promo from "~/components/promo";
import { INSTRUCTORS, MOUNTAINS } from "~/data";

export default component$(() => {
  return (
    <>
      <Hero />
      <section class="container mx-auto grid grid-cols-3 gap-4 my-24">
        {INSTRUCTORS.map((instructor) => (
          <Instructor key={instructor.name} {...instructor} />
        ))}
      </section>
      <Promo />
      <section class="container mx-auto grid grid-cols-3 gap-4 my-24">
        {MOUNTAINS.map((mountain) => (
          <Mountain key={mountain.name} {...mountain} />
        ))}
      </section>
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
