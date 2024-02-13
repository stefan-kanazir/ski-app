import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import Instructor from "~/components/instructor";
import Promo from "~/components/promo";

const INSTRUCTORS = [
  {
    name: "John Doe",
    imageUrl: "https://images.unsplash.com/photo-1565992441121-4367c2967103",
  },
  {
    name: "John Doe",
    imageUrl: "https://images.unsplash.com/photo-1565992441121-4367c2967103",
  },
  {
    name: "John Doe",
    imageUrl: "https://images.unsplash.com/photo-1565992441121-4367c2967103",
  },
];

export default component$(() => {
  return (
    <>
      <Hero />
      <section class="max-w-[1200px] mx-auto grid grid-cols-3 gap-4 my-24">
        {INSTRUCTORS.map((instructor) => (
          <Instructor key={instructor.name} {...instructor} />
        ))}
      </section>
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
