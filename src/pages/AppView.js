import { Route, Switch } from "react-router-dom";
import { showExitModal } from "../utils/modals";
import { useContext } from "react";
import { SessionContext } from "../contexts/context";
import { useConfirModal } from "../hooks/useConfirModal";
import { Navbar } from "../components/Navbar";
import { sessionActions } from "../reducers/sessionReducer";
import { Router } from "./Router";

export const AppView = () => {
    const { session, dispatchSession } = useContext(SessionContext)
    const { modal, closeModal, openModal, confirmHandler } = useConfirModal({
        okhandler: () => {
            dispatchSession({
                type: sessionActions.cerrar_session,
                payload: ""
            })
        },
    })
    return (
        <>
            <Navbar exitModalOpen={openModal} />
            <Switch>
                <Router />
            </Switch>
            {
                modal &&
                showExitModal(
                    "Menssage",
                    "Confirme el cierre de session.",
                    closeModal,
                    confirmHandler,
                )
            }
        </>
    )
}
