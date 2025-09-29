"use client"

import { Button } from "@/components/ui/button"
import { Zap, Globe, Cpu, Rocket, Sparkles, TrendingUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface HeroSectionProps {
  onShowProposal: () => void
}

export function HeroSection({ onShowProposal }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Enhanced floating icons with parallax */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-20 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl p-3 animate-float shadow-2xl"
            style={{ 
              animationDelay: "0s",
              transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
            }}
          >
            <Zap className="w-full h-full text-white drop-shadow-lg" />
          </div>
          <div
            className="absolute top-40 right-32 w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-2xl p-2 animate-float shadow-2xl"
            style={{ 
              animationDelay: "2s",
              transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
            }}
          >
            <Globe className="w-full h-full text-white drop-shadow-lg" />
          </div>
          <div
            className="absolute bottom-40 left-32 w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-2xl p-2.5 animate-float shadow-2xl"
            style={{ 
              animationDelay: "4s",
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
            }}
          >
            <Cpu className="w-full h-full text-white drop-shadow-lg" />
          </div>
          <div
            className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-2xl p-3 animate-float shadow-2xl"
            style={{ 
              animationDelay: "1s",
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
            }}
          >
            <Rocket className="w-full h-full text-white drop-shadow-lg" />
          </div>
          <div
            className="absolute top-1/3 left-1/4 w-9 h-9 bg-gradient-to-br from-accent to-primary rounded-2xl p-2 animate-float shadow-2xl"
            style={{ 
              animationDelay: "3s",
              transform: `translate(${mousePosition.x * -35}px, ${mousePosition.y * 30}px)`
            }}
          >
            <Sparkles className="w-full h-full text-white drop-shadow-lg" />
          </div>
          <div
            className="absolute top-2/3 right-1/4 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl p-2.5 animate-float shadow-2xl"
            style={{ 
              animationDelay: "5s",
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * -25}px)`
            }}
          >
            <TrendingUp className="w-full h-full text-white drop-shadow-lg" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-balance mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Proposta – Estrutura de <span className="text-gradient">maquinas</span> de <span className="text-gradient">vendas</span> e <span className="text-gradient">performance</span>
          </h2>

          <div className="space-y-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed font-inter">
              <span className="font-semibold text-foreground">Proposto por:</span> Neural.Ops · <span className="font-semibold text-foreground">Data:</span> 28/09/2025
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 flex justify-center">
            <Button
              onClick={onShowProposal}
              className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 text-base font-bold font-poppins rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 transform md:hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Proposta Completa
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
