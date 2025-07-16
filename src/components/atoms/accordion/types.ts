import React from "react";

export interface AccordionProps {
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
}

export interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

export interface AccordionTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface AccordionContentProps {
  children: React.ReactNode;
  isOpen?: boolean;
}
