import styles from "../styles/modal.module.css"
import { useEffect } from "react";
import { TbAlertTriangle } from "react-icons/tb";

export default function Modal() {

    // useEffect(() => {
    //     const valor = localStorage.getItem('modal')
    //     if (valor) adicionarStorange()
    // }, [])

    const adicionarStorange = () => {
        document.querySelector('.modal').classList.add('hidden')
        //localStorage.setItem('modal', 'ok')
    }

    return (
        <div className={`fixed w-full h-full overflow-auto top-0 text-white modal ${styles.containerFluid}`}>
            <div className="w-3/4 max-w-xl mx-auto mt-16 rounded-xl p-5 bg-primary-20 border-2 border-secondary-20">
                <TbAlertTriangle className={`text-white text-7xl mx-auto mb-5`} />
                <h3 className="font-bold uppercase text-2xl mb-5 text-center bg-secondary-10">importante</h3>

                <p className="md:text-lg text-justify">Em respeito aos nossos clientes e colaboradores, o Grupo HP informa que a Securitizada HP Bank  <span className="bg-secondary-10 font-semibold">NÃO OFERECE CRÉDITO CONSIGNADO OU EMPRÉSTIMO</span>.</p>

                <p className="md:text-lg text-justify my-3">As atividades da HP Bank são baseadas em antecipação de recebíveis, sendo este o nosso ÚNICO produto oferecido. Também frisamos que nenhuma das outras empresas que pertencem ao GRUPO HP oferece tais serviços.</p>

                <p className="md:text-lg text-justify">Para mais informações ou dúvidas, entre em contato conosco através do telefone (WhatsApp) 4040-4148, pelo e-mail atendimento@hpcap.com.br ou pelas nossas redes sociais oficiais.</p>
                <div className="text-center mt-10">
                    <button onClick={adicionarStorange} type="button" className="inline-block px-6 py-2.5 bg-secondary-10 text-white font-medium text-xs uppercase rounded hover:bg-secondary-20 hover:duration-300 transition duration-150">Eu compreendo</button>
                </div>
            </div>
        </div>
    )
}