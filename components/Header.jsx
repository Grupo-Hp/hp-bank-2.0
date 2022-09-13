import Image from 'next/image'
import { Link } from "react-scroll";
import styles from '../styles/header.module.css'

export default function Header() {

    return (

        <>
            <div className={`pt-16 ${styles.header}`}>
                <div className="container mx-auto py-6 md:py-0">
                    <div className="h-[50vh] sm:h-[90vh] grid grid-cols-12 content-center">
                        <div className="col-span-12 lg:col-span-6 text-center lg:text-left px-5">
                            <h1 className="text-white text-3xl sm:text-5xl xl:text-6xl sm:leading-[4.5rem] xl:leading-[4.5rem]">A securitizadora referencial para quem busca excelência e o melhor serviço do mercado.</h1>
                            <Link to="contato"
                                smooth={true}
                                offset={50}
                                duration={1000}><button type="button" className="inline-block border-2 border-secondary-10 px-12 py-2.5 mt-4 text-white text-lg leading-tight uppercase rounded-3xl hover:bg-secondary-10 hover:shadow-lg transition duration-500">fale com um especialista</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="servicos"></div>
        </>
    )
}