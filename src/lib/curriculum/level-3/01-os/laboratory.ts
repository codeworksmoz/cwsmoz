import type { PracticeExercise } from '../../types';

const generateLab = (idNum: number, title: string, testStr: string) => ({
  id: `os-p${idNum}`,
  language: "bash",
  title: `Laboratório: ${title}`,
  description: "Exploração de sistemas operativos via terminal.",
  statement: `Execute a auditoria de ${title} no terminal.`,
  template: `# Comando para ${title}\n`,
  detailedExplanation: `<div class='space-y-4'><h3>⚙️ OS Internals</h3><p>Interação de baixo nível para o tema ${title}.</p></div>`,
  objectives: [{ id: "obj1", description: `Validar ${title}`, test: testStr }]
});

const titles = [
  "Kernel Check", "Process PID", "CPU Schedule", "Mutex Lock", 
  "Deadlock Detection", "Memory Maps", "Page Faults", "Inode Audit", 
  "DMA Config", "ACL Check", "Hypervisor Info", "Cgroups Limit", 
  "Boot Logs", "IPC Pipes", "RPC Call", "RTOS Priority", 
  "Stack Layout", "Disk SCAN", "VFS Mount", "eBPF Trace", "Unikernel Build"
];

const tests = [
  "uname", "ps", "top", "lock", 
  "wait", "pmap", "fault", "stat", 
  "dma", "chmod", "virt", "limit", 
  "dmesg", "pipe", "rpc", "realtime", 
  "stack", "disk", "mount", "trace", "uni"
];

export const practice = {
  bash: titles.map((t, i) => generateLab(i + 1, t, tests[i]))
};