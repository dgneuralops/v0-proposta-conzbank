"use client"

import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { ClientsSection } from "@/components/clients-section"
import { useState } from "react"
import { ProposalSection } from "@/components/proposal-section"
import { ProposalTelemedicina } from "@/components/proposal-telemedicina"
import { ProposalCombo } from "@/components/proposal-combo"
import { ProposalSelector } from "@/components/proposal-selector"

type ProposalType = 'consorcio' | 'telemedicina' | 'combo' | null

export default function Home() {
  const [showSelector, setShowSelector] = useState(false)
  const [selectedProposal, setSelectedProposal] = useState<ProposalType>(null)

  const handleShowProposal = () => {
    setShowSelector(true)
  }

  const handleSelectProposal = (type: ProposalType) => {
    setSelectedProposal(type)
    // Scroll suave para a proposta
    setTimeout(() => {
      const proposalElement = document.getElementById('proposal-content')
      if (proposalElement) {
        proposalElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <main className="min-h-screen pt-20">
      <HeroSection onShowProposal={handleShowProposal} />

      {showSelector && (
        <div className="animate-in slide-in-from-bottom-4 duration-700">
          <ProposalSelector onSelectProposal={handleSelectProposal} />
        </div>
      )}

      {selectedProposal && (
        <div id="proposal-content" className="animate-in slide-in-from-bottom-4 duration-700">
          {selectedProposal === 'consorcio' && <ProposalSection />}
          {selectedProposal === 'telemedicina' && <ProposalTelemedicina />}
          {selectedProposal === 'combo' && <ProposalCombo />}
          <ClientsSection />
          <CTASection />
        </div>
      )}
    </main>
  )
}
