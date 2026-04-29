
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-cpp",
  language: "cpp",
  title: "Lab C++: Aritmética de Alta Performance",
  description: "Use operadores compostos e aritméticos em C++.",
  statement: "Incremente o valor de 'vida' em 10 unidades e calcule o 'dano_final' multiplicando o 'ataque' pelo 'multiplicador'.",
  template: `#include <iostream>

int main() {
    int vida = 100;
    int ataque = 50;
    float multiplicador = 1.5;

    // 1. Use o operador composto para adicionar 10 à vida
    vida ;

    // 2. Calcule o dano final (ataque vezes multiplicador)
    float dano_final = ;

    return 0;
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚡ Performance C++</h3>
      <p>C++ é a linguagem do metal. Operadores compostos como <code>+=</code> não são apenas atalhos; eles dizem ao compilador para otimizar o acesso ao registo da CPU, tornando o código mais rápido.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold">🎮 Exemplo de Aplicação (Game Dev):</p>
        <p class="text-[10px] text-muted-foreground leading-relaxed">
          Num motor de jogo, calcularias a posição do herói 60 vezes por segundo: <br/>
          <code>pos_x += velocidade * delta_time;</code>
        </p>
      </div>

      <p class="text-xs">
        <strong>Missão:</strong> Completa as instruções usando <code>+=</code> para o incremento e o operador <code>*</code> para o cálculo do dano final.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "cpp_add",
      description: "Usar o operador += 10.",
      test: "vida += 10"
    },
    {
      id: "cpp_mul",
      description: "Multiplicar ataque por multiplicador.",
      test: "ataque * multiplicador"
    }
  ]
};
