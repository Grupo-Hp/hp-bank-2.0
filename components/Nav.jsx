import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";

import NavContact from "./NavContact"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <NavContact />
            <div className="shadow-sm py-7 w-full bg-white border-b z-50">
                <div className="w-full container mx-auto">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center  mx-20  justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <a href="./"><Image
                                    src="/images/logoBank.svg"
                                    width={90}
                                    height={90}
                                    alt="Logo da HP Bank"

                                /></a>
                            </div>
                            <div className="hidden lg:block">
                                <div className="ml-10 flex items-baseline space-x-10 uppercase">
                                    <Link

                                        to="servicos"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className='hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-secondary-10 cursor-pointer text-primary-10'
                                    >
                                        serviços
                                    </Link>
                                    <Link

                                        to="quemSomos"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className='hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-secondary-10 cursor-pointer text-primary-10'
                                    >
                                        quem somos
                                    </Link>
                                    <Link

                                        to="equipe"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className='hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-secondary-10 cursor-pointer text-primary-10'
                                    >
                                        equipe
                                    </Link>
                                    <Link

                                        to="contato"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className='hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-secondary-10 cursor-pointer text-primary-10'
                                    >
                                        fale conosco
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mr-10 flex lg:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-primary-10 focus:ring-offset-2"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="lg:hidden uppercase" id="mobile-menu">
                            <div
                                ref={ref}
                                className="bg-primary-10 pt-2 pb-3 space-y-1"
                            >
                                <Link

                                    to="servicos"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-secondary-10 text-white block px-3 py-2 text-base font-medium"
                                >
                                    serviços
                                </Link>
                                <Link

                                    to="quemSomos"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-secondary-10 text-white block px-3 py-2 text-base font-medium"
                                >
                                    quem somos
                                </Link>
                                <Link

                                    to="equipe"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-secondary-10 text-white block px-3 py-2 text-base font-medium"
                                >
                                    equipe
                                </Link>
                                <Link

                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-secondary-10 text-white block px-3 py-2 text-base font-medium"
                                >
                                    fale conosco
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </>
    )
}