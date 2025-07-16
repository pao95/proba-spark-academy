export interface TextareaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  rows?: number;
  name?: string;
  required?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
