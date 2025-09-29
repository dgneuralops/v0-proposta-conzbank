"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground font-inter">Proposta desenvolvida por:</div>
          <Image
            src="/images/logo neuralops.png"
            alt="NeuralOps"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </div>
      </div>
    </header>
  )
}
