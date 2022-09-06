import Image from 'next/image'
import styles from '../styles/servicos.module.css'

export default function Servicos() {

    return (

        <div className={`py-10 ${styles.servicos}`}>
            <div className={`w-11/12 lg:w-8/12 mx-auto`}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="hidden col-span-1 md:flex">
                        <Image src="/images/servico_01.png" width="350" height="424" alt="" />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h4 className='text-xl text-primary-10 font-bold border-b-8 pb-3 border-secondary-10'>servicos</h4>
                        <h5 className='my-4 text-secondary-10 text-lg'>antecipação de recebíveis</h5>
                        <p>
                            A antecipação de recebíveis é um auxílio às entidades que possuem valores a serem recebidos com credores no mercado financeiro.
                        </p>
                        <p>
                            Muitas das vezes, ao oferecer um serviço ou produto, uma empresa não pode aguardar até a data de recebimento para obter os valores pendentes.
                        </p>
                        <p>
                            Nosso propósito é a entrega de serviços rápidos e sem complicação, sempre dando valor à inovação e ao maior custo-benefício.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className='text-2xl italic mt-5 text-secondary-30'>muito além de um serviço...</h3>
                </div>
            </div>
        </div>
    )
}