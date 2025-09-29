"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Target, ClipboardList, CheckCircle2, Pin, FileText } from "lucide-react"
import { useState } from "react"

interface InteractiveModelCardProps {
  title: string
  subtitle: string
  priceMain: string
  priceSub?: string
  topBadge?: string
  extraNote?: string
  footerNote?: string
  items: string[]
  highlight?: boolean
}

function InteractiveModelCard({
  title,
  subtitle,
  priceMain,
  priceSub,
  topBadge,
  extraNote,
  footerNote,
  items,
  highlight,
}: InteractiveModelCardProps) {
  const [showScope, setShowScope] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative transition-all duration-300 ${
        highlight 
          ? "border border-primary/40 shadow-lg shadow-primary/10" 
          : "border border-border hover:border-primary/30"
      } glass overflow-visible`}
    >

      {topBadge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 animate-in fade-in slide-in-from-top-2 duration-500">
          <Badge className="px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white whitespace-nowrap font-poppins font-bold">
            {topBadge}
          </Badge>
        </div>
      )}
      
      <CardHeader className={`text-center pb-3 relative ${topBadge ? 'pt-8' : 'pt-6'}`}>
        <CardTitle className="text-xl font-bold font-poppins ">
          {title}
        </CardTitle>
        <p className="text-muted-foreground text-sm font-inter mt-2">{subtitle}</p>
        <div className="mt-4 space-y-1">
          <div className={`text-3xl font-bold font-poppins text-gradient transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            {priceMain}
          </div>
          {priceSub && <div className="text-xs text-muted-foreground font-inter">{priceSub}</div>}
          {extraNote && <div className="text-xs text-muted-foreground font-inter mt-2">{extraNote}</div>}
        </div>
      </CardHeader>

      <CardContent>
        <Button 
          className={`w-full transition-all duration-300 py-2 text-sm ${
            showScope 
              ? 'bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90' 
              : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90'
          } text-white shadow-md hover:shadow-lg font-bold font-poppins`}
          onClick={() => setShowScope((v) => !v)}
        >
          {showScope ? "Ocultar escopo ▲" : "Ver escopo ▼"}
        </Button>

        {showScope && (
          <div className="mt-5 animate-in fade-in slide-in-from-top-2 duration-500">
            <ul className="space-y-3 text-sm">
              {items.map((text, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 animate-in fade-in slide-in-from-left-2 duration-300 hover:translate-x-1 transition-transform"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-inter leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {footerNote && (
          <div className="mt-4 p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground font-inter border border-border/50">
            {footerNote}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function ProposalTelemedicina() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">

          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center gap-3 ">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center ">
                <Target className="w-5 h-5 text-white" />
              </div>
              OBJETIVO DA PROPOSTA
            </h3>
            <p className="font-inter text-muted-foreground text-pretty leading-relaxed text-lg">
              Montar e/ou operar uma máquina de aquisição de leads completa para telemedicina voltada a brasileiros no exterior, com foco em escalar a geração de pacientes qualificados e maximizar o volume de consultas agendadas mensalmente.
            </p>
          </Card>

          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center gap-3 ">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center ">
                <ClipboardList className="w-5 h-5 text-white" />
              </div>
              ESCOPO DO TRABALHO
            </h3>
            <h4 className="font-semibold font-poppins mb-2 text-lg">Foco principal:</h4>
            <p className="font-inter text-muted-foreground mb-5 leading-relaxed">Construção da máquina de aquisição digital e estrutura de performance, incluindo:</p>
            <ul className="space-y-3 font-inter">
              {[
                "Estratégia de posicionamento para público internacional",
                "Copywriting para anúncios, páginas e e-mails",
                "Criação de funis de vendas e páginas de captura",
                "Automação de marketing e CRM",
                "Integração com WhatsApp, e-mail e formulários inteligentes",
                "Setup técnico completo",
                "Suporte estratégico pós-lançamento"
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="space-y-4 mt-8 text-center">
            <h3 className="text-2xl font-bold font-poppins">MODELOS PROPOSTOS</h3>
            <p className="text-muted-foreground font-inter">Escolha o modelo ideal para sua operação de telemedicina</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in mt-6">
            <InteractiveModelCard
              title="Setup Premium + Suporte"
              subtitle="Você toca. Eu entrego a máquina."
              priceMain="R$ 37.000 (único)"
              priceSub="10x de R$ 4.319,80 no cartão (até 2 cartões)"
              topBadge="Suporte incluído por 2 meses (1 call semanal)"
              footerNote="Ideal para clínicas com equipe interna que precisam de máquina pronta para escalar."
              extraNote="Acompanhamento contínuo após 60 dias opcional: R$ 2.000/mês"
              items={["Estratégia completa","Configuração de campanhas","Copywriting","Páginas e automações","CRM e estrutura técnica","Manual de operação","Transferência total da operação para a equipe interna"]}
            />
            <InteractiveModelCard
              title="Setup + Fixo + Comissão (Modelo Híbrido)"
              subtitle="Eu entro com você no jogo."
              priceMain="Setup inicial: R$ 23.000"
              priceSub="10x de R$ 2.685,30 no cartão (até 2 cartões)"
              topBadge="Recomendado"
              extraNote="Mensalidade: R$ 5.100 · Comissão: 10% por plano vendido"
              footerNote="Ideal para clínicas que precisam de parceiro estratégico com acompanhamento ativo."
              items={["Estratégia completa","Configuração de campanhas","Copywriting","Páginas e automações","CRM e estrutura técnica","Execução mensal das campanhas","Otimizações e testes recorrentes","Calls semanais de alinhamento","Relatórios mensais de performance"]}
              highlight
            />
            <InteractiveModelCard
              title="Gestão Total"
              subtitle="Eu escalo sua operação."
              priceMain="R$ 15.000/mês"
              priceSub="Sem comissão sobre vendas · Sem setup inicial"
              footerNote="Ideal para quem deseja simplicidade com tudo incluso, sem variações contratuais."
              items={["Estratégia de aquisição e execução contínua","Tráfego pago e funis otimizados","Gestão de CRM e automações","Acompanhamento semanal","Suporte estratégico direto"]}
            />
            <InteractiveModelCard
              title="IA de Atendimento e Vendas (Opcional)"
              subtitle="Automatize qualificação e agendamentos"
              priceMain="Setup: R$ 8.700"
              priceSub="Mensalidade: R$ 2.500/mês"
              footerNote="Integração com WhatsApp e CRM, reduzindo perda de oportunidades."
              items={["Configuração de IA de atendimento integrada ao WhatsApp e CRM","Qualificação automática de pacientes","Agendamento inteligente de consultas","Scripts prontos e treinados para telemedicina","Suporte técnico"]}
            />
          </div>

          

          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-5 flex items-center gap-3 ">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center ">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              DIFERENCIAIS
            </h3>
            <ul className="space-y-3 font-inter">
              {[
                "Copy de alta conversão validada para públicos internacionais",
                "Estratégia de performance para nicho de saúde",
                "Estrutura técnica e estratégica em uma única entrega",
                "Redução de CAC com otimização de ativos",
                "Foco em ROI e crescimento escalável"
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-5 flex items-center gap-3 ">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center ">
                <Pin className="w-5 h-5 text-white" />
              </div>
              CONDIÇÕES GERAIS
            </h3>
            <ul className="space-y-3 font-inter">
              {[
                "Início da operação mediante assinatura de contrato e pagamento da primeira parcela",
                "Pacientes gerados serão atribuídos via parâmetros de rastreamento (UTM, CRM ou formulário específico)",
                "Pagamentos via boleto bancário, PIX ou Cartão de crédito",
                "Proposta válida por 7 dias"
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-5 flex items-center gap-3 ">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center ">
                <FileText className="w-5 h-5 text-white" />
              </div>
              Observações Finais
            </h3>
            <ul className="space-y-3 font-inter">
              {[
                "Os valores não incluem gestão do time médico ou administrativo. A atuação é focada em marketing, estrutura e estratégia.",
                "A IA de Atendimento e Vendas é opcional e cobrada separadamente, dada sua complexidade técnica.",
                "Contratos com vigência mínima de 6 meses (exceto no modelo 1, que é pontual)."
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

        </div>
      </div>
    </section>
  )
}
