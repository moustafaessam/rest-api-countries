import styled from "styled-components";

export const CountryPageMainContainer = styled.section`
  max-width: 128rem;
  margin: 0 auto;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  @media (max-width: 1300px) {
    max-width: 32rem;
    margin-top: 4rem;
    gap: 6.4rem;
  }
`;

export const CountryPageBackButton = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.backgroundColor.light};
  width: 13.6rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.5rem;
  @media (max-width: 1300px) {
    width: 10.4rem;
    height: 3.2rem;
  }
`;

export const CountryPageButtonText = styled.p`
  font-family: "Nunito Sans Light";
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${(props) => props.theme.text};
  @media (max-width: 1300px) {
    font-size: 1.4rem;
  }
`;

export const CountryPageBackIcon = styled.img``;

export const CountryDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    gap: 4.4rem;
  }
`;

export const CountryDetailsImage = styled.img`
  max-width: 56rem;
  width: 100%;
  height: 40.1rem;
  border-radius: 0.5rem;
  @media (max-width: 1300px) {
    max-width: 32rem;
    height: 22.9rem;
  }
`;

export const CountryDetailsTextContainer = styled.div`
  max-width: 59.8rem;
  width: 100%;
  color: ${(props) => props.theme.text};
  @media (max-width: 1300px) {
    width: auto;
    max-width: 100%;
  }
`;

export const CountryPageName = styled.h1`
  font-family: "Nunito Sans Extra Bold";
  font-size: 3.2rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 2.3rem;
  text-transform: capitalize;
  @media (max-width: 1300px) {
    margin-bottom: 1.6rem;
    font-size: 2.2rem;
  }
`;

export const CountryInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid blue; */
  margin-bottom: 6.8rem;
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 3.4rem;
    gap: 3.2rem;
  }
`;

export const CountryInfoContainerFirstParagraph = styled.div`
  font-size: 1.6rem;
  font-family: "Nunito Sans Semi Bold";
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (max-width: 1300px) {
    font-size: 1.4rem;
  }
`;

export const CountryInfoContainerSecondParagraph = styled(
  CountryInfoContainerFirstParagraph
)``;

export const CountrySingleInfoLine = styled.p``;

export const CountryInfoValueSpan = styled.span`
  font-family: "Nunito Sans Light";
`;

export const BorderCountriesContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme.text};
  align-items: center;
  @media (max-width: 1300px) {
    align-items: flex-start;
    gap: 1.6rem;
    flex-direction: column;
  }
`;

export const BorderHeader = styled.h3`
  font-family: "Nunito Sans Semi Bold";
  font-size: 1.6rem;
  text-transform: capitalize;
  line-height: 2.4rem;
`;

export const BorderCountryButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const BorderCountryButton = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.light};
  width: 9.6rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nunito Sans Light";
  font-size: 1.4rem;
  text-transform: capitalize;
  @media (max-width: 1300px) {
    font-size: 1.2rem;
  }
`;
