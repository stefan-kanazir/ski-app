import { component$ } from "@builder.io/qwik";

import Image from "~/assets/images/ski-group.jpg?jsx";

// TODO: Create reusable component
export default component$(() => (
  <section class="container flex flex-col items-center mt-24">
    <h1 class="text-6xl font-bold">
      Plan the perfect <span class="text-gradient"> winter trip</span>
    </h1>
    <p class="text-xl my-4">
      Easily plan your ideal ski trip from home with the help of professionals.
    </p>
    <button class="btn-primary mb-10">Book here</button>

    <span class="rounded-3xl overflow-hidden">
      <Image />
    </span>
  </section>
));
