import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Mountain } from "~/types";

type MountainProps = Omit<Mountain, "description">;

export default component$((props: MountainProps) => (
  <Link href={props.slug}>
    <article class="flex flex-col gap-2">
      <img
        class="aspect-square object-cover rounded-xl"
        height={600}
        width={600}
        alt={props.name}
        src={props.image_url}
      />
      <span class="text-lg">{props.name}</span>
    </article>
  </Link>
));
