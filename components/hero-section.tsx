"use client"

import { Button } from "@/components/ui/button"
import { Zap, Globe, Cpu, Rocket } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface HeroSectionProps {
  onShowProposal: () => void
}

export function HeroSection({ onShowProposal }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Floating icons with gradients */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full p-2 animate-float"
            style={{ animationDelay: "0s" }}
          >
            <Zap className="w-full h-full text-white" />
          </div>
          <div
            className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-br from-secondary to-primary rounded-full p-1 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <Globe className="w-full h-full text-white" />
          </div>
          <div
            className="absolute bottom-40 left-32 w-7 h-7 bg-gradient-to-br from-primary to-secondary rounded-full p-1.5 animate-float"
            style={{ animationDelay: "4s" }}
          >
            <Cpu className="w-full h-full text-white" />
          </div>
          <div
            className="absolute bottom-20 right-20 w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full p-2 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <Rocket className="w-full h-full text-white" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20siconect-MlwCmSqafQhkUkcRob5Mqgq3NEFPU5.png"
              alt="Siconect"
              width={300}
              height={100}
              className="h-16 w-auto mx-auto mb-4"
            />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-balance mb-6 leading-tight">
            Soluções Digitais que <span className="text-gradient">Transformam</span> Seu Negócio
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed font-inter">
            Tecnologia estratégica para empresas que querem crescer
          </p>

          <Button
            onClick={onShowProposal}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Ver Proposta Completa
          </Button>
        </div>
      </div>
    </section>
  )
}
