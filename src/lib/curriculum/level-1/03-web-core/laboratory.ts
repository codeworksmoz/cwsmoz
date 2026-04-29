import { exerciseHTML1 } from './laboratory/html/01-estrutura-basica';
import { exercise as exerciseCSS1 } from './laboratory/css/01-seletores';
import { exercise as exerciseCSS2 } from './laboratory/css/02-box-model-lab';
import { exercise as exerciseFlex } from './laboratory/css/04-flexbox-lab';
import { exercise as exerciseGrid } from './laboratory/css/05-grid-lab';
import { exercise as exerciseResp } from './laboratory/css/06-media-queries-lab';
import { exercise as exerciseForms } from './laboratory/html/02-formularios-lab';
import { exercise as exerciseDeploy } from './laboratory/03-deployment-lab';
import { exercise as exerciseSem } from './laboratory/04-semantica-lab';
import { exercise as exerciseSVG } from './laboratory/05-svg-lab';
import { exercise as exerciseARIA } from './laboratory/11-aria-lab';
import { exercise as exerciseAnim } from './laboratory/06-animacoes-lab';
import { exercise as exerciseBEM } from './laboratory/13-bem-refactoring-lab';
import { exercise as exerciseHTTP } from './laboratory/14-http-analysis-lab';
import { exercise as exercisePerf } from './laboratory/15-perf-optimization-lab';

export const practice = {
  html: [
    exerciseHTML1, 
    exerciseForms, 
    exerciseDeploy, 
    exerciseSem, 
    exerciseSVG, 
    exerciseARIA, 
    exerciseAnim, 
    exerciseHTTP, 
    exercisePerf,
    {
      id: "web-p19-typo",
      language: "html",
      title: "Laboratório: Otimização de Fontes",
      description: "Implemente carregamento de fontes performático.",
      statement: "No bloco style, defina uma @font-face que utilize 'font-display: swap'.",
      template: "<style>\n  @font-face {\n    font-family: 'Elite';\n    /* Adicione aqui */\n  }\n</style>",
      detailedExplanation: "<p>O swap garante que o texto não desapareça durante o carregamento.</p>",
      objectives: [{ id: "obj1", description: "Usar font-display: swap", test: "font-display: swap" }]
    },
    {
      id: "web-p20-cq",
      language: "html",
      title: "Laboratório: Container Queries na Prática",
      description: "Crie um componente autossuficiente.",
      statement: "Defina o container-type como inline-size no elemento .card-parent.",
      template: "<style>\n  .card-parent {\n    /* Defina aqui */\n  }\n</style>",
      detailedExplanation: "<p>Isto permite que os filhos reajam ao tamanho do card.</p>",
      objectives: [{ id: "obj1", description: "Configurar container-type", test: "container-type: inline-size" }]
    },
    {
      id: "web-p21-dom",
      language: "html",
      title: "Laboratório: O Primeiro Gancho JS",
      description: "Prepare o HTML para o JavaScript.",
      statement: "Crie um botão com o ID 'action-trigger' para que possamos selecioná-lo no futuro.",
      template: "<button id=\"\">Clique aqui</button>",
      detailedExplanation: "<p>IDs são os endereços que o JavaScript usa para encontrar elementos.</p>",
      objectives: [{ id: "obj1", description: "Definir o ID correto", test: "id=\"action-trigger\"" }]
    }
  ],
  css: [exerciseCSS1, exerciseCSS2, exerciseFlex, exerciseGrid, exerciseResp, exerciseBEM]
};
