import ChooseRegion from "./ChooseRegion/ChooseRegion";
import { StyledFilterMainContainer } from "./Filter.styles";
import Search from "./Search/Search";

type FilterProps = {
  isDark: boolean;
};

export type FormProps = {
  search: string;
  filter: { value: string; label: string }[];
};

export default function Filter({ isDark }: FilterProps) {
  return (
    <StyledFilterMainContainer>
      <Search isDark={isDark} />
      <ChooseRegion isDark={isDark} />
    </StyledFilterMainContainer>
  );
}
