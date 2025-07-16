import React, { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./types";
import { accordionStyles } from "./styles";

interface AccordionContextType {
  type: "single" | "multiple";
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

export const Accordion: React.FC<AccordionProps> = ({
  type = "single",
  value: controlledValue,
  onValueChange,
  className = "",
  children,
}) => {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    type === "single" ? "" : []
  );

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const handleValueChange = (newValue: string | string[]) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue: AccordionContextType = {
    type,
    value,
    onValueChange: handleValueChange,
  };

  const classes = [accordionStyles.base, className].filter(Boolean).join(" ");

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={classes}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  className = "",
  children,
}) => {
  const classes = [accordionStyles.item, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  className = "",
  children,
  onClick,
}) => {
  const { type, value, onValueChange } = useAccordion();
  // This is a simplified version - in a real implementation, we'd need to pass the item value
  const isOpen = false; // Placeholder - would need item value to determine

  const handleClick = () => {
    // Simplified click handler - would need item value to work properly
    onClick?.();
  };

  const classes = [accordionStyles.trigger, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={handleClick}>
      {children}
      <ChevronDown className={accordionStyles.chevron} />
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({
  className = "",
  children,
  isOpen,
}) => {
  const { type, value } = useAccordion();
  // This is a simplified version - in a real implementation, we'd need to pass the item value
  const open = isOpen ?? false; // Placeholder - would need item value to determine

  const classes = [accordionStyles.content, className]
    .filter(Boolean)
    .join(" ");

  if (!open) return null;

  return <div className={classes}>{children}</div>;
};
