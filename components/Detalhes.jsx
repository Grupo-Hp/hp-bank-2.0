import Image from 'next/image'
import styles from '../styles/detalhes.module.css'

export default function Detalhes() {

    return (

        <div className={`py-10 ${styles.servicos}`}>
            <div className={`w-11/12 lg:w-8/12 mx-auto text-white`}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="col-span-2 md:col-span-1 mx-auto order-1 md:order-2">
                        <Image src="/images/HPbank_serviços.png" width="350" height="424" alt="" />
                    </div>

                    <div className="col-span-2 md:col-span-1 order-2 md:order-1">
                        <p>
                            A função da securitizadora é disponibilizar à empresa o montante que falta ser recebido, dando maior comodidade econômica.
                        </p>
                        <p>
                            Fica então a cargo da securitizadora receber os valores que ainda faltam ser pagos pelos credores.
                        </p>
                        <p>
                            Entendemos que escolher um empréstimo em um banco, por exemplo, pode ser mais oneroso, burocrático, além de demorado.
                        </p>
                        <p>
                            Por estes motivos, a HP Bank acredita ser o melhor caminho para o crescimento da sua empresa.
                        </p>
                        <p>
                            Vale ressaltar que antecipação de recebíveis conta, ainda, com apoio jurídico, a fim de trazer maior confiança em todo período de contrato.
                        </p>
                    </div>
                </div>
            </div>
            <div id="quemSomos"></div>
        </div>
    )
}