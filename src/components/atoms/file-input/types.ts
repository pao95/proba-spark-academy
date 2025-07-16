export interface FileInputProps {
  accept?: string;
  multiple?: boolean;
  onChange?: (files: FileList | null) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}
