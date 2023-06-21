import { ReactElement } from "react"

export default function Button(props: ButtonProps) {
    return <button
        type={props.type}
        className="btn btn-primary"
        onClick={props.onClick}
        disabled={props.disabled}
    > {props.children} </button>
}
interface ButtonProps {
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled?: boolean
}

Button.defaultProps = {
    type: "button",
    disabled: false
}