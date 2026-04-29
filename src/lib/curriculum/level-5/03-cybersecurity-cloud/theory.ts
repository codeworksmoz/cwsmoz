
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => ({
  id: `sec-t${i + 1}`,
  title: [
    "Fundamentos de Segurança & Criptografia", "IAM: Gestão de Identidade e Acessos",
    "Segurança de Rede & Zero Trust", "Application Security & OWASP Top 10",
    "Cloud Foundations (AWS, GCP, Azure)", "Contentores & Orquestração (K8s)",
    "Arquiteturas Serverless", "Infraestrutura como Código (Terraform)",
    "DevSecOps & CI/CD Seguro", "Resposta a Incidentes & Forense",
    "Pentesting Basics", "Cloud Networking: VPC & Peering",
    "Data Privacy & GDPR Compliance", "SIEM & Monitorização de Segurança",
    "Gestão de Vulnerabilidades", "Segurança em Microserviços",
    "Cloud Storage & Database Security", "API Security Deep Dive",
    "Social Engineering & Human Factors", "Disaster Recovery & BCP",
    "O Futuro da Cibersegurança"
  ][i],
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛡️ Cloud & Security</h2><p>Protegendo e escalando infraestruturas críticas na nuvem.</p></div>`,
  quizId: `sec-q${i + 1}`
}));
