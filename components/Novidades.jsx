import style from '../styles/frase.module.css'

export default function Frase() {
    return (
        <div className={`bg-secondary-20 py-6 ${style.frase}`}>
            <form className="w-10/12 lg:w-8/12 xl:w-7/12 mx-auto flex justify-between flex-col md:flex-row items-center" >
                <h1 className='text-primary-10 font-bold text-xl text-center'>Fique por dentro das novidades</h1>
                <input type="mail" className='rounded-3xl px-5 py-2 my-3 border-2 bg-transparent border-primary-10 placeholder:text-primary-20' placeholder='Seu melhor e-mail' />
                <button className='uppercase bg-primary-10 text-white px-10 py-2 mx-3 rounded-3xl hover:bg-primary-20 duration-500'>enviar</button>
            </form>
        </div>
    )
}