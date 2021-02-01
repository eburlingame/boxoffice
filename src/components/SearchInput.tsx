import React from "react";

type SearchInputProps = {
  onChange?: (arg0: string) => void;
  value: string;
  placeholder?: string;
};

const classes = `
dark:text-white
dark:bg-gray-400
text-xl
rounded
p-2
flex-1
border
border-solid
`

const SearchInput = ({ onChange, value, placeholder }: SearchInputProps) => {
  return (
    <input
      className={classes}
      value={value}
      onChange={(e) => (onChange ? onChange(e.target.value) : null)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
