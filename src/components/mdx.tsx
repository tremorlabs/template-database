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
      "mb-4 font-semibold normal-case tracking-tight text-lg",
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
      "mb-2 font-semibold normal-case tracking-tight",
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
      "mb-8 leading-7",
      // light mode
      "text-gray-600",
      // dark mode
      "dark:text-gray-400"
    )}
  />
);

export const Ul = (props: any) => (
  <ul
    className={clsx(
      // base
      "list mb-10 ml-8 list-outside list-disc space-y-1 leading-8",
      // light mode
      "text-gray-600",
      // light mode
      "dark:text-gray-40"
    )}
    {...props}
  />
);

// @SEV: make <strong/> less bold

export const Strong = (props: any) => (
  <strong
    className={clsx(
      // base
      "font-medium",
      // light mode
      "text-gray-900",
      // light mode
      "dark:text-gray-50"
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
    "text-indigo-600 font-medium hover:text-indigo-500";
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
  version,
  date,
  children,
}: {
  version: string;
  date: string,
  children: any;
}) => (
  <div
    className={clsx(
      // base
      "relative flex flex-col md:flex-row justify-center gap-x-10 my-20 border-b"
    )}
  >
    <div className="md:w-1/3 md:mb-10 mb-4">
      <div className="sticky top-24 flex items-center space-x-2 md:block md:space-x-0 md:space-y-1.5">
        <span className="inline-flex items-center ring-1 ring-inset ring-indigo-700/10 bg-indigo-50 px-2.5 py-1 text-indigo-700 font-medium rounded-lg text-xs">
          {version}
        </span>
        <span className="whitespace-nowrap block text-xs text-gray-600">
          {date}
        </span>
      </div>
    </div>
    <div className="mb-12">{children}</div>
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
    className="overflow-hidden rounded-xl mb-10 shadow-md shadow-black/15 ring-1 ring-gray-200/50"
    {...props}
  />
);
