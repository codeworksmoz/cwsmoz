import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermosDeServicoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="prose dark:prose-invert max-w-4xl mx-auto py-12">
            <h1>Termos de Serviço</h1>

            <h2>1. Termos</h2>
            <p>Ao acessar ao site Codworks MOZ, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>

            <h2>2. Uso de Licença</h2>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Codworks MOZ , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
            <ol>
                <li>modificar ou copiar os materiais;</li>
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Codworks MOZ;</li>
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ol>

            <h2>3. Isenção de responsabilidade</h2>
            <p>Os materiais no site da Codworks MOZ são fornecidos 'como estão'. Codworks MOZ não oferece garantias, expressas ou implícitas, и, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
            
            <h2>4. Limitações</h2>
            <p>Em nenhum caso o Codworks MOZ ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Codworks MOZ, mesmo que Codworks MOZ ou um representante autorizado da Codworks MOZ tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.</p>
            
            <p>Esta política é efetiva a partir de <strong>Outubro de 2024</strong>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
