import Page from '../components/Page'
import PoliticaComponents from '../components/PoliticaComponets'
import Header from '../components/Header'
import Destaque from '../components/Destaque'
import Servicos from  '../components/Servicos'
import Detalhes from  '../components/Detalhes'
import QuemSomos from  '../components/QuemSomos'
import Frase from  '../components/Frase'
import Equipe from  '../components/Equipe'
//import Novidades from  '../components/Novidades'
import Contato from  '../components/Contato'

export default function Home() {

  return (
    <Page title="HP Bank" description="Site HP Bank" path="/">
      <PoliticaComponents />
      <Header />
      <Destaque />
      <Servicos />
      <Detalhes />
      <QuemSomos />
      <Frase />
      <Equipe />
      <Contato />
    </Page>
  )
}