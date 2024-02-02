function InputWrapper({ title, type, id, value, set }) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} value={value} onChange={set} />
        </div>
    );
}

export default InputWrapper;
