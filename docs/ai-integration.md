# 🤖 Integração de Inteligência Artificial

A plataforma utiliza o **Firebase Genkit** para orquestrar funcionalidades generativas de elite.

## 1. Tecnologias
- **Engine:** Firebase Genkit v1.x.
- **Modelo:** Google AI (Gemini 2.5 Flash).
- **Arquitetura:** Flows baseados em `ai.defineFlow` e `ai.definePrompt`.

## 2. Funcionalidades AI
- **Diagnóstico de Código:** Analisa os erros do aluno no laboratório e fornece dicas socráticas sem dar a resposta pronta.
- **Explicação de Teoria:** Conversão de conceitos complexos em explicações simplificadas para iniciantes.

## 3. Segurança e Custos
- **Sanitização:** Todos os prompts passam por filtros de segurança para evitar injeção de prompt.
- **Performance:** Uso do modelo *Flash* para garantir respostas em menos de 2 segundos.
