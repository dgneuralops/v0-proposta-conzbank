"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Users, Award, Shield } from "lucide-react"

export function ClientsSection() {
  const companies = [
    "/images/companies/company-1.png",
    "/images/companies/company-2.png",
    "/images/companies/company-3.png",
    "/images/companies/company-4.png",
    "/images/companies/company-5.png",
    "/images/companies/company-6.png",
    "/images/companies/company-7.png",
    "/images/companies/company-8.png",
    "/images/companies/company-9.png",
    "/images/companies/company-10.png",
    "/images/companies/company-11.png",
    "/images/companies/company-12.png",
    "/images/companies/company-13.png",
    "/images/companies/company-14.png",
    "/images/companies/company-15.png",
    "/images/companies/company-16.png",
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Empresas que <span className="text-gradient">Confiam</span> em Nós
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Resultados comprovados e clientes satisfeitos
            </p>
          </div>

          {/* Logo Slider */}
          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                {companies.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-32 md:w-40 h-20 md:h-24 mx-4 md:mx-6 flex items-center justify-center"
                  >
                    <Image
                      src={company}
                      alt={`Cliente ${index + 1}`}
                      width={160}
                      height={80}
                      className="object-contain max-h-16 brightness-0 opacity-60"
                      style={{ filter: 'grayscale(100%) brightness(0.3)' }}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companies.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-32 md:w-40 h-20 md:h-24 mx-4 md:mx-6 flex items-center justify-center"
                  >
                    <Image
                      src={company}
                      alt={`Cliente ${index + 1}`}
                      width={160}
                      height={80}
                      className="object-contain max-h-16 brightness-0 opacity-60"
                      style={{ filter: 'grayscale(100%) brightness(0.3)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 text-center glass border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold font-poppins text-gradient mb-3">+180</div>
              <p className="text-base text-muted-foreground font-inter">Empresas Atendidas</p>
            </Card>

            <Card className="p-8 text-center glass border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold font-poppins text-gradient mb-3">98%</div>
              <p className="text-base text-muted-foreground font-inter">Taxa de Satisfação</p>
            </Card>

            <Card className="p-8 text-center glass border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold font-poppins text-gradient mb-3">+8 anos</div>
              <p className="text-base text-muted-foreground font-inter">Transformando empresas</p>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 glass border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground font-inter italic mb-4 leading-relaxed">
                "Com a NeuralOps eles transformaram nossa presença digital. Aumentamos nossos leads em 300% nos primeiros 3 meses."
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold font-poppins text-foreground">Maria Silva</p>
                <p className="text-sm text-muted-foreground font-inter">Drink-Id</p>
              </div>
            </Card>

            <Card className="p-6 glass border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground font-inter italic mb-4 leading-relaxed">
                "O CRM personalizado revolucionou nossa gestão de vendas. Nunca mais perdemos um cliente potencial."
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold font-poppins text-foreground">João Santos</p>
                <p className="text-sm text-muted-foreground font-inter">Isomos Saúde</p>
              </div>
            </Card>

            <Card className="p-6 glass border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground font-inter italic mb-4 leading-relaxed">
                "O chatbot IA atende nossos clientes 24/7. Nossa taxa de conversão dobrou desde a implementação."
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold font-poppins text-foreground">Ana Costa</p>
                <p className="text-sm text-muted-foreground font-inter">Sanga Educ</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
