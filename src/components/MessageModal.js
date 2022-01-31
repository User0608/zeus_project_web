export const MessageModal = ({ message = "bienvenido", type = "success", handlerClose = () => { } }) => {
    return (
        <div className="notify shadow rounded bg-success">
            <div className="row">
                <div className="col-11">
                    <span className="notify-message no-seleccionable">{message}</span>
                </div>
                <div className="col-1">
                    <span
                        onClick={handlerClose}
                        className="notify-button no-seleccionable"
                    >x</span>
                </div>
            </div>
        </div>
    )
}
