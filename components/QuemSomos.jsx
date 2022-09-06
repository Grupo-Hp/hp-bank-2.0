import Image from 'next/image'
import styles from '../styles/quemSomos.module.css'

export default function Servicos() {

    return (

        <div className={`py-10 ${styles.servicos}`}>
            <div className={`w-11/12 mx-auto`}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="col-span-2 md:col-span-1 mx-auto order-1">
                        <Image src="/images/HPbank_quemsomos.png" width="515" height="623" alt="" />
                    </div>

                    <div className="col-span-2 md:col-span-1 order-2">
                        <h4 className='text-xl text-primary-10 font-bold border-b-8 pb-3 mb-3 border-secondary-10'>Quem somos</h4>
                        <p>
                            Nós da HP Bank temos a melhor solução para quem busca serviços de qualidade.
                        </p>

                        <p>
                            Sabemos que, independente do porte do seu empreendimento, estar seguro financeiramente é essencial.
                        </p>

                        <p>
                            Temos soluções que pretendem dar mais conforto e durabilidade para o seu empreendimento.
                        </p>

                        <p>
                            A HP Bank oferece opções mais vantajosas e sem burocracias, pois compreendemos que é preciso agilidade na obtenção de recursos para seu investimento.
                        </p>

                        <p>
                            Ao optar pela HP Bank, nossos clientes dispõem da alternativa mais correta e eficiente para ter sua estabilidade financeira.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 mt-5'>

                    <div className="col-span-2 md:col-span-1 my-auto">
                        <h3 className='text-2xl italic mt-5 text-secondary-30 mb-5'>sua nova escolha</h3>
                        <p>
                            Somos referência para quem busca serviços relacionados à antecipação de recebíveis.
                        </p>

                        <p>
                            Temos como foco oferecer as melhores alternativas de investimentos para nossos clientes, sempre atentos às transformações do mercado financeiro.</p>

                        <p>
                            Nossas soluções são embasadas em pilares já solidificados pelo grupo HP.
                        </p>
                    </div>
                    <div className="hidden col-span-1 md:flex">
                        <Image src="/images/HPbank_quemsomos2.png" width="706" height="559" alt="" />
                    </div>
                </div>
            </div>
            <div id="equipe"></div>
        </div>
    )
}