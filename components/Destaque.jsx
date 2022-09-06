import { FiPhone } from "react-icons/fi";

export default function Destaque() {
    return (
        <div className="w-full bg-secondary-10 text-primary-10 px-5">
            <div className="container mx-auto flex justify-between py-10">
                <FiPhone className="text-primary-10 text-2xl mr-2" />
                <div className="border-x-2 border-primary-10">01</div>
                <div>02</div>
            </div>
        </div>
    )
}