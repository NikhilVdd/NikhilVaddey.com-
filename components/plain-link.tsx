import type { AnchorHTMLAttributes } from "react";

type PlainLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function PlainLink({ href, ...props }: PlainLinkProps) {
  return <a href={href} {...props} />;
}
