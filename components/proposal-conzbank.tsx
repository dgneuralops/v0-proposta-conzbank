"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Check, CheckCircle2, ClipboardList, Clock, DollarSign, FileText, Pin, Sparkles, Target } from "lucide-react"
import { TimelineGantt } from "./timeline-gantt"

interface InteractiveCardProps {
  title: string
  value: string
  icon: React.ReactNode
  items?: string[]
  highlight?: boolean
}

function InteractiveCard({ title, value, icon, items, highlight }: InteractiveCardProps) {
  return (
    <Card className={`p-6 glass border border-border hover:border-primary/30 transition-colors duration-300 ${highlight ? 'ring-2 ring-primary/30' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            {icon}
          </div>
          <h4 className="text-lg font-bold font-poppins">{title}</h4>
        </div>
        <Badge className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white">
          {value}
        </Badge>
      </div>
      {items && (
        <ul className="space-y-2 mt-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

export function ProposalConzbank() {
  const today = new Date()
  const endDate = new Date()
  endDate.setDate(today.getDate() + 3) // 3 dias a partir de hoje
  
  const formattedToday = formatDate(today)
  const formattedEndDate = formatDate(endDate)
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              KONZ BANK - Branding & Lançamento Digital
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-inter text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Proposta: {formattedToday}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Início: 04/11/2025
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Soft-launch: 26/11/2025
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Go-Live: 01/12/2025
              </span>
              <span className="flex items-center gap-2 text-amber-500">
                <Clock className="w-4 h-4" />
                Válido até: {formattedEndDate}
              </span>
            </div>
          </div>

          {/* Objetivo */}
          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              Objetivos do Projeto
            </h3>
            <ul className="space-y-3 font-inter text-muted-foreground">
              {[
                "Criar uma identidade de marca forte e consistente: logo, tipografia, cores, grid, iconografia, guidelines e aplicações.",
                "Desenvolver landing page de lançamento (pré-cadastro + obrigado), responsiva e integrada.",
                "Produzir pacote de criativos estáticos para campanhas de tráfego e social no lançamento."
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Escopo e Entregáveis */}
          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-white" />
              </div>
              Escopo e Entregáveis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InteractiveCard
                title="A. Identidade de Marca"
                value="R$ 17.000"
                icon={<Sparkles className="w-6 h-6 text-white" />}
                items={[
                  "1 rota criativa (moodboard)",
                  "2 explorações de logo por rota (vertical/horizontal, versão ícone)",
                  "Paleta cromática primária/secundária + contrastes",
                  "Tipografia (titular e corpo)",
                  "Grids e iconografia base",
                  "Sistema de composições: banners, mockups, thumbnails, arte social",
                  "Guidelines para digital (componentes-chave, spacing, grid)",
                  "Modelos de aplicação (papelaria simples + social kit)",
                  "Formato: PDF + arquivo editável (Figma/AI)",
                  "Aceite: logo final (AI/SVG/PNG), paleta (códigos), fontes definidas, kit base aprovado"
                ]}
                highlight
              />

              <InteractiveCard
                title="B. Landing — Design"
                value="R$ 6.000"
                icon={<FileText className="w-6 h-6 text-white" />}
                items={[
                  "Página de campanha/teaser (pré-cadastro)",
                  "Página de obrigado/confirmado",
                  "Inclui: arquitetura da informação, layout responsivo (desktop + mobile), microcopy aplicada.",
                  "Aceite: protótipos finais no Figma (desktop + mobile)"
                ]}
              />

              <InteractiveCard
                title="C. Landing — Implementação"
                value="R$ 9.300"
                icon={<CheckCircle2 className="w-6 h-6 text-white" />}
                items={[
                  "Montagem das páginas e redirects",
                  "Sitemap.xml e configuração básica de SEO on-page",
                  "Integração de formulários (plataforma de automação escolhida pelo cliente)",
                  "Hospedagem/SSL (do cliente) + instruções de DNS",
                  "Aceite: site publicado em domínio do cliente"
                ]}
              />

              <InteractiveCard
                title="D. Pacote de Criativos (estáticos & social)"
                value="R$ 8.400"
                icon={<DollarSign className="w-6 h-6 text-white" />}
                items={[
                  "Ads estáticos (12 peças): 6 topo (prospect) + 6 meio (consideração)",
                  "Social kit (15 peças): 5 posts feed + 6 stories + 4 carrosséis",
                  "Formatos: 1080×1350, 1080×1080, 1920×1080, 1200×628",
                  "Aceite: arquivos finais (PNG/JPG) + fontes/arquivos editáveis"
                ]}
              />
            </div>
          </Card>

          {/* Investimento Total */}
          <Card className="p-6 md:p-8 glass border-2 border-primary/40 shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/30 text-xs">
                Válido até: {formattedEndDate}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold font-poppins mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              Investimento Total
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-inter">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 font-bold">Frente</th>
                    <th className="pb-3 font-bold text-right">Valor</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3">A. Identidade de Marca (logo + sistema visual)</td>
                    <td className="py-3 text-right font-semibold">R$ 17.000</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">B. Landing — Design</td>
                    <td className="py-3 text-right font-semibold">R$ 6.000</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">C. Landing — Implementação</td>
                    <td className="py-3 text-right font-semibold">R$ 9.300</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">D. Pacote de Criativos (estáticos & social)</td>
                    <td className="py-3 text-right font-semibold">R$ 8.400</td>
                  </tr>
                  <tr className="border-t-2 border-primary/40">
                    <td className="pt-4 font-bold text-foreground text-lg">Total Geral</td>
                    <td className="pt-4 text-right font-bold text-2xl text-gradient">R$ 40.700</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-3 p-4 bg-muted/50 rounded-lg border border-border/50">
              <h4 className="font-bold font-poppins text-foreground">Forma de Pagamento:</h4>
              <ul className="space-y-2 text-sm font-inter text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>50% na assinatura (kick-off em 04/11) + 50% após aprovação dos protótipos finais e branding fechado (26/11)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Ou 5x de R$ 8.866,70 (podendo pagar em até 2 cartões)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Ou à vista com 10% de desconto</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Cronograma Gantt */}
          <TimelineGantt />

          {/* REVISÕES */}
          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Pin className="w-5 h-5 text-white" />
              </div>
              REVISÕES
            </h3>
            <ul className="space-y-3 font-inter">
              {[
                "Até 2 rodadas de revisão por frente (branding, landing, criativos). Revisões adicionais → custo extra",
                "Aprovação do cliente em até 48h por etapa",
                "O cliente é responsável por hospedagem, domínio, contas de plataforma e automação",
                <span className="text-red-500 font-semibold">Fora de escopo: PR, registro de marca, SEO avançado, motion design, blog, automações extras ou páginas adicionais</span>
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Entregáveis Finais */}
          <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold font-poppins mb-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              Entregáveis Finais
            </h3>
            <ul className="space-y-3 font-inter">
              {[
                "Arquivos-fonte da identidade (Figma + AI/SVG/PNG)",
                "PDF de guidelines visuais",
                "Protótipos finais da landing",
                "Landing publicada no domínio do cliente",
                "Pacote de criativos em PNG/JPG + fontes/arquivos editáveis",
                "Checklist de publicação (redirects, sitemap, formulário testado)"
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

        </div>
      </div>
    </section>
  )
}
