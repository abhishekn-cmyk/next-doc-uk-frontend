import * as React from "react";
import { cn } from "@/lib/utils"; // optional helper
import { ChevronDown } from "lucide-react";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  children: React.ReactNode;
}


interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  parentValue?: string;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  parentValue?: string;
}

// Context
const AccordionContext = React.createContext<{
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
} | undefined>(undefined);

// Root
export const Accordion: React.FC<AccordionProps> = ({ 
  type = "single", 
  collapsible = false, 
  children, 
  className 
}) => {
    console.log(type);
    console.log(collapsible);
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

// Item
export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children }) => {
  return (
    <div data-value={value} className="border rounded-lg overflow-hidden">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        // Type-safe way to clone elements with parentValue
        return React.cloneElement(child as React.ReactElement<{ parentValue?: string }>, {
          parentValue: value
        });
      })}
    </div>
  );
};

// Trigger
export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  parentValue,
  className,
  ...props
}) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within an Accordion");

  const { openItem, setOpenItem } = context;
  const isOpen = openItem === parentValue;

  const handleClick = () => {
    if (parentValue) {
      setOpenItem(isOpen ? null : parentValue);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-full flex justify-between items-center bg-gray-100 p-4 font-medium text-left hover:bg-gray-200 transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
        isOpen ? "bg-gray-200" : "",
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <ChevronDown
        className={cn(
          "w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0",
          isOpen ? "rotate-180" : ""
        )}
      />
    </button>
  );
};

// Content
export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  parentValue,
  className,
}) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within an Accordion");

  const { openItem } = context;
  const isOpen = openItem === parentValue;

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 bg-white",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
    >
      <div className="p-4">{children}</div>
    </div>
  );
};