"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const impacts = [
  {
    icon: TrendingUp,
    title: "Mais Leads",
    description: "Aumente sua captação de clientes potenciais",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    title: "Mais Vendas",
    description: "Converta mais visitantes em clientes",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Menos Custos",
    description: "Otimize seus processos e reduza gastos",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Mais Eficiência",
    description: "Automatize tarefas e ganhe produtividade",
    color: "text-secondary",
  },
]

export function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("impact-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Resultados que <span className="text-gradient">Impactam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transforme seu negócio com soluções que geram resultados reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className={`p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-2 hover:border-primary/20 ${
                isVisible ? "animate-in slide-in-from-bottom-4" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <impact.icon className={`w-12 h-12 mx-auto ${impact.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{impact.title}</h3>
              <p className="text-muted-foreground text-pretty">{impact.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
