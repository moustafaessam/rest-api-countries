import {
  StyledHeaderContainer,
  StyledHeaderInnerContainer,
  StyledHeaderText,
  StyledHeaderToggleImage,
  StyledHeaderToggleModeContainer,
  StyledHeaderToggleText,
} from "./Header.styles";

type HeaderProps = {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
};

export default function Header({ isDark, setIsDark }: HeaderProps) {
  function handleToggle() {
    setIsDark((pre) => !pre);
  }
  return (
    <StyledHeaderContainer>
      <StyledHeaderInnerContainer>
        <StyledHeaderText>Where in the world?</StyledHeaderText>
        <StyledHeaderToggleModeContainer onClick={handleToggle}>
          <StyledHeaderToggleImage
            src={isDark ? "/images/moon-filled.png" : "/images/moon-empty.png"}
            alt="moon"
          />
          <StyledHeaderToggleText>Dark mode</StyledHeaderToggleText>
        </StyledHeaderToggleModeContainer>
      </StyledHeaderInnerContainer>
    </StyledHeaderContainer>
  );
}
