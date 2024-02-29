import React from "react";
import * as S from "./styles";

export interface ButtonProps {
    variant?: "primary" | "accent";
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    children,
    disabled = false,
    variant = "primary",
    ...props
}: ButtonProps) {
    return (
        <S.StyledButton disabled={disabled} variant={variant} {...props}>
            {children}
        </S.StyledButton>
    );
}