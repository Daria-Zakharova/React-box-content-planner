import styled from "@emotion/styled";

const Heading = styled.h1`
    width: 50%;
    margin: 30px 20px 70px auto;
    font-family: 'Indie Flower', cursive;
    font-size: 30px;
    text-align: center;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-transform: capitalize;
    color: #54aac4;
`;

export const PageHeading = ({text}) => {
    return <Heading>{text}</Heading>
}