import styled from "styled-components";
import backgroundImage from "../../assets/images/bg.jpg";
import { device } from "../../settings/device";

export const Container = styled.div`
  @media ${device.laptop} {
    background-image: url('${backgroundImage}');
    background-attachment: fixed;
    background-size: cover;
    margin-top: -10px;
  }
`;
