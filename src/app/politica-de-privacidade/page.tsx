import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="prose dark:prose-invert max-w-4xl mx-auto py-12">
            <h1>Política de Privacidade</h1>
            <p>A sua privacidade é importante para nós. É política do Codworks MOZ respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Codworks MOZ, e outros sites que possuímos e operamos.</p>
            
            <h2>1. Informações que coletamos</h2>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
            
            <h2>2. Uso de dados</h2>
            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
            
            <h2>3. Cookies</h2>
            <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies.</p>
            
            <h2>4. Seus direitos</h2>
            <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
            
            <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
            
            <p>Esta política é efetiva a partir de <strong>Outubro de 2024</strong>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
