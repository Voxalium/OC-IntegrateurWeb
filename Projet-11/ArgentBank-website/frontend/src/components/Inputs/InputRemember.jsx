function InputRemember({ title, type, checked, set, id }) {
    return (
        <div className="input-remember">
            <input type={type} id={id} checked={checked} onChange={set} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
}

export default InputRemember;
