import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  currentCart: {},
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
  setCurrentCart: () => {}
})

export const ContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentCart, setCurrentCart] = useState({})
  const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '')

  const setUserToken = (token) => {
    if(token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }
  return (
    <StateContext.Provider value={{
      currentCart,
      setCurrentCart,
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
