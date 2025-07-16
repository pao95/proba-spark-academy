export const accordionStyles = {
  base: "w-full",
  item: "border-b border-gray-200",
  trigger:
    "flex w-full items-center justify-between py-4 px-0 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
  content:
    "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  chevron: "h-4 w-4 shrink-0 transition-transform duration-200",
};
