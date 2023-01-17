import styled from "@emotion/styled";

export const FilterEl = styled.div`
    position: absolute;
    top: 100px;
    left: 400px;
    width: 42%;

    label {
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        color: #000000aa;

        svg {
            position: absolute;
            top: 28px;
            left: 8px;
        }
    }

    input {
        display: block;
        width: 90%;
        min-width: 70%;
        margin-top: 6px;
        padding-left: 34px;
        line-height: 26px;
        border: none;
        border-bottom: 2px solid #11111177;
        background-color: transparent;
        font-family: 'Indie Flower', cursive;
        font-size: 22px;
        font-weight: 700;

        &:focus, &:hover {
            background-color: #f5df6f33;
        }
    }
`;