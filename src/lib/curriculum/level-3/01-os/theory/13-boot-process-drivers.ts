
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t13",
  title: "Boot Process: De BIOS/UEFI ao Init do Kernel",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🚀 Acordando o Gigante</h2>
        <p class="text-lg leading-relaxed">O processo de <strong>Boot</strong> é uma transferência sucessiva de controlo desde o hardware bruto até ao espaço do utilizador (User Space). Entender esta cadeia é vital para engenheiros de sistemas e segurança.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Firmware: BIOS e UEFI</h3>
        <p class="text-sm">O primeiro código a correr é o firmware. A <strong>UEFI</strong> moderna substituiu a BIOS antiga, trazendo suporte a discos GPT e o <strong>Secure Boot</strong>, que valida a assinatura digital do Kernel antes de o carregar.</p>

        <h3 class="text-xl font-bold font-headline">2. Bootloader (GRUB/LILO)</h3>
        <p class="text-sm">O firmware localiza o bootloader no disco. O seu papel é carregar a imagem do Kernel para a RAM e passar-lhe os argumentos de arranque (ex: <code>root=/dev/sda1</code>).</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔄 O Kernel Init</h3>
          <p class="text-sm mb-4">Uma vez na RAM, o Kernel inicializa os drivers de hardware críticos e lança o <strong>PID 1</strong> (systemd ou init), que é o pai de todos os outros processos do sistema.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q13"
};
