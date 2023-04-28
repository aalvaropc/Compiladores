import { useState } from "react";
import { analizarIdentificador } from "../helpers/automata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormProps = {
    onSubmit: (valid: boolean) => void;
};

const Form = ({ onSubmit }: FormProps) => {
    const [entrada, setEntrada] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const esValido = analizarIdentificador(entrada);
        esValido
            ? toast.success(`El identificador ${entrada} es válido`)
            : toast.error(`El identificador ${entrada} es inválido`);
        onSubmit(esValido);
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
};

export default Form;
