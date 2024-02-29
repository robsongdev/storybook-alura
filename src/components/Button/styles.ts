import styled from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
    cursor: pointer;
    border: 0;
    padding: 8px 14px;
    transition: 0.3s;


    ${({ theme, variant }) => {
        return {
            background: theme.colors?.[variant].main,
            color: theme.colors?.[variant].text,

            '&:hover': {
                background: theme.colors?.[variant].light,
            },

            '&:focus' : {
                background: theme.colors?.[variant].dark,
            },
        }
    }}
`;
