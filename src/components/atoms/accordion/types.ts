import React from "react";

export interface AccordionProps {
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  className?: string;
  children: React.ReactNode;
}

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}
