import { component$ } from "@builder.io/qwik";
import type { Instructor } from "~/types";

type InstructorProps = Pick<Instructor, "name" | "image_url">;

export default component$((props: InstructorProps) => (
  <article class="flex flex-col gap-2">
    <img
      class="aspect-video object-cover rounded-xl"
      height={900}
      width={1600}
      alt={props.name}
      src={props.image_url}
    />
    <span class="text-lg">{props.name}</span>
  </article>
));
