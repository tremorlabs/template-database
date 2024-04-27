import type { MDXComponents } from "mdx/types";

import {
  ChangelogEntry,
  CustomLink,
  H1,
  H2,
  H3,
  P,
  Ul,
  Strong
} from "@/components/mdx";

import { ChangelogImage } from "@/components/mdx";

let customComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  strong: Strong,
  ul: Ul,
  a: CustomLink,
  ChangelogEntry: ChangelogEntry,
  ChangelogImage: ChangelogImage,
};

export function useMDXComponents(components: MDXComponents) {
  return {
    ...customComponents,
    ...components,
  };
}
