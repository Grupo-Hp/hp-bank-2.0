import style from '../styles/frase.module.css'

export default function Frase() {
    return (
        <div className={`bg-primary-10 text-center text-xl sm:text-2xl md:text-3xl py-6 italic ${style.frase}`}>
            <h1 className='text-white'>Independente do porte do seu empreendimento,</h1>
            <h1 className='text-secondary-30'>estar seguro financeiramente é essencial.</h1>
        </div>
    )
}