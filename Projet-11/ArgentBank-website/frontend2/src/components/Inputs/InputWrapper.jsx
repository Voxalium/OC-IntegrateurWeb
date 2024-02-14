function InputWrapper({ title, type, id, value, set, readOnly }) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{title}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={set}
                readOnly={readOnly}
            />
        </div>
    );
}

export default InputWrapper;
