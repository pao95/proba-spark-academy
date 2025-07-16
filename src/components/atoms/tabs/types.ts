import React from "react";

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

export interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}
