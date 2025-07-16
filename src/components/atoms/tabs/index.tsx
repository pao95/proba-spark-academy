import React, { createContext, useContext, useState } from "react";
import {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from "./types";
import { tabsStyles } from "./styles";

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs");
  }
  return context;
};

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value: controlledValue,
  onValueChange,
  className = "",
  children,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue: TabsContextType = {
    value,
    onValueChange: handleValueChange,
  };

  const classes = [tabsStyles.base, className].filter(Boolean).join(" ");

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={classes}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({
  className = "",
  children,
}) => {
  const classes = [tabsStyles.list, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  className = "",
  children,
  onClick,
}) => {
  const { value: currentValue, onValueChange } = useTabs();
  const isActive = currentValue === value;

  const handleClick = () => {
    onValueChange(value);
    onClick?.();
  };

  const classes = [tabsStyles.trigger, className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      onClick={handleClick}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  className = "",
  children,
  isActive,
}) => {
  const { value: currentValue } = useTabs();
  const active = isActive ?? currentValue === value;

  const classes = [tabsStyles.content, className].filter(Boolean).join(" ");

  if (!active) return null;

  return <div className={classes}>{children}</div>;
};
