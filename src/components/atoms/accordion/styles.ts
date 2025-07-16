export const accordionStyles = {
  base: "w-full space-y-4",
  item: "rounded-lg bg-white border border-gray-200",
  trigger:
    "flex w-full items-center justify-between py-4 px-6 text-left font-medium transition-all hover:bg-gray-50 [&[data-state=open]>svg]:rotate-180",
  triggerOpen: "text-blue-600 bg-blue-50",
  content:
    "overflow-hidden text-sm transition-all px-6 pb-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  chevron: "h-4 w-4 shrink-0 transition-transform duration-200",
  chevronOpen: "rotate-180",
};
