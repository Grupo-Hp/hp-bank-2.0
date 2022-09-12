import Image from 'next/image'
import { Link } from "react-scroll";
import styles from '../styles/servicos.module.css'

export default function Servicos() {

    return (

        <div className={`py-10 ${styles.servicos}`}>
            <div className={`w-11/12 lg:w-8/12 mx-auto`}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="hidden col-span-1 md:flex">
                        <Image src="/images/HP_equipe_1.png" width="350" height="424" alt="" />
                    </div>

                    <div className="col-span-2 md:col-span-1 py-10">
                        <h4 className='text-xl text-primary-10 font-bold border-b-8 pb-3 border-secondary-10'>equipe</h4>
                        <h3 className='text-2xl italic mt-5 text-secondary-30'>conte com </h3>
                        <h3 className='text-2xl italic mb-5 text-secondary-30'>os melhores</h3>

                        <p>
                            Nosso time está disposto a ajudar você a lidar corretamente com suas finanças, independente do porte ou modelo de negócio.
                        </p>

                        <p>
                            Contamos com profissionais especializados, atentos às demandas e inovações contínuas do mercado.
                        </p>

                        <p>
                            Sinta-se à vontade para tirar suas dúvidas, pois estamos a sua disposição para auxiliá-lo.
                        </p>
                        <Link to="contato"
                            smooth={true}
                            offset={50}
                            duration={1000}><button type="button" className="inline-block border-2 border-primary-10 px-12 py-2.5 mt-4 text-primary-10 hover:text-white text-lg leading-tight uppercase rounded-3xl hover:bg-primary-20 hover:shadow-lg transition duration-500 ease-in-out">fale com um especialista</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div id='contato'></div>
        </div>
    )
}