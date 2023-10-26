import { useState } from "react";

export type SetValueType<T> = {
  value: T;
  set: (value: T) => void;
};

export const useSetValue = <T,>(initialValue: T): SetValueType<T> => {
  const [value, set] = useState<T>(initialValue);

  return {
    value,
    set,
  };
};
