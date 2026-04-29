import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-p21",
  language: "php",
  title: "Projeto Master Final: Auditoria e Lançamento",
  description: "Conclua a construção do High-Scale Event Server com padrões industriais.",
  statement: "Finalize o motor definindo o status de produção e a política de resiliência final.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

/**
 * HIGH-SCALE EVENT SERVER - FINAL AUDIT
 * Versão: 1.0.0-MASTER
 */
readonly class EventEngine {
    public const STATUS = "PRODUCTION_READY";
    
    public function audit(): void {
        // Ação 1: Garanta que o motor reporte o status correto
        echo "Engine Status: " . self::STATUS;
        
        // Ação 2: Valide a integridade final do sistema
        error_log("[AUDIT] JIT: ACTIVE | ARCH: HEXAGONAL | STATUS: 200 OK");
    }
}

// Inicie o motor final
(new EventEngine())->audit();`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary text-center">🏆 Missão Cumprida: O Selo de Elite</h3>
      <p class="text-sm leading-relaxed">
        Chegaste ao laboratório final. O teu servidor de eventos possui agora:
      </p>
      <ul class="grid grid-cols-2 gap-2 text-[10px] uppercase font-black">
        <li class="p-2 bg-green-500/10 border border-green-500/20 rounded">Discovery via Attributes</li>
        <li class="p-2 bg-blue-500/10 border border-blue-500/20 rounded">Hexagonal Design</li>
        <li class="p-2 bg-purple-500/10 border border-purple-500/20 rounded">Async Fibers</li>
        <li class="p-2 bg-orange-500/10 border border-orange-500/20 rounded">JIT Optimized</li>
      </ul>
      <p class="text-xs italic text-muted-foreground mt-4">
        <strong>Ação Final:</strong> Verifique o status constante e confirme a mensagem de log de auditoria para receber o certificado.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "status_check",
      description: "Mantenha o status 'PRODUCTION_READY'.",
      test: "PRODUCTION_READY"
    },
    {
      id: "audit_log",
      description: "Confirme o log de auditoria com status 200 OK.",
      test: "200 OK"
    }
  ]
};
