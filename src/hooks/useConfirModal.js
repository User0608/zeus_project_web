import { useState } from "react"

export const useConfirModal = ({ init = false, okhandler = () => { }, noHandler = () => { } }) => {
    const [modal, setmodal] = useState(init)
    const closeModal = () => { setmodal(false) }
    const openModal = () => { setmodal(true) }
    const confirmHandler = () => {
        setmodal(false)
        okhandler()
    }
    const cancelHandler = () => {
        setmodal(false)
        cancelHandler()
    }
    return { modal, closeModal, openModal, confirmHandler, cancelHandler }
}
