import styled from "styled-components";

export const StyledSearchContainer = styled.label`
  max-width: 48rem;
  width: 100%;
  height: 5.6rem;
  display: flex;
  padding-left: 3.2rem;
  gap: 2.4rem;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor.light};
  @media (max-width: 640px) {
    max-width: 100%;
    height: 4.8rem;
    gap: 2.6rem;
  }
`;

export const StyledSearchIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  @media (max-width: 640px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const StyledSearchInput = styled.input`
  flex-grow: 1;
  font-family: "Manrope Bold Regular";
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.textInput};
  background: inherit;
  appearance: none;
  outline: none;
  border: none;
`;
