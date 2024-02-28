import React from "react";

interface ButtonProps {
    disabled?: boolean;
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, disabled=false,...props }: ButtonProps) {
    return <button disabled={disabled} {...props}>{children}</button>;
}

