
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "py-p1",
  language: "python",
  title: "Projeto Master Python: Monitor de Sistema e Profiling",
  description: "Inicie a construção de um motor de análise de performance de nível industrial.",
  statement: "Implemente uma função que identifique o PID do processo atual e conte o número de threads ativas no sistema.",
  isProjectPart: true,
  template: `import threading
import os

# Passo 1: Defina a assinatura do Motor
ENGINE_NAME = "CWM-MONITOR-PRO"

def get_system_context():
    # Implemente a lógica para retornar o PID e a contagem de threads
    return {
        "pid": 0,
        "threads": 0
    }`,
  detailedExplanation: `
    <h3>🚀 Iniciando o Motor de Elite</h3>
    <p>Nesta jornada Master, vais construir um monitor de sistemas de alta performance. O primeiro passo é garantir que o teu código consegue identificar o contexto de execução.</p>
    <p>Utiliza <code>os.getpid()</code> para o identificador do processo e <code>threading.active_count()</code> para monitorizar a carga de threads.</p>
  `,
  objectives: [
    {
      id: "threading_count",
      description: "Retorne a contagem de threads usando threading.active_count().",
      hint: "threading.active_count()",
      test: "threading.active_count()"
    },
    {
      id: "pid_ident",
      description: "Retorne o ID do processo usando os.getpid().",
      hint: "os.getpid()",
      test: "os.getpid()"
    }
  ]
};
