import styles from '../styles/footer.module.css'
import Image from 'next/image'
import { Link } from "react-scroll";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { BiMap } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className={`text-white ${styles.footer}`}>
                <div className='container mx-auto pb-10'>
                    <div className='text-center py-32'>
                        <Image src="/images/logo.png" width="180" height="180" alt="" />
                    </div>
                    <div className="w-11/12 sm:w-10/12 mx-auto grid grid-cols-5 gap-x-10">
                        <div className={`order-1 col-span-2 lg:col-span-1 pb-10 ${styles.decoration}`}>
                            <h3>menu</h3>
                            <ul>
                                <li><Link
                                    to="home"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Home
                                </Link></li>
                                <li><Link
                                    to="servicos"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Serviços
                                </Link></li>
                                <li><Link
                                    to="quemSomos"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Quem somos
                                </Link></li>
                                <li><Link
                                    to="equipe"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Equipe
                                </Link></li>
                                <li><Link
                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Fale conosco
                                </Link></li>
                                <li><a href='https://dash-bankhp.vercel.app/' target='bland'>
                                    Area do cliente
                                </a></li>
                                <li><a href='./politica' target='bland'>
                                    Politica de privacidade
                                </a></li>
                            </ul>
                        </div>
                        <div className={`order-3 lg:order-2 col-span-2 lg:col-span-1 pb-10 ${styles.decoration}`}>
                            <h3>Grupo HP</h3>
                            <ul>
                                <li><a href="https://www.agaempreendimentos.com.br/" target='blank'>AGÁ Empreendimentos</a></li>
                                <li><a href="https://www.hpcap.com.br/" target='blank'>HP Capital</a></li>
                            </ul>
                        </div>
                        <div className={`order-3 lg:order-2 col-span-2 lg:col-span-1 pb-10 ${styles.decoration}`}>
                            <h3>Colaborador</h3>
                            <ul>
                                <li><a href="https://login.microsoftonline.com/" target='blank'>Webmail</a></li>
                                <li><a href="#">Operador</a></li>
                                <li><a href="https://glpi.hpcap.com.br/" target='blank'>GLPI</a></li>
                            </ul>
                        </div>
                        <div className="order-2 lg:order-3 col-span-2 lg:col-span-1 pb-10">
                            <h3>contato</h3>
                            <ul>
                                <li><FiPhone className={`text-secondary-10 text-2xl`} />&ensp;(21)4040-4148</li>
                                <Link
                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className={`cursor-pointer`}
                                ><li><GoMail className={`text-secondary-10 text-2xl`} />&ensp;contato@bankhp.com.br</li></Link>
                                <li><BiMap className={`text-secondary-10 text-4xl`} />&ensp;Av. Pref. Silvio Picanço, 463 - Sala 708/711, Niterói/RJ</li>
                            </ul>
                        </div>
                        <div className="order-4 col-span-2 lg:col-span-1 pb-10">
                            <h3>Siga-nos</h3>
                            <div className="flex col-span-1 text-3xl pt-6">
                                <a href="https://www.facebook.com/grupohpcapital" target='blank'><FaFacebookF className="text-secondary-10 hover:cursor-pointer hover:duration-300  hover:text-secondary-20" /></a>
                                <a href="https://www.instagram.com/hpcapitaloficial/" target='blank'><FaInstagram className="text-secondary-10 hover:cursor-pointer hover:duration-300 hover:text-secondary-20 mx-3" /></a>
                                <a href="https://www.linkedin.com/company/hpcapitaloficial" target='blank'><FaLinkedinIn className="text-secondary-10 hover:cursor-pointer hover:duration-300 hover:text-secondary-20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
