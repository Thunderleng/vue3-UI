export type ButtonProps = {
  type: "primary" | "secondary";
  size: "small" | "medium" | "large";
  disabled: boolean;
};

export type ButtonEmits = {
  (e: "click"): void;
};
