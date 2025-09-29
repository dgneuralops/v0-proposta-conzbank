"use client"

import { Card } from "@/components/ui/card"
import { Calendar, CheckCircle2, Rocket, Settings } from "lucide-react"

export function ImplementationTimeline() {
  const phases = [
    {
      icon: Settings,
      title: "Fase 1: Setup Inicial",
      duration: "Dias 1-10",
      description: "Configuração de CRM, páginas, automações e estrutura técnica",
    },
    {
      icon: Rocket,
      title: "Fase 2: Testes e Ajustes",
      duration: "Dias 11-20",
      description: "Testes de campanhas, otimização de copy e ajustes finais",
    },
    {
      icon: CheckCircle2,
      title: "Fase 3: Go Live",
      duration: "Dias 21-30",
      description: "Lançamento oficial, monitoramento e primeiras otimizações",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Timeline de <span className="text-gradient">Implementação</span>
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Prazo de 30 dias para estruturação completa da máquina de vendas
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block" />

            <div className="space-y-8">
              {phases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <Card
                    key={index}
                    className="p-6 glass border border-border hover:border-primary/30 transition-colors duration-300 relative"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 relative z-10">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold font-poppins">{phase.title}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold font-poppins rounded-full">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-inter leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Important Notice */}
          <Card className="mt-12 p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-poppins mb-3 flex items-center gap-2">
                  <span className="text-primary">⚠️</span> Importante sobre a Mensalidade
                </h4>
                <p className="text-foreground font-inter leading-relaxed mb-3">
                  O valor recorrente só será iniciado <strong className="text-primary">60 dias após a assinatura do contrato</strong>, garantindo que todo o setup e estrutura estejam completamente desenvolvidos e implementados.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-inter">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Período de implementação sem cobrança mensal</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
