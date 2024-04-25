import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export default function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function CustomHeading(props: any) {
  let slug = slugify(props.children);
  return React.createElement(
    `h${props.level}`,
    {
      id: slug,
      className: clsx("scroll-mt-20 md:scroll-mt-24", props.className),
    },
    [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor-link",
      }),
    ],
    props.children
  );
}

export const H1 = ({ children }: { children: React.ReactNode }) => (
  <CustomHeading
    className={clsx(
      // base
      "text-3xl font-bold normal-case tracking-tight sm:text-4xl",
      // light mode
      "text-gray-900",
      // dark mode
      "dark:text-gray-50"
    )}
    level={1}
  >
    {children}
  </CustomHeading>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <CustomHeading
    className={clsx(
      // base
      "mb-6 text-lg font-semibold normal-case tracking-tight sm:text-2xl",
      // light mode
      "text-gray-900",
      // dark mode
      "dark:text-gray-50"
    )}
    level={2}
  >
    {children}
  </CustomHeading>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <CustomHeading
    className={clsx(
      // base
      "mb-2 text-lg font-semibold normal-case tracking-tight",
      // light mode
      "text-gray-900",
      // dark mode
      "dark:text-gray-50"
    )}
    level={3}
  >
    {children}
  </CustomHeading>
);

export const P = (props: any) => (
  <p
    {...props}
    className={clsx(
      // base
      "mb-4 text-base/7",
      // light mode
      "text-gray-700",
      // dark mode
      "dark:text-gray-300"
    )}
  />
);

export const Ul = (props: any) => (
  <ul
    className={clsx(
      // base
      "list mb-8 ml-8 list-outside list-disc space-y-1 text-base/8",
      // light mode
      "text-gray-700",
      // light mode
      "dark:text-gray-300"
    )}
    {...props}
  />
);

// export function Code(props: any) {
//   return <Codeblock variant="clipboard" source={props.children} {...props} />
// }

export function CustomLink(props: any) {
  let href = props.href;
  // same dark mode
  const style =
    "text-blue-600 dark:text-blue-500 font-medium hover:text-blue-500";
  if (href.startsWith("/")) {
    return (
      <Link className={style} href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} className={style} />;
  }

  return (
    <a className={style} target="_blank" rel="noopener noreferrer" {...props} />
  );
}

export const ChangelogEntry = ({
  date,
  children,
}: {
  date: string;
  children: any;
}) => (
  <div
    className={clsx(
      // base
      "relative flex justify-center my-20 border-b"
    )}
  >
    <div className="w-1/3 mb-10">
      <span className="sticky top-24 ring-1 ring-indigo-400/20 bg-indigo-50 px-1.5 py-1 text-indigo-600 font-medium rounded-lg text-sm shadow-sm tabular-nums">
        {date}
      </span>
    </div>
    <div className="max-w-prose mb-12">{children}</div>
  </div>
);

export const ChangelogImage = ({
  alt,
  width = 1200,
  height = 675,
  src,
  ...props
}: ImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="overflow-hidden rounded-xl mb-12 shadow-xl shadow-black/15 ring-1 ring-gray-200/50"
    {...props}
  />
);
