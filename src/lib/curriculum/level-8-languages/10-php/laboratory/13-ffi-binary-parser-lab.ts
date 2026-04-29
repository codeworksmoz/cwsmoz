import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-p14",
  language: "php",
  title: "Projeto Master: Parsing Binário com FFI",
  description: "Utilize a interface nativa para processar pacotes de rede com performance de C.",
  statement: "Utilize FFI::cdef() para definir uma struct 'Packet' e aloque-a na memória.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

use FFI;

class BinaryEngine {
    public function createPacket(): void {
        // Ação 1: Utilize cdef para definir a struct { int id; float value; }
        $ffi = FFI::cdef("
            struct Packet {
                int id;
                float value;
            };
        ");

        // Ação 2: Aloque uma nova instância da struct na memória
        $packet = $ffi->new("struct Packet");
        
        $packet->id = 101;
        $packet->value = 99.5;
        
        echo "Packet allocated. Size: " . FFI::sizeof($packet);
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚙️ Otimização de Baixo Nível</h3>
      <p class="text-sm">O seu servidor de eventos precisa processar telemetria binária. Em vez de usar <code>unpack()</code> (lento), utilize o <strong>FFI</strong> para mapear os bytes diretamente para uma <strong>struct C</strong>. Isto é o que há de mais rápido na engenharia de software para processamento de pacotes.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold text-yellow-500">Instruções Técnicas:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Definição:</strong> Use <code>FFI::cdef()</code> passando a string da struct entre aspas.</li>
          <li><strong>Alocação:</strong> Use <code>$ffi->new("struct Packet")</code> para reservar memória no Heap.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    { id: "ffi_cdef", description: "Utilizar FFI::cdef() para a definição.", test: "FFI::cdef(" },
    { id: "ffi_new", description: "Utilizar $ffi->new() para alocação.", test: "->new(\"struct" },
    { id: "ffi_size", description: "Verificar o tamanho com FFI::sizeof().", test: "FFI::sizeof(" }
  ]
};
