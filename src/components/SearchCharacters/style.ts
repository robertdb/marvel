import styled from "styled-components";
import { device } from "../../settings/device";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    padding-top: 55px;
    flex-flow: column;
    align-items: center;
`;
export const InputSearch = styled.input`
    height: 30px;
    width: 70%;
    font-size: 1rem;
    padding-left: 1rem;
    border: 0.2rem #000 solid;
    outline: none;
    @media ${device.laptop} {
        height: 40px;
        width: 35%;
        font-size: 1.5rem;
    }
   
`;
export const Title = styled.h2`
    text-align: center;
`;
