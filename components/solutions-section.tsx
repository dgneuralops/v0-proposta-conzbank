"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Bot, BarChart3, Instagram, Link, FileText } from "lucide-react"
import { useState } from "react"

const solutions = [
  {
    icon: Globe,
    title: "Site Corporativo Robusto",
    price: "R$ 6.100,00",
    deadline: "40 dias",
    payment: "Entrada R$ 2.500 + 5x R$ 720",
    benefit: "Sua vitrine digital que converte visitantes em clientes",
    description:
      "Site institucional robusto, responsivo, otimizado para SEO e preparado para conversão de leads. Mais que presença online, será o canal primário de captação de leads.",
    details: [
      "Design responsivo e moderno",
      "Otimização para SEO",
      "Preparado para conversão",
      "Reforça credibilidade da marca",
      "Posiciona como autoridade em energia",
    ],
  },
  {
    icon: Bot,
    title: "Agente de Atendimento Personalizado",
    price: "R$ 7.500 + R$ 2.500/mês",
    deadline: "40 dias",
    payment: "Setup único + recorrente",
    benefit: "Atendimento 24/7 que nunca perde um lead",
    description:
      "Agente virtual treinado para atender leads, tirar dúvidas sobre o produto/serviço, simular orçamentos básicos e encaminhar ao time comercial.",
    details: [
      "IA treinada para seu negócio",
      "Atendimento rápido 24/7",
      "Reduz tempo de resposta",
      "Aumenta taxa de conversão",
      "Filtra leads qualificados",
    ],
  },
  {
    icon: BarChart3,
    title: "CRM para até 40 usuários",
    price: "R$ 4.000 + R$ 1.920/mês",
    deadline: "45 dias",
    payment: "Estruturação + R$ 80/usuário/mês",
    benefit: "Controle total sobre vendas e clientes",
    description:
      "Implementação de CRM completo, customizado para funil de vendas, com integrações de e-mail, WhatsApp e automações básicas.",
    details: [
      "CRM completo customizado",
      "Integrações e-mail e WhatsApp",
      "Automações básicas",
      "Controle sobre leads e negociações",
      "Previsibilidade de receita",
    ],
    discount: "40% desconto",
  },
  {
    icon: Instagram,
    title: "Instagram e Conteúdo",
    price: "R$ 5.800 ou + R$ 3.500/mês",
    deadline: "30 dias",
    payment: "Setup + posts ou gestão mensal",
    benefit: "Presença digital que gera confiança",
    description:
      "Criação de perfil, identidade visual, 30 posts estratégicos. Opção de gestão mensal com 16 posts, resposta a comentários e relatórios.",
    details: [
      "Criação completa do perfil",
      "30 posts iniciais estratégicos",
      "Identidade visual personalizada",
      "Gestão mensal opcional",
      "Relatórios de desempenho",
    ],
  },
  {
    icon: Link,
    title: "Tracking de Links para Influencers",
    price: "R$ 4.000 + R$ 1.000/mês",
    deadline: "15 dias",
    payment: "Setup + gestão mensal",
    benefit: "Saiba exatamente onde investir seu dinheiro",
    description:
      "Criação de links rastreáveis para influenciadores, relatórios mensais de desempenho. Saber de onde vem cada lead é vital.",
    details: [
      "Links rastreáveis personalizados",
      "Relatórios mensais detalhados",
      "ROI por influenciador",
      "Evita gastos sem retorno",
      "Decisões baseadas em dados",
    ],
  },
  {
    icon: FileText,
    title: "Automação de Contratos",
    price: "R$ 3.100",
    deadline: "20 dias",
    payment: "Valor único",
    benefit: "Feche negócios mais rápido",
    description:
      "Implementação de solução digital de assinatura eletrônica integrada ao CRM. Reduz burocracia e acelera fechamento.",
    details: [
      "Assinatura eletrônica digital",
      "Integração com CRM",
      "Reduz burocracia",
      "Acelera fechamento",
      "Mais confiança para clientes",
    ],
  },
]

export function SolutionsSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-balance">
            Nossas <span className="text-gradient">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-inter">
            Cada solução foi pensada para maximizar seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 hover:border-primary/20 cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-3 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 font-poppins">{solution.title}</CardTitle>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary font-poppins">
                    {solution.price}
                    {solution.discount && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {solution.discount}
                      </Badge>
                    )}
                  </div>
                  <Badge variant="outline">{solution.deadline}</Badge>
                  <div className="text-sm text-muted-foreground font-inter">{solution.payment}</div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-center text-muted-foreground mb-4 text-pretty font-medium font-inter">
                  {solution.benefit}
                </p>

                {expandedCard === index && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg animate-in slide-in-from-top-2">
                    <p className="text-sm mb-4 text-muted-foreground font-inter">{solution.description}</p>
                    <h4 className="font-semibold mb-3 font-poppins">Benefícios:</h4>
                    <ul className="space-y-2">
                      {solution.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm font-inter">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full mt-4 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 border-primary/20 font-inter"
                >
                  {expandedCard === index ? "Ver Menos" : "Ver Detalhes"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
