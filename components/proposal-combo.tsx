"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Target, Sparkles, CheckCircle2, Pin, FileText, Gift } from "lucide-react"
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

export function ProposalCombo() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">

          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            <h3 className="text-3xl font-bold font-poppins mb-4 flex items-center gap-3 text-gradient">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center ">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              PACOTE COMBINADO - CONSÓRCIO + TELEMEDICINA
            </h3>
            <p className="font-inter text-muted-foreground text-pretty leading-relaxed text-lg">
              Montar e/ou operar duas máquinas de aquisição de leads independentes, focadas nos negócios de <strong>Consórcio</strong> e <strong>Telemedicina</strong> para Brasileiros no Exterior. O foco é aumentar o volume de leads qualificados, acelerar vendas e escalar o faturamento das duas operações de forma previsível e mensurável.
            </p>
          </Card>

          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center gap-3 ">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center ">
                <Target className="w-5 h-5 text-white" />
              </div>
              RESULTADOS ESPERADOS
            </h3>
            <ul className="space-y-3 font-inter">
              {[
                "Atrair e converter brasileiros residentes no exterior em potenciais compradores de consórcio e pacientes de telemedicina",
                "Reduzir o CAC das duas operações com estrutura de aquisição inteligente",
                "Automatizar atendimento, pré-qualificação e follow-up com leads",
                "Escalar os dois negócios com base em dados, copy de alta conversão e tráfego pago"
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
            <h3 className="text-2xl font-bold font-poppins">MODELOS PROPOSTOS (COMBINADOS)</h3>
            <p className="text-muted-foreground font-inter">Valores especiais para as duas operações juntas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in mt-6">
            <InteractiveModelCard
              title="Setup Premium (Você toca. Eu entrego a máquina x2)"
              subtitle="Duas máquinas prontas, cada uma com seu funil"
              priceMain="R$ 62.000 (único)"
              priceSub="Valor com desconto combo (R$ 74k → R$ 62k)"
              topBadge="Economia de R$ 12.000"
              footerNote="Suporte incluído por 3 meses com 1 call semanal por empresa"
              extraNote="Acompanhamento contínuo opcional: R$ 3.500/mês (as duas empresas)"
              items={["Funil completo para consórcio","Funil completo para telemedicina","Estratégia, campanhas, automações, CRM, copy, páginas e integração","Documentação e vídeos para time interno","Suporte estratégico por 60 dias"]}
            />
            <InteractiveModelCard
              title="Setup + Fixo + Comissão (Modelo Híbrido)"
              subtitle="Eu entro com você nas duas operações"
              priceMain="Setup: R$ 35.000"
              priceSub="Combo: R$ 46k → R$ 35k"
              topBadge="Recomendado"
              extraNote="Mensalidade: R$ 11.000/mês · Comissão: 0,3% (consórcio) + 10% (telemedicina)"
              footerNote="Crescemos juntos nas duas operações."
              items={["Execução contínua de campanhas","Otimização semanal","Reuniões de performance por empresa","Tudo incluso das etapas anteriores","Relatórios mensais de performance"]}
              highlight
            />
            <InteractiveModelCard
              title="Gestão Total Mensal (Modelo Premium Fixo)"
              subtitle="Opero sua máquina como se fosse meu negócio"
              priceMain="R$ 20.000/mês fixo"
              priceSub="Sem setup · Sem comissão"
              footerNote="Gestão total de aquisição para as duas empresas."
              items={["Tráfego pago, funis, automações, copy, CRM e relatórios","Calls semanais de performance","Modelo 100% sob demanda, sem variável"]}
            />
            <InteractiveModelCard
              title="IA de Atendimento e Vendas (Adicional Opcional)"
              subtitle="Para as duas operações"
              priceMain="Setup: R$ 12.000"
              priceSub="Mensalidade: R$ 4.700/mês"
              footerNote="Combo IA para consórcio + telemedicina com personalização por funil."
              items={["Qualificação automática dos leads via WhatsApp","Scripts personalizados para cada operação","Agendamento, follow-up e atendimento automatizado","Integração com CRM, WhatsApp"]}
            />
          </div>

          <Card className="p-8 md:p-10 glass border border-primary/40 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            <h3 className="text-3xl font-bold font-poppins mb-6 flex items-center gap-3 text-gradient">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl animate-pulse-slow">
                <Gift className="w-6 h-6 text-white" />
              </div>
              BÔNUS EXCLUSIVOS DO PACOTE COMBINADO
            </h3>
            <ul className="space-y-4 font-inter">
              {[
                "✔️ Desconto de 10% no setup total",
                "✔️ Valor reduzido no fixo mensal combinado (em vez de 2x fixos separados)",
                "✔️ Consultoria estratégica incluída",
                "✔️ Suporte para equipe interna operar com autonomia se necessário",
                "✔️ Redução de CAC com otimização conjunta dos ativos e testes em paralelo",
                "✔️ Você evita contratar duas agências ou profissionais distintos"
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300 text-lg"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="leading-relaxed font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

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
                "Estratégia de performance para dois nichos distintos com inteligência comercial",
                "Estrutura técnica e estratégica em uma única entrega",
                "Redução de CAC com otimização conjunta dos ativos e testes em paralelo",
                "Você evita contratar duas agências ou profissionais distintos e centraliza com quem entende da jornada como um todo"
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
                "Início mediante assinatura de contrato + pagamento do setup (ou primeira mensalidade)",
                "Leads são atribuídos via UTM e CRM para controle de performance",
                "Pagamentos via boleto, PIX ou transferência bancária",
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
            <p className="font-inter text-muted-foreground leading-relaxed mb-4">
              A vantagem de contratar as duas operações comigo é que você ganha <strong>sinergia, eficiência, economia de tempo e custo</strong>, e o melhor: alguém que enxerga o seu negócio de ponta a ponta, como um <strong>sócio estratégico</strong> — não como um prestador.
            </p>
            <ul className="space-y-3 font-inter">
              {[
                "Os valores não incluem gestão do time comercial ou médico. A atuação é focada em marketing, estrutura e estratégia.",
                "A IA de Atendimento e Vendas é opcional e cobrada separadamente.",
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
