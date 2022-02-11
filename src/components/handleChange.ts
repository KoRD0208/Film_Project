import React from "react";

export function handleChange(
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  hook: React.Dispatch<React.SetStateAction<string>>
) {
  hook(e.target.value);
}
