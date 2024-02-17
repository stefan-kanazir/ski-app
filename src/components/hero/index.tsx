import { component$ } from "@builder.io/qwik";

import Image from "~/assets/images/ski-group.jpg?jsx";

export default component$(() => (
  <section class="container flex flex-col items-center mt-16 md:mt-24">
    <h1 class="text-4xl md:text-6xl font-bold text-center">
      Find the best <span class="text-gradient"> ski instructors</span>
    </h1>
    <p class="text-xl my-4 text-center">
      Easily plan your ideal ski trip from home with the help of professionals.
    </p>
    <button class="btn-primary mb-10">Book here</button>
    <span class="rounded-3xl overflow-hidden w-full">
      <Image class="w-full" />
    </span>
  </section>
));
