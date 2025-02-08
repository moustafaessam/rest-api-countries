import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  background-color: ${(props) => props.theme.backgroundColor.light};
  color: ${(props) => props.theme.text};
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    justify-content: flex-start;
    padding: 0 1.6rem;
  }
`;

export const StyledHeaderInnerContainer = styled.div`
  max-width: 128rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeaderText = styled.h1`
  font-family: "Nunito Sans Extra Bold";
  font-size: 2.4rem;
  @media (max-width: 640px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const StyledHeaderToggleModeContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  cursor: pointer;
`;

export const StyledHeaderToggleImage = styled.img`
  width: 2rem;
  height: 2rem;
  @media (max-width: 640px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const StyledHeaderToggleText = styled.p`
  font-family: "Nunito Sans Semi Bold";
  font-size: 1.6rem;
  text-transform: capitalize;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
