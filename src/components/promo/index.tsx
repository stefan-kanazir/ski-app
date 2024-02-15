import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <section class="bg-blue-200 py-40">
    <div class="flex container flex-col md:flex-row justify-center items-center gap-20">
      <div class="md:w-1/2 flex flex-col gap-3">
        <h3 class="font-bold text-3xl">
          <span class="text-gradient">Save up to 30%</span> on ski equipment.
        </h3>
        <p class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dui
          ligula. Donec commodo arcu sed neque mattis luctus. Etiam scelerisque
          quis lorem sit amet porttitor.
        </p>
      </div>

      <div class="bg-blue-300 w-full md:w-1/2 h-96 rounded-xl"></div>
    </div>
  </section>
));
