function InputRemember({ title, type, id }) {
    return (
        <div className="input-remember">
            <input type={type} id={id} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
}

export default InputRemember;
