type MountainName =
  | "Kopaonik"
  | "Stara Planina"
  | "Zlatar"
  | "Jahorina"
  | "Zlatibor";

export type Mountain = {
  name: MountainName;
  image_url: string;
  description: string;
  slug: string;
};

export type Instructor = {
  name: string;
  image_url: string;
  slug: string;
  mountain: MountainName;
};
