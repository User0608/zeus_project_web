export const FormButtons = ({ resetHandler = () => { }, canceltitle = "Cancelar", oktitle = "Guardar" }) => {
    return (
        <div className="d-flex mt-4 ms-5">
            <input
                className="btn btn-sm btn-danger me-5"
                type="button"
                value={canceltitle}
                onClick={resetHandler}
            />
            <input
                className="btn btn-sm btn-success me-3"
                type="submit"
                value={oktitle}
            />
        </div>
    )
}
export const FormButtons2 = ({ resetHandler = () => { }, canceltitle = "Cancelar", oktitle = "Guardar" }) => {
    return (
        <div className="d-flex ms-5">
            <input
                className="btn btn-sm btn-danger me-5"
                type="button"
                value={canceltitle}
                onClick={resetHandler}
            />
            <input
                className="btn btn-sm btn-success me-3"
                type="submit"
                value={oktitle}
            />
        </div>
    )
}