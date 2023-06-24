export default function Button(props: ButtonProps) {
    return <button
        type={props.type}
        className={props.classnName}
        onClick={props.onClick}
        disabled={props.disabled}
    > {props.children} </button>
}
interface ButtonProps {
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled?: boolean,
    classnName: string
}

Button.defaultProps = {
    type: "button",
    disabled: false,
    classnName: 'btn btn-primary'
}