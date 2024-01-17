import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover:enabled {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }
`;
