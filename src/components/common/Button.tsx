import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface BaseButtonProps {
  text: string;
  category: "primary" | "secondary" | "success";
  width?: "100%" | "auto";
  className?: string;
}

interface LinkButton extends BaseButtonProps {
  type: "link";
  href: string;
}

interface FunctionButton extends BaseButtonProps {
  type: "function";
  onClick: () => void;
}

type ButtonProps = LinkButton | FunctionButton;

export default function Button(props: ButtonProps) {
  const { className, text, type, category, width } = props;
  const onClick = type === "function" ? props.onClick : undefined;

  const baseStyles = clsx(
    "block rounded-lg px-2 md:px-4 py-2 capitalize border text-sm md:text-base transition-all duration-150 ease-linear",
    {
      "bg-primary text-white border-primary hover:bg-white hover:text-primary ":
        category === "primary",
      "bg-white text-primary border-primary hover:bg-primary hover:text-white hover:border-white":
        category === "secondary",
      "bg-secondary text-white border-secondary hover:bg-white hover:text-secondary":
        category === "success",
    },
  );

  const mergedStyles = twMerge(clsx(baseStyles, className));

  if (type === "link") {
    return (
      <a href={props.href} className={mergedStyles} style={{ width }}>
        {text}
      </a>
    );
  } else {
    return (
      <button className={mergedStyles} style={{ width }} onClick={onClick}>
        {text}
      </button>
    );
  }
}
