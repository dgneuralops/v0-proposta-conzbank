"use client"

import { Card } from "@/components/ui/card"
import { Building2, Stethoscope, Sparkles } from "lucide-react"

interface ProposalSelectorProps {
  onSelectProposal: (type: 'consorcio' | 'telemedicina' | 'combo') => void
}

export function ProposalSelector({ onSelectProposal }: ProposalSelectorProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-balance">
              Escolha a <span className="text-gradient">Proposta</span> que Deseja Visualizar
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Estruturas completas de máquinas de vendas para seus negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Consórcio */}
            <Card 
              onClick={() => onSelectProposal('consorcio')}
              className="group relative p-6 md:p-8 cursor-pointer transition-all duration-300 md:hover:scale-105 border-2 hover:border-primary/50 glass overflow-visible mt-6 md:mt-0"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white shadow-lg rounded-full text-sm font-bold font-poppins whitespace-nowrap">
                  Proposta 1
                </div>
              </div>
              
              <div className="text-center pt-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold font-poppins mb-3 group-hover:text-gradient transition-all duration-300">
                  Consórcio Internacional
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Estrutura completa de aquisição de leads para consórcio voltado a brasileiros no exterior
                </p>
              </div>
            </Card>

            {/* Telemedicina */}
            <Card 
              onClick={() => onSelectProposal('telemedicina')}
              className="group relative p-6 md:p-8 cursor-pointer transition-all duration-300 md:hover:scale-105 border-2 hover:border-primary/50 glass overflow-visible mt-6 md:mt-0"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="px-4 py-1 bg-gradient-to-r from-secondary to-primary text-white shadow-lg rounded-full text-sm font-bold font-poppins whitespace-nowrap">
                  Proposta 2
                </div>
              </div>
              
              <div className="text-center pt-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold font-poppins mb-3 group-hover:text-gradient transition-all duration-300">
                  Telemedicina Internacional
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Máquina de vendas para telemedicina focada em brasileiros residentes no exterior
                </p>
              </div>
            </Card>

            {/* Combo */}
            <Card 
              onClick={() => onSelectProposal('combo')}
              className="group relative p-6 md:p-6 cursor-pointer transition-all duration-300 hover:border-primary/50 border-2 border-border/50 glass overflow-visible"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white shadow-lg rounded-full text-xs font-bold font-poppins whitespace-nowrap">
                  Pacote Especial
                </div>
              </div>
              
              <div className="text-center pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-gradient transition-colors duration-300">
                  Pacote Combinado
                </h3>
                
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  Estratégias de consórcio e telemedicina com desconto
                </p>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
