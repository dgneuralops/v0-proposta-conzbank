"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <p className="text-muted-foreground mb-4">Proposta desenvolvida por:</p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20neuralops-CfhlXbeO8nmhyJzGTE4RDiGvtt8L1G.png"
              alt="Neural Ops"
              width={150}
              height={50}
              className="h-10 w-auto mx-auto"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Neural Ops. Todos os direitos reservados.</p>
            <p className="mt-2">Transformando negócios através da tecnologia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
