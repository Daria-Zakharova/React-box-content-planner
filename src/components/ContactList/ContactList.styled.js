import styled from "@emotion/styled";

export const Contacts = styled.ul`
padding: 60px 10px 30px 400px;
font-family: 'Indie Flower', cursive;
font-size: 22px;
line-height: 31px;
`;

export const ContactItem = styled.li`
position: relative;
padding-right: 50px;
width: 100%;
display: flex;
justify-content: space-between;
opacity: ${({isDeleted}) => !isDeleted ? 1 : .5};

&:hover ul{
    display: block;
}

&.spinner {
    justify-content: center;
    color: transparent;
}

.name {
    font-weight: 700;
    margin-right: 30px;
    }

.number {
    padding-right: 30px;
}`;