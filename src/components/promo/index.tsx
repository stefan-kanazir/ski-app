import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <section class="flex justify-center items-center gap-20 bg-blue-200 py-40 mt-24">
    <div class="w-1/2 max-w-[560px] flex flex-col gap-3">
      <h3 class="font-bold text-3xl">
        <span class="text-gradient">Save up to 30%</span> on ski equipment.
      </h3>
      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dui
        ligula. Donec commodo arcu sed neque mattis luctus. Etiam scelerisque
        quis lorem sit amet porttitor.
      </p>
    </div>

    <div class="bg-blue-300 max-w-[560px] h-96 rounded-xl flex-1"></div>
  </section>
));
