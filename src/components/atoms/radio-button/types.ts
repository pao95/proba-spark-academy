export interface RadioButtonProps {
  name: string;
  value: string | number;
  checked: boolean;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
  label?: React.ReactNode;
}
