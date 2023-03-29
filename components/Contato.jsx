import { useState } from "react";
import styles from "../styles/servicos.module.css";
import Maps from "../components/GoogleMaps";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      image: "Bank",
      company: "HP Bank",
      site: "hpbak",
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const uuid = uuidv4().replace(/[-]/g, "");
    const uuidUppercase = uuid.toUpperCase();
    data.id = uuidUppercase;

    try {
      await axios({
        method: "post",
        url: "https://fmdtbztec6.execute-api.us-east-1.amazonaws.com/default/SendMail",
        data: data,
      });
      setLoading(false);
      reset();
      toast.success("Mensagem enviada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Ocorreu um erro, tente mais tarde!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className={`${styles.servicos} border-t-4 border-secondary-10`}>
      <div className="container mx-auto px-12 py-12">
        <ToastContainer />
        <h4 className="text-xl text-primary-10 font-bold border-b-8 pb-3 border-secondary-10">
          fale conosco
        </h4>
        <p className="mt-4 text-xl">
          Preencha nosso formulário e obtenha um atendimento exclusivo.
          Entraremos em contato o mais breve possível
        </p>
        <div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-2 md:col-span-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="nome"
                    {...register("name")}
                    placeholder="Digite seu nome*"
                  />
                  <p className="text-red-500 ml-3 mt-1">
                    {errors?.mensagem?.message}
                  </p>
                </div>

                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="email"
                    {...register("email")}
                    placeholder="Digite seu e-mail*"
                  />
                  <p className="text-red-500 ml-3 mt-1">
                    {errors?.mensagem?.message}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1 form-group mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="telefone"
                      {...register("phone")}
                      placeholder="Digite seu principal telefone*"
                    />
                    <p className="text-red-500 ml-3 mt-1">
                      {errors?.mensagem?.message}
                    </p>
                  </div>

                  <div className="col-span-2 md:col-span-1 form-group mb-6">
                    <div className="flex">
                      <div className="mb-3 w-full">
                        <select
                          className="form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                          name="assunto"
                          {...register("subject")}
                        >
                          <option defaultValue>
                            Escolhe o tipo de assunto:
                          </option>
                          <option value="Comercial">Comercial</option>
                          <option value="Elogio">Elogio</option>
                          <option value="Reclamações">Reclamações</option>
                          <option value="Dúvidas">Dúvidas</option>
                          <option value="Sugestões">Sugestões</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mb-6">
                  <textarea
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="mensagem"
                    rows="7"
                    {...register("message")}
                    placeholder="Escreva aqui..."
                    required
                  ></textarea>
                  <p className="text-red-500 ml-3 mt-1">
                    {errors?.message?.message}
                  </p>
                  {loading && (
                    <button
                      type="submit"
                      className="mt-2 w-full px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase border border-gray-400 bg-gray-400 ease-in-out"
                    >
                      Aguarde
                    </button>
                  )}
                  {!loading && (
                    <button
                      type="submit"
                      className="mt-2 w-full px-6 py-2.5 bg-primary-10 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-20 hover:shadow-lg transition duration-150 ease-in-out"
                    >
                      Enviar
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl italic text-secondary-30 mb-5">
                venha nos visitar
              </h3>
              <p className="leading-1 text-primary-10">
                A HP Bank fica na Av. Pref. Silvio Picanço, 463 - Sala 708/711{" "}
                <br />
                Charitas - Niterói/RJ
              </p>
              <div>
                <Maps />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
