"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Rocket } from "lucide-react"
import { useEffect, useState } from "react"

const timelineSteps = [
  {
    phase: "Fase 1",
    title: "Análise e Planejamento",
    duration: "5 dias",
    description: "Entendimento do negócio e definição da estratégia",
    icon: Clock,
  },
  {
    phase: "Fase 2",
    title: "Desenvolvimento",
    duration: "20-35 dias",
    description: "Criação das soluções personalizadas",
    icon: Rocket,
  },
  {
    phase: "Fase 3",
    title: "Testes e Ajustes",
    duration: "5-10 dias",
    description: "Validação e otimização das soluções",
    icon: CheckCircle,
  },
  {
    phase: "Fase 4",
    title: "Entrega e Treinamento",
    duration: "3-5 dias",
    description: "Deploy final e capacitação da equipe",
    icon: CheckCircle,
  },
]

export function TimelineSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setVisibleSteps((prev) => [...prev, stepIndex])
          }
        })
      },
      { threshold: 0.5 },
    )

    const elements = document.querySelectorAll("[data-step]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-balance">
            Timeline de <span className="text-gradient">Implementação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-inter">
            Processo estruturado para garantir o sucesso do seu projeto
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full z-0 hidden md:block"
            style={{
              height: `${(timelineSteps.length - 1) * 180 + 60}px`,
              top: "60px",
            }}
          />

          <div
            className="absolute left-6 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full z-0 md:hidden"
            style={{
              height: `${timelineSteps.length * 120 - 40}px`,
              top: "60px",
            }}
          />

          <div
            className="space-y-8 md:space-y-12 relative z-10"
            style={{ minHeight: `${timelineSteps.length * 180}px` }}
          >
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row flex-row" : "md:flex-row-reverse flex-row"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      visibleSteps.includes(index)
                        ? "bg-gradient-to-br from-primary to-secondary scale-110"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <Card
                  className={`w-full md:w-5/12 ml-16 md:ml-0 p-4 md:p-6 transition-all duration-700 transform relative z-10 ${
                    visibleSteps.includes(index)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  } ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary font-poppins">{step.phase}</span>
                      <span className="text-sm text-muted-foreground font-inter">{step.duration}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold font-poppins text-balance leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground text-pretty font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-20 text-center relative z-20">
            <Card className="inline-block p-6 md:p-8 lg:p-10 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 min-w-[280px] md:min-w-[350px]">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-3">Tempo Total</h3>
              <p className="text-3xl md:text-4xl font-bold text-gradient font-poppins mb-2">15 a 45 dias</p>
              <p className="text-base md:text-lg text-muted-foreground font-inter">
                Dependendo das soluções escolhidas
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
