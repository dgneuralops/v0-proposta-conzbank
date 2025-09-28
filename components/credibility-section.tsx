"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Shield, Users } from "lucide-react"
import { CompaniesSlider } from "./companies-slider"

const testimonials = [
  {
    name: "Maria Silva",
    company: "Drink-Id",
    text: "Com a Neuralops eles transformaram nossa presença digital. Aumentamos nossos leads em 300% nos primeiros 3 meses.",
    rating: 5,
  },
  {
    name: "João Santos",
    company: "Isomos Saúde",
    text: "O CRM personalizado revolucionou nossa gestão de vendas. Nunca mais perdemos um cliente potencial.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    company: "Sagga Educ",
    text: "O chatbot IA atende nossos clientes 24/7. Nossa taxa de conversão dobrou desde a implementação.",
    rating: 5,
  },
]

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Empresas Atendidas",
  },
  {
    icon: Award,
    number: "98%",
    label: "Taxa de Satisfação",
  },
  {
    icon: Shield,
    number: "+8 anos",
    label: "transformando empresas",
  },
]

export function CredibilitySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 text-balance">
            Empresas que <span className="text-gradient">Confiam</span> em Nós
          </h2>
          <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto text-pretty">
            Resultados comprovados e clientes satisfeitos
          </p>
        </div>

        <CompaniesSlider />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <stat.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                <div className="text-4xl font-poppins font-bold text-gradient mb-2">{stat.number}</div>
                <p className="font-inter text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="font-inter text-muted-foreground mb-4 text-pretty italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-poppins font-semibold">{testimonial.name}</p>
                  <p className="text-sm font-inter text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
