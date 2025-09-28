"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, Users, CreditCard, Clock, AlertCircle } from "lucide-react"
import { useState } from "react"

export function InvestmentSection() {
  const [showCalculator, setShowCalculator] = useState(false)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Investimento <span className="text-gradient">Inteligente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Menos que o salário de 1 funcionário, mas com resultado de uma equipe inteira
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Investment Details */}
          <div className="space-y-8">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Investimento Inicial</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-gradient mb-4">R$ 30.500,00</div>
                <p className="text-muted-foreground mb-4">Setup completo de todas as soluções</p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary">
                  <CreditCard className="w-4 h-4" />
                  <span>7x de R$ 4.880,70 no cartão</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Aceita até 2 cartões</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Mensalidade</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">R$ 5.420 a R$ 8.920</div>
                <p className="text-muted-foreground mb-4">Dependendo dos serviços escolhidos</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Sem gestão Instagram:</span>
                    <span className="font-semibold">R$ 5.420/mês</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Com gestão Instagram:</span>
                    <span className="font-semibold">R$ 8.920/mês</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200">Importante sobre a Mensalidade</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      O valor recorrente só será iniciado <strong>60 dias após a assinatura do contrato</strong>,
                      garantindo que todo o setup e estrutura estejam completamente desenvolvidos e implementados.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                      <Clock className="w-4 h-4" />
                      <span>Período de implementação sem cobrança mensal</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button onClick={() => setShowCalculator(!showCalculator)} variant="outline" className="flex-1">
                <Calculator className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </div>
          </div>

          {/* ROI Comparison */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">Compare o ROI</h3>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6 bg-destructive/10 border-destructive/20">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-destructive mr-3" />
                  <h4 className="text-xl font-semibold">Equipe Tradicional</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Desenvolvedor:</span>
                    <span className="font-semibold">R$ 8.000/mês</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Designer:</span>
                    <span className="font-semibold">R$ 6.000/mês</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing:</span>
                    <span className="font-semibold">R$ 5.000/mês</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-destructive">R$ 19.000/mês</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/20">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-xl font-semibold">NeuralOps</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Todas as soluções:</span>
                    <span className="font-semibold">R$ 8.920/mês</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Suporte incluído:</span>
                    <span className="font-semibold text-primary">Grátis</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Atualizações:</span>
                    <span className="font-semibold text-primary">Grátis</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Economia:</span>
                    <span className="text-primary">R$ 10.080/mês</span>
                  </div>
                </div>
              </Card>
            </div>

            {showCalculator && (
              <Card className="p-6 animate-in slide-in-from-top-4">
                <h4 className="text-lg font-semibold mb-4">Resumo dos Valores</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Valores Únicos (Setup):</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Site Corporativo:</span>
                        <span>R$ 6.100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Agente IA:</span>
                        <span>R$ 7.500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CRM:</span>
                        <span>R$ 4.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instagram:</span>
                        <span>R$ 5.800</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tracking:</span>
                        <span>R$ 4.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contratos:</span>
                        <span>R$ 3.100</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total:</span>
                        <span>R$ 30.500</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Valores Recorrentes:</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Agente IA:</span>
                        <span>R$ 2.500/mês</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CRM (40 usuários):</span>
                        <span>R$ 1.920/mês</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instagram (opcional):</span>
                        <span>R$ 3.500/mês</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tracking:</span>
                        <span>R$ 1.000/mês</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
