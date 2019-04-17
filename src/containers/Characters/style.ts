import styled from "styled-components";
import backgroundImage from "../../assets/images/bg.jpg";
import { device } from "../../settings/device";

export const Container = styled.div`
  @media ${device.laptop} {
    background-image: url('${backgroundImage}');
    background-attachment: fixed;
    background-size: cover;
  }
  margin-top: -10px;
  min-height: 100vh;
`;

export const LoadingMessage = styled.h1`
  text-align: center;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem auto;
  align-items: center;
`;

export const ImageLoading = styled.img`
  width: 78%;
  @media ${device.laptop} {
    width: 26%;
  }
`;
