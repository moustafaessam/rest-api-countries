import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  .react-select__control {
    background: ${(props) => props.theme.backgroundColor.light};
    border: none;
    border-radius: 0.5rem;
    min-width: 20rem;
    min-height: 5.6rem;
    cursor: pointer;
    font-family: "Nunito Sans Regular";
    font-size: 1.4rem;
    line-height: 2rem;
    @media (max-width: 640px) {
      max-width: 20rem;
    }
  }

  .react-select__control--is-focused {
    box-shadow: none;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu {
    background: ${(props) => props.theme.backgroundColor.light};
    color: ${(props) => props.theme.text};
  }

  .react-select__option {
    background: ${(props) => props.theme.backgroundColor.light};
    color: ${(props) => props.theme.text};
    cursor: pointer;
    font-family: "Nunito Sans Regular";
    font-size: 1.4rem;
    line-height: 2rem;
    &:hover {
      background: ${(props) => props.theme.backgroundColor.light};
      color: ${(props) => props.theme.text};
    }
  }
  .react-select__option--is-selected {
    background: ${(props) => props.theme.backgroundColor.light};
    color: ${(props) => props.theme.text};
  }
  .react-select__placeholder {
    color: ${(props) => props.theme.text};
    font-family: "Nunito Sans Regular";
    font-size: 1.4rem;
    line-height: 2rem;
  }
  .react-select__multi-value__label {
    color: ${(props) => props.theme.text};
    font-family: "Nunito Sans Regular";
    font-size: 1.4rem;
    line-height: 2rem;
    background: ${(props) => props.theme.backgroundColor.light};
  }
  .react-select__multi-value__remove {
    background: ${(props) => props.theme.backgroundColor.light};
    color: ${(props) => props.theme.text};
    border: none;
    &:hover {
      background: ${(props) => props.theme.backgroundColor.light};
      color: ${(props) => props.theme.text};
    }
  }
`;
