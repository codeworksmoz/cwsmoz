import { lesson as l1 } from './theory/01-osi-model-internals';
import { lesson as l2 } from './theory/02-physical-layer-signals';
import { lesson as l3 } from './theory/03-data-link-ethernet';
import { lesson as l4 } from './theory/04-ipv4-routing-cidr';
import { lesson as l5 } from './theory/05-ipv6-deep-dive';
import { lesson as l6 } from './theory/06-tcp-internals';
import { lesson as l7 } from './theory/07-udp-performance';
import { lesson as l8 } from './theory/08-routing-bgp-ospf';
import { lesson as l9 } from './theory/09-sdn-virtualization';
import { lesson as l10 } from './theory/10-http-semantics';
import { lesson as l11 } from './theory/11-quic-http3';
import { lesson as l12 } from './theory/12-dns-internals';

const advancedTitles = [
  "DHCP, ARP e a Gestão de Identidade Local",
  "TLS 1.3: Criptografia de Alta Performance na Rede",
  "Load Balancing: Algoritmos e Camada 4 vs Camada 7",
  "CDN & Edge Computing: Geometria de Dados Global",
  "NAT & Hole Punching: Atravessando a Internet",
  "Wireless Mastery: WiFi 6E, WPA3 e Beamforming",
  "VPN & Tunneling: IPsec, WireGuard e SD-WAN",
  "Observabilidade de Rede: SNMP, eBPF e Netflow",
  "O Futuro: Redes Quânticas e Satélites de Baixa Órbita"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12,
  ...advancedTitles.map((title, i) => ({
    id: `net-t${i + 13}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌐 Networking Master: ${title}</h2><p>Estudo aprofundado dos protocolos de infraestrutura de rede, focado em performance, segurança e escala global.</p></div>`,
    quizId: `net-mq${i + 13}`
  }))
];
