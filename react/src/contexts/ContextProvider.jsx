import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {}
})

export const ContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Glauber Iury",
    email: "glauber.iury@gmail.com"
  });

  const [userToken, setUserToken] = useState('123')
  return (
    <StateContext.Provider value={{
      currentUser,
      setCurrentUser,
      userToken,
      setUserToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext( StateContext)
