import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import Instructor from "~/components/instructor";
import Mountain from "~/components/mountain";
import Promo from "~/components/promo";

const INSTRUCTORS = [
  {
    name: "John Doe",
    image_url: "https://images.unsplash.com/photo-1565992441121-4367c2967103",
  },
  {
    name: "John Doe",
    image_url: "https://images.unsplash.com/photo-1565992441121-4367c2967103",
  },
  {
    name: "John Doe",
    image_url: "https://images.unsplash.com/photo-1565992441121-4367c2967103",
  },
];

const MOUNTAINS = [
  {
    name: "Lorem Ipsum",
    slug: "lorem-ipsum",
    image_url: "https://images.unsplash.com/25/peak.jpg",
  },
  {
    name: "Lorem Ipsum",
    slug: "lorem-ipsum",
    image_url: "https://images.unsplash.com/25/peak.jpg",
  },
  {
    name: "Lorem Ipsum",
    slug: "lorem-ipsum",
    image_url: "https://images.unsplash.com/25/peak.jpg",
  },
];

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
