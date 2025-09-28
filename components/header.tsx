"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Proposta desenvolvida por:</div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20neuralops-CfhlXbeO8nmhyJzGTE4RDiGvtt8L1G.png"
            alt="Neural Ops"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </div>
    </header>
  )
}
