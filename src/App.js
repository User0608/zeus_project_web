import { useLocation, Redirect } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import { MessageModalContext, SessionContext } from "./contexts/context";
import { sessionReducer } from "./reducers/sessionReducer";
import { useLocal } from "./hooks/useLocal";
import { LoginPage } from "./pages/LoginPage";
import { AppMainView } from "./pages/AppMainView";
import { MessageModal } from "./components/MessageModal"

const initToken = () => {
  return JSON.parse(localStorage.getItem('session')) || { token: "" }
}
function App() {
  const [modal, setModal] = useState({ message: "Bienvenido", type: "" })
  const [showmodal, setShowmodal] = useState(false)
  let location = useLocation()
  const [redirect, setRedirect] = useState(false)
  const [session, dispatchSession] = useReducer(sessionReducer, { token: "" }, initToken)

  useLocal('session', session)
  useEffect(() => {
    if (session.token === "") {
      setRedirect(true)
    } else {
      setRedirect(false)
    }
  }, [session])
  const closeMessage = () => {
    setShowmodal(false)
  }
  const showMessage = (message = "Bienvenido", type = "success") => {
    setModal({ message, type })
    setShowmodal(true)
    setTimeout(() => {
      closeMessage()
    }, 1000)
  }
  return (  
    <SessionContext.Provider
      value={{ session, dispatchSession }}
    >
      {redirect && <Redirect to="/login" />}
      {location.pathname === "/login" ?
        <>
          {!redirect && <Redirect to="/" />}
          <LoginPage />
        </>
        :
        <>
          {showmodal && <MessageModal {...modal} handlerClose={closeMessage} />}
          <MessageModalContext.Provider
            value={{ showMessage }}
          >
            <AppMainView />
          </MessageModalContext.Provider>
        </>
      }
    </SessionContext.Provider>


  )
}

export default App;
