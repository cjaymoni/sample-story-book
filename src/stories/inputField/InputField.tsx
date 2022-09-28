import "./inputfield.css";

interface InputFieldProps {
  label: string;
  size: "small" | "medium" | "large";
  backgroundColor?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

export const InputField = ({
  label,
  size = "medium",
  backgroundColor,
  onChange,
  value,
  placeholder,
}: InputFieldProps) => {
  return (
    <div
      className={["input-field", `input-field--${size}`].join(" ")}
      style={{ backgroundColor }}
    >
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
