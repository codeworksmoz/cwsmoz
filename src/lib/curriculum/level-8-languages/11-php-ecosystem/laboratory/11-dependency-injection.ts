import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p11",
  language: "php",
  title: "Projeto Master: Implementação de um Service Container",
  description: "Construa o armazém de serviços do seu motor de eventos.",
  statement: "Implemente um método 'get' que utilize Reflection para instanciar classes automaticamente via construtor.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

class Container {
    private array $services = [];

    public function get(string $class) {
        if (isset($this->services[$class])) {
            return $this->services[$class];
        }

        $reflector = new \ReflectionClass($class);
        $constructor = $reflector->getConstructor();

        if (!$constructor) {
            return new $class();
        }

        // Ação: Implemente a resolução recursiva aqui
        return $reflector->newInstance();
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚙️ O Cérebro do Sistema</h3>
      <p class="text-sm leading-relaxed">
        Nesta missão, vais construir o núcleo do seu framework. O objetivo é usar a <strong>ReflectionClass</strong> para verificar se a classe tem um construtor e instanciá-la. Em sistemas de elite, este processo seria recursivo para injetar as dependências das dependências.
      </p>
    </div>
  `,
  objectives: [
    { id: "reflect", description: "Utilizar ReflectionClass para inspecionar a classe.", test: "new \\ReflectionClass" },
    { id: "constructor", description: "Verificar a existência de um construtor.", test: "getConstructor()" },
    { id: "instance", description: "Criar a nova instância dinamicamente.", test: "newInstance()" }
  ]
};
