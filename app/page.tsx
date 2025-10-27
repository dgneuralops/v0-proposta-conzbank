"use client"

import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { ClientsSection } from "@/components/clients-section"
import { useEffect, useRef } from "react"
import { ProposalConzbank } from "@/components/proposal-conzbank"

export default function Home() {
  const proposalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Rola para a proposta automaticamente ao carregar a página
    if (proposalRef.current) {
      setTimeout(() => {
        proposalRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/10">
        <div className="text-center p-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            Proposta KONZ BANK
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Branding & Lançamento Digital
          </p>
          <div className="mt-12">
            <a 
              href="#proposal" 
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Ver Proposta Completa
            </a>
          </div>
        </div>
      </div>

      <div id="proposal" ref={proposalRef}>
        <ProposalConzbank />
        <ClientsSection />
        <CTASection />
      </div>
    </main>
  )
}
