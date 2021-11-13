export const showExitModal = (title = "Titulo", message = "message", closeHandler = () => { }, confirmHandler = () => { }) => {
    return (
        <div className="mymodal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button
                            onClick={closeHandler}
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={closeHandler}
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >Cancel</button>
                        <button
                            onClick={confirmHandler}
                            type="button"
                            className="btn btn-success"
                        >Si</button>
                    </div>
                </div>
            </div>
        </div>
    )
}