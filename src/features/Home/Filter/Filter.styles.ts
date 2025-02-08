import styled from "styled-components";

export const StyledFilterMainContainer = styled.section`
  margin: 0 auto;
  margin-top: 4.8rem;
  max-width: 128rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    margin: 2.4rem 1.6rem 0 1.6rem;
    margin-top: 2.4rem;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4rem;
    max-width: 100%;
  }
`;
