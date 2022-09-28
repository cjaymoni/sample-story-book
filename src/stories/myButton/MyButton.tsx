import "./mybutton.css";
import Button from "@mui/material/Button";

interface ButtonProps {
  label: string;
  btnsize: "small" | "medium" | "large";
  backgroundColor?: string;
  btnvariant: "contained" | "outlined" | "text";
  btncolor?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  onClick?: () => void;
}

export const MyButton = ({
  label,
  btnsize = "medium",
  backgroundColor,
  btnvariant = "contained",
  btncolor = "primary",
  ...props
}: ButtonProps) => {
  return (
    // <button
    //   type="button"
    //   className={[
    //     "my-button",
    //     `my-button--${size}`,
    //     `my-button--${btnvariant}`,
    //   ].join(" ")}
    //   style={{ backgroundColor }}
    //   {...props}
    // >
    //   {label}
    // </button>

    <Button variant={btnvariant} size={btnsize} color={btncolor} {...props}>
      {label}
    </Button>
  );
};
