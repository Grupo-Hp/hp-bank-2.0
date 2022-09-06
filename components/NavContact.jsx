import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function NavContact() {
    return (
        <div id="home">
            <div className="py-3 bg-primary-10 text-white w-full">
                <div className="container w-11/12 hidden lg:flex col-2 mx-auto justify-between">
                    <div className="flex col-span-1">
                        <FiPhone className="text-secondary-10 text-2xl mr-2" />(21) 4040-4148
                        <Link
                            
                            to="contato"
                            smooth={true}
                            offset={50}
                            duration={1000}
                            className={`flex cursor-pointer`}>
                            <GoMail className="text-secondary-10 text-2xl ml-5 mr-2" />contato@bankhp.com.br
                        </Link>
                    </div>
                    <div className="flex col-span-1">
                        <a href="https://www.facebook.com/grupohpcapital" target='blank'><FaFacebookF className="text-secondary-10 hover:cursor-pointer hover:duration-300  hover:text-secondary-20 text-2xl" /></a>
                        <a href="https://www.instagram.com/hpcapitaloficial/" target='blank'><FaInstagram className="text-secondary-10 hover:cursor-pointer hover:duration-300 hover:text-secondary-20 text-2xl mx-3" /></a>
                        <a href="https://www.linkedin.com/company/hpcapitaloficial" target='blank'><FaLinkedinIn className="text-secondary-10 hover:cursor-pointer hover:duration-300 hover:text-secondary-20 text-2xl" /></a>
                    </div>
                </div>
            </div >
        </div>
    )
}