import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p19",
  language: "go",
  title: "Projeto Master: Comunicação por Sockets TCP",
  description: "Abra a porta para receber tarefas da rede.",
  statement: "Utilize o pacote 'net' para iniciar um Listener TCP na porta 9000.",
  isProjectPart: true,
  template: `package main

import "net"

func ListenForTasks() {
    // Inicie o listener aqui
    ln, _ := net.Listen("tcp", ":9000")
    for {
        conn, _ := ln.Accept()
        go handleConnection(conn)
    }
}

func handleConnection(c net.Conn) {}`,
  detailedExplanation: `
    <h3>📡 Networking de Baixo Nível</h3>
    <p>O Go foi feito para a rede. O modelo de <code>Listen</code> e <code>Accept</code> combinado com Goroutines é o que torna o Go tão eficiente para construir servidores como o Docker ou o Kubernetes.</p>
  `,
  objectives: [
    {
      id: "net_listen",
      description: "Utilize net.Listen(\"tcp\", \":9000\").",
      test: "net.Listen"
    }
  ]
};
