import styled from "styled-components";

export const CountryLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 26.4rem;
  cursor: pointer;
`;

export const CountryLabelImage = styled.img`
  width: 100%;
  height: 16rem;
`;

export const CountryLabelDetailsBox = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.light};
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const CountryName = styled.p`
  font-family: "Nunito Sans Extra Bold";
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: ${(props) => props.theme.text};
`;

export const CountryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-family: "Nunito Sans Semi Bold";
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

export const CountryDetailSpanLabel = styled.span`
  font-family: "Nunito Sans Light";
  color: ${(props) => props.theme.text};
`;
