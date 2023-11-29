export default function Input({
    name,
    placeholder,
    state,
    setState,
    email = false,
}: {
    name: string;
    placeholder?: string;
    state: string;
    setState: (value: string) => void;
    email?: boolean;
}) {
    return (
        <input
            type={email ? "email" : "text"}
            name={name}
            placeholder={placeholder}
            value={state}
            onInput={(e) => setState(e.currentTarget.value)}
        />
    );
}
