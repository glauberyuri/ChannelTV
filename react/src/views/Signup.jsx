import {Link} from "react-router-dom";
import {useState} from "react";
import axiosClient from "../../axios.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup() {
  const {setCurrentUser, setUserToken} = useStateContext()
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState({__html: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({__html: ''})
    axiosClient.post('/signup', {
      name: fullName,
      username: userName,
      password: Password,
      password_confirmation: passwordConfirmation
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
        Create New Users
      */}
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Novo usuário
          </h2>
          {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}></div>)}
          <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nome Completo
              </label>
              <div className="mt-4">
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  value={fullName}
                  onChange={ev => setFullName(ev.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  placeholder="Nome completo"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Usuário
              </label>
              <div className="mt-4">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={userName}
                  onChange={ev => setUserName(ev.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  placeholder="Usuário"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Nova senha
                </label>
              </div>
              <div className="mt-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={Password}
                  onChange={ev => setPassword(ev.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  placeholder="Senha"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirmação senha
                </label>
              </div>
              <div className="mt-4">
                <input
                  id="password-confirmation"
                  name="password-confirmation"
                  type="password"
                  value={passwordConfirmation}
                  onChange={ev => setPasswordConfirmation(ev.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  placeholder="Confirma Senha"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600  px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cadastrar
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Já tem cadastro?
            <Link to='/login' className="font-semibold leading-6 text-red-500  p-1 hover:text-red-400">click aqui</Link>
          </p>
    </>
  )
}
