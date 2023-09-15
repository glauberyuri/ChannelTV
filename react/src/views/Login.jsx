import React, {useState} from "react";
import axiosClient from "../../axios.js";
import {Link} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Login() {
  const {setCurrentUser, setUserToken} = useStateContext()
  const [userName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState({__html: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({__html: ''})
    axiosClient.post('/login', {
      username: userName,
      password: Password,
    })
      .then(({data}) => {
        console.log(data)
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch((error) => {
        if(error.response){
          const FinalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...next , ...accum], [])
          console.log(FinalErrors)
          setError({__html: FinalErrors.join('<br>')})
        }
        console.error(error)
      })
  }

  return (
    <>
      {/*
          Views Login
      */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Faça o seu login
        </h2>
        {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}></div>)}
        <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Login
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={userName}
                onChange={ev => setUserName(ev.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-red-600">
                  esqueceu a senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={Password}
                onChange={ev => setPassword(ev.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          primeiro acesso?{' '}
          <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-red-500">
            Cadastrar usuário
          </Link>
        </p>

    </>
  )
}


