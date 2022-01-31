export const FormInput = ({ type = "text", name = "field", title = "title", value = "", className = "", onChange = () => { } }) => {
    return (
        <div className={`mb-3 ${className}`}>
            <label className="form-label mb-0 ms-1">{title}</label>
            <input
                value={value}
                autoComplete="off"
                onChange={onChange}
                className="form-control form-control-sm"
                type={type}
                name={name}
            />
        </div>
    )
}
export const FormText = ({ type = "text", name = "field", title = "title", value = "", rows = 4, className = "", onChange = () => { } }) => {
    return (
        <div className={`mb-2 ${className}`}>
            <label className="form-label mb-0">{title}</label>
            <textarea
                value={value}
                autoComplete="off"
                onChange={onChange}
                className="form-control form-control-sm"
                rows={rows}
                type={type}
                name={name}
            >
            </textarea>
        </div>
    )
}