interface InputProps {
    label: string;
    name: string;
    type?: string;
    dir?: string;
    labelClassname?: string;
    inputClassname?: string;
    errorClassname?: string;
}

export default function Input({
    label,
    name,
    type = "text",
    dir,
    labelClassname,
    inputClassname,
    errorClassname,
}: InputProps) {
    return (
        <>
            <label htmlFor={name} className={`mb-2 ${labelClassname ?? ""}`}>
                {label}
            </label>

            <input
                type={type}
                name={name}
                id={name}
                dir={dir}
                className={`outline outline-gray-300 focus:outline-indigo-600 focus:outline-2 rounded-md px-3 py-2 ${inputClassname ?? ""}`}
            />
        </>
    );
}
