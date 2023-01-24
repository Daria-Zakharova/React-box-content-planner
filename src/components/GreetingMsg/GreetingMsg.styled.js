import styled from "@emotion/styled";

export const Greeting = styled.div`
    margin-top: -76px;
    padding: 20px 40px 30px 420px;
    font-family: 'Indie Flower', cursive;
    font-size: 22px;
    line-height: 31px;

    img {
        transition: transform 300ms ease-in-out, filter 300ms ease-in-out;
        &:hover {
            transform: translateY(-10px) scaleY(1.1);
            filter: saturate(1.2);
        }
    }

    a {
        font-weight: 700;

        &:hover {
            text-decoration: underline;
        }
    }
`;