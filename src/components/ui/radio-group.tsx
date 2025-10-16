import React, { createContext, useContext } from "react";
import cn from "clsx";

interface RadioGroupContextType<T> {
  value: T;
  onChange: (value: T) => void;
}

const RadioGroupContext = createContext<RadioGroupContextType<any> | null>(null);

interface RadioGroupProps<T> {
  value: T;
  onChange: (value: T) => void;
  children: React.ReactNode;
  className?: string;
}

export const RadioGroup = <T,>({ value, onChange, children, className }: RadioGroupProps<T>) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange }}>
      <div role="radiogroup" className={cn("flex flex-col space-y-2", className)}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

interface RadioGroupItemProps<T> {
  value: T;
  className?: string;
  children?: React.ReactNode;
}

export const RadioGroupItem = <T,>({ value, className, children }: RadioGroupItemProps<T>) => {
  const context = useContext(RadioGroupContext) as RadioGroupContextType<T>;
  if (!context) {
    throw new Error("RadioGroupItem must be used within a RadioGroup");
  }

  const checked = context.value === value;

  return (
    <label className={cn("flex items-center space-x-2 cursor-pointer", className)}>
      <input
        type="radio"
        value={value as any}
        checked={checked}
        onChange={() => context.onChange(value)}
        className="w-4 h-4 border border-gray-300 rounded-full accent-blue-600"
      />
      {children && <span>{children}</span>}
    </label>
  );
};
