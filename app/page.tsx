"use client"

import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { SolutionsSection } from "@/components/solutions-section"
import { InvestmentSection } from "@/components/investment-section"
import { TimelineSection } from "@/components/timeline-section"
import { CredibilitySection } from "@/components/credibility-section"
import { CTASection } from "@/components/cta-section"
import { useState } from "react"

export default function Home() {
  const [showFullProposal, setShowFullProposal] = useState(false)

  return (
    <main className="min-h-screen pt-20">
      <HeroSection onShowProposal={() => setShowFullProposal(true)} />

      {showFullProposal && (
        <div className="animate-in slide-in-from-bottom-4 duration-700">
          <ImpactSection />
          <SolutionsSection />
          <InvestmentSection />
          <TimelineSection />
          <CredibilitySection />
          <CTASection />
        </div>
      )}
    </main>
  )
}
