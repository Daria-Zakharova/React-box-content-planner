import styled from "@emotion/styled";

export const UserMenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const UserInfo = styled.div`
    display: flex;
    gap: 10px;
    --color-bg: ${({color}) => color};
    padding: 20px;
    padding-left: 50px;       
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
    background-color: white;
    background-image: linear-gradient(to right, transparent 0, transparent 30px, var(--color-bg) 30px);
    
    button& {
        width: 150px;
        border-radius: 0 10px 10px 0;
        border: none; 
    
        &:hover, &:focus {
            filter: saturate(1.2);
            text-decoration: underline;
            text-decoration-skip-ink: none;
        }
    }

    &:not(button)::after {
        content: "";
        position: absolute;
        left: 100%;
        top: 0;
        height: 1px;
        border-top: solid var(--color-bg) 31px;
        border-bottom: solid var(--color-bg) 31px;
        border-right: solid transparent 41px;;
    }
    `;
