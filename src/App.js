import { useLocation, Redirect } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import { SessionContext } from "./contexts/context";
import { sessionReducer } from "./reducers/sessionReducer";
import { useLocal } from "./hooks/useLocal";
import { LogginView } from "./pages/LoginView";
import { AppView } from "./pages/AppView";

const initToken = () => {
  return JSON.parse(localStorage.getItem('session')) || { token: "" }
}
function App() {
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

  return (
    <SessionContext.Provider
      value={{ session, dispatchSession }}
    >
      {redirect && <Redirect to="/login" />}
      {location.pathname === "/login" ?
        <>
          {!redirect && <Redirect to="/" />}
          <LogginView />
        </>
        :
        <AppView />
      }
    </SessionContext.Provider>


  )
}

export default App;
