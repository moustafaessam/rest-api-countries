import { useFormContext } from "react-hook-form";
import {
  StyledSearchContainer,
  StyledSearchIcon,
  StyledSearchInput,
} from "./Search.styles";
import { FormProps } from "../Filter";

type SearchProps = {
  isDark: boolean;
};

export default function Search({ isDark }: SearchProps) {
  const { register } = useFormContext<FormProps>();
  return (
    <StyledSearchContainer>
      <StyledSearchIcon
        src={isDark ? "/images/search-dark.png" : "/images/search-light.svg"}
        alt="search"
      />
      <StyledSearchInput
        type="text"
        placeholder="Search for a country..."
        {...register("search")}
      />
    </StyledSearchContainer>
  );
}
