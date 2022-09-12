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
                                    <a href="./"
                                        className='bg-primary-10 px-5 py-2 hover:bg-primary-20 duration-300 rounded-md cursor-pointer text-white'
                                    >
                                        Página inicial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}