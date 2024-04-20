import { codeToHtml } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";
import CopyToClipboard from "./CopyToClipboard";
import { cx } from "@/lib/utils";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
  copy?: boolean;
  className?: string;
};

export default async function Code({
  code,
  lang = "typescript",
  copy = false,
  // catppuccin-macchiato
  // dark-plus
  // min-dark
  // monokai
  // poimandres
  // rose-pine
  // synthwave-84
  // tokyo-night
  theme = "poimandres",
  className,
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  });

  return (
    <div
      className={cx(
        "relative w-full shadow-xl shadow-black/40 rounded-xl overflow-auto bg-gray-900",
        className
      )}
    >
      {copy && (
        <div className="absolute right-0 h-full w-24 bg-gradient-to-r from-gray-900/0 via-gray-900/70 to-gray-900">
          <div className="absolute right-3 top-3">
            <CopyToClipboard code={code} />
          </div>
        </div>
      )}

      <div
        className="text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-gray-900 [&>pre]:py-6 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
