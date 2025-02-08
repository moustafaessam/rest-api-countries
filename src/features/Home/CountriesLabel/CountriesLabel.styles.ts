import styled from "styled-components";

export const StyledCountriesContainer = styled.section`
  margin-top: 4.8rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 7.5rem;
  @media (max-width: 640px) {
    justify-content: flex-start;
    margin: 0 auto;
    margin-top: 4.8rem;
    gap: 4rem;
    flex-direction: column;
    max-width: 26.4rem;
  }
`;
