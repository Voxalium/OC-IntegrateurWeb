function InputWrapper({ title, type, id }) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} />
        </div>
    );
}

export default InputWrapper;
