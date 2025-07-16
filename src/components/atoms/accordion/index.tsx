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
const AccordionItemContext = createContext<string>("");

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

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={accordionStyles.base}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
}) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={accordionStyles.item}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  onClick,
}) => {
  const { type, value, onValueChange } = useAccordion();
  const itemValue = React.useContext(AccordionItemContext);

  const isOpen =
    type === "single"
      ? value === itemValue
      : Array.isArray(value) && value.includes(itemValue);

  const handleClick = () => {
    if (type === "single") {
      onValueChange(isOpen ? "" : itemValue);
    } else {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = isOpen
        ? currentValue.filter((v) => v !== itemValue)
        : [...currentValue, itemValue];
      onValueChange(newValue);
    }
    onClick?.();
  };

  const classes = [
    accordionStyles.trigger,
    isOpen && accordionStyles.triggerOpen,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={handleClick}>
      {children}
      <ChevronDown
        className={`${accordionStyles.chevron} ${
          isOpen ? accordionStyles.chevronOpen : ""
        }`}
      />
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isOpen,
}) => {
  const { type, value } = useAccordion();
  const itemValue = React.useContext(AccordionItemContext);

  const open =
    isOpen ??
    (type === "single"
      ? value === itemValue
      : Array.isArray(value) && value.includes(itemValue));

  if (!open) return null;

  return <div className={accordionStyles.content}>{children}</div>;
};
