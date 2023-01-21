import styled from "@emotion/styled";

const Heading = styled.h1`
    text-align: right;
    margin: 30px 230px 70px auto;
    font-family: 'Indie Flower', cursive;
    font-size: 30px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-transform: capitalize;
    color: #54aac4;
`;

export const PageHeading = ({text}) => {
    return <Heading>{text}</Heading>
}