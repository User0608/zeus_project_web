const { createContext } = require("react");

export const SessionContext = createContext({});
export const MessageModalContext = createContext({ showMessage: (message = "", type = "success") => { } });