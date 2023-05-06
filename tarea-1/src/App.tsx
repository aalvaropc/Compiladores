import { useState } from "react";
import { analizarIdentificador } from "./helpers/automata";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";

type FormElement = React.FormEvent<HTMLFormElement>;

function Form() {
  const [entrada, setEntrada] = useState<string>("");

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    const valor = analizarIdentificador(entrada);
    valor
      ? toast.success(`El identificador ${entrada} es valido`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      : toast.error(`El identificador ${entrada} es invalido`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    setEntrada("");
  };

  return (
    <form
      className="bg-gray-900 opacity-75 w-30 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex"
      onSubmit={handleSubmit}
    >
      <div className="mb-4 flex-1">
        <label className="block text-blue-300 py-2 font-bold mb-2"> </label>
        <input
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="text"
          placeholder="Ingrese el identificador"
          onChange={(e) => setEntrada(e.target.value)}
          value={entrada}
        />
      </div>
      <button className="mt-5 mb-4 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out ml-4 h-auto">
        Enviar
      </button>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
}

function App() {
  return (
    <>
      <div className="h-full">
        <div className="w-full container mx-auto pt-10 pl-8">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                COMPILADORES
              </span>
            </a>
          </div>
        </div>

        <div className="container pt-20 md:pt-32 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="w-full xl:w-2/5 pl-10 overflow-hidden mx-auto max-w-md">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Tarea
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                02
              </span>
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              Validar un identificador
            </p>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
