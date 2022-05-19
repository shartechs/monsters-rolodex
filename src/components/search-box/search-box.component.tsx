import "./search-box.styles.css";
import React, { ChangeEvent } from "react";

type SearchBoxProps = {
  readonly className: string;
  readonly placeholder: string;
  readonly onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
