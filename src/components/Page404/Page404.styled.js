import styled from "@emotion/styled";

export const Page = styled.div`
    font-family: 'Indie Flower', cursive;
    padding: 0 20px 30px 420px;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    font-size: 22px;
    line-height: 1.4;

    img {
        margin: -46px auto 30px;
        transition: filter 250ms linear, transform 300ms ease-in;
        &:hover {
            filter: saturate(1.3);
            transform: scale(1.1);
        }
    }

    a {
        font-weight: 700;

        &:hover {
            text-decoration: underline;
        }
    }
`