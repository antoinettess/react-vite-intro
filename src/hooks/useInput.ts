import { useState, ChangeEvent } from "react";

interface UseInputReturn {
  value: string;
  setValue: (value: string) => void;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function useInput(initialValue: string = ""): UseInputReturn {
  const [value, setValue] = useState<string>(initialValue);

  return {
    value,
    setValue,
    onChange: (event) => setValue(event.target.value),
  };
}
