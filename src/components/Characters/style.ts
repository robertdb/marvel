import styled from "styled-components";
import { device } from "../../settings/device";

export const ContainerCharacters = styled.div`
    display: flex;
    flex-flow: column;
    max-width: 60rem;
    margin: 0 auto;
    @media ${device.laptop} {
        justify-content: space-around;
    }
`;
export const ContainerCharacter = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    max-width: 30rem;
    margin: 3rem auto;
    @media ${device.laptop} {
        margin: 6rem auto;
    }
`;
export const TitleCharacter = styled.h2`
    text-align: center;
`;
export const DescriptionCharacter = styled.p`
    text-align: left;
    padding: 0 1rem;
    @media ${device.laptop} {
        text-align: center;
    }
`;

export const ImageCharacter = styled.img`
    width: 90%;
    border: 1rem black solid;
    margin: 0 auto;
    @media ${device.laptop} {
        width: 100%;
        border: 1rem black solid;
    }
`;

