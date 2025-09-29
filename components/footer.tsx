"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <p className="text-muted-foreground mb-4 font-inter">Proposta desenvolvida por:</p>
            <Image
              src="/images/logo neuralops.png"
              alt="NeuralOps"
              width={180}
              height={50}
              className="h-10 w-auto mx-auto"
            />
          </div>
          <div className="text-sm text-muted-foreground font-inter">
            <p>© 2025 NeuralOps. Todos os direitos reservados.</p>
            <p className="mt-2">Transformando negócios através da tecnologia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
