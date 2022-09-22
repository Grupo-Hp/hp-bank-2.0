import { useState } from 'react'
import styles from '../styles/servicos.module.css'
import Maps from '../components/GoogleMaps'

export default function Contato() {

  const [dataForm, setDataForm] = useState({
    empresa: 'HP Bank',
    imagem: 'Bank',
    site: 'http://www.bankhp.com.br',
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value })

  const sendContact = async e => {
    e.preventDefault()

    try {
      await fetch('https://api.grupohp.com.br/send', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: { 'Content-Type': 'application/json' }
      })
      alert('Dados enviado com sucesso!')
    } catch (error) {
      alert('Ocorreu um erro')
    }
  }

  return (
    <div className={`${styles.servicos} border-t-4 border-secondary-10`}>
      <div className="container mx-auto px-12 py-12">
        <h4 className='text-xl text-primary-10 font-bold border-b-8 pb-3 border-secondary-10'>fale conosco</h4>
        <p className="mt-4 text-xl">Preencha as informações no nosso formulário que estaremos entrando em contato o mais rápido possível dando o melhor atendimento.</p>
        <div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-2 md:col-span-1">

              <form onSubmit={sendContact}>

                <div className="form-group mb-6">

                  <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="nome" onChange={onChangeInput} value={dataForm.nome} placeholder="Digite seu nome*" />

                </div>

                <div className="form-group mb-6">
                  <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="email" onChange={onChangeInput} value={dataForm.email} placeholder="Digite seu e-mail*" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1 form-group mb-6">

                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="telefone" onChange={onChangeInput} value={dataForm.telefone} placeholder="Digite seu principal telefone*" />

                  </div>

                  <div className="col-span-2 md:col-span-1 form-group mb-6">

                    <div className="flex">
                      <div className="mb-3 w-full">
                        <select className="form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" name='assunto' value={dataForm.assunto} onChange={onChangeInput}>
                          <option defaultValue>Escolhe o tipo de assunto:</option>
                          <option value="Comercial">Comercial</option>
                          <option value="Elogio">Elogio</option>
                          <option value="Reclamações">Reclamações</option>
                          <option value="Dúvidas">Dúvidas</option>
                          <option value="Sugestões">Sugestões</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mb-6">

                  <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="mensagem" rows="7" onChange={onChangeInput} value={dataForm.mensagem} placeholder="Escreva aqui..." required ></textarea>

                  <button type="submit" className="mt-2 w-full px-6 py-2.5 bg-primary-10 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-20 hover:shadow-lg transition duration-150 ease-in-out">Enviar</button>

                </div>
              </form>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className='text-2xl italic text-secondary-30 mb-5'>venha nos visitar</h3>
              <p className='leading-1 text-primary-10'>
                A HP Bank fica na Rua Miguem de Frias, 77 - sala 1601 <br />
                Icaraí - Niterói/RJ
              </p>
              <div>
                <Maps />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
