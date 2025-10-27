"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, Clock, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface TimelineWeek {
  week: string
  dates: string
  phase: string
  title: string
  tasks: string[]
  milestone: string
  progress: number
  highlight?: boolean
}

const today = new Date()
const week1Start = new Date(today)
week1Start.setDate(today.getDate() + 1) // Começa amanhã

const formatDate = (date: Date) => {
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
}

const getNextDay = (date: Date, days: number) => {
  const newDate = new Date(date)
  newDate.setDate(date.getDate() + days)
  return newDate
}

const timelineData: TimelineWeek[] = [
  {
    week: "Semana 1",
    dates: `${formatDate(week1Start)} a ${formatDate(getNextDay(week1Start, 6))}`,
    phase: "Branding — Fase 1 (Conceito)",
    title: "Kick-off e Conceituação",
    tasks: [
      "Kick-off e briefing criativo",
      "Desenvolvimento e entrega de 1 rota criativa (moodboard)",
      "Arquitetura da landing (rascunho AI + UX base)"
    ],
    milestone: "✅ Aprovação da rota criativa e arquitetura da landing",
    progress: 20,
    highlight: true
  },
  {
    week: "Semana 2",
    dates: `${formatDate(getNextDay(week1Start, 7))} a ${formatDate(getNextDay(week1Start, 13))}`,
    phase: "Branding — Fase 2 (Exploração)",
    title: "Exploração e Wireframes",
    tasks: [
      "Explorações de logo (2 por rota)",
      "Definição preliminar de paleta e tipografia",
      "Wireframes da landing (mobile-first + desktop)",
      "Início da iconografia e grid base"
    ],
    milestone: "✅ Escolha da versão final de logo + wireframes aprovados",
    progress: 40
  },
  {
    week: "Semana 3",
    dates: `${formatDate(getNextDay(week1Start, 14))} a ${formatDate(getNextDay(week1Start, 20))}`,
    phase: "Branding — Fase 3 (Finalização)",
    title: "Finalização e Design",
    tasks: [
      "Finalização do sistema visual completo (logo refinado, cores finais, tipografia)",
      "Criação dos modelos de aplicação (social + papelaria simples)",
      "Design final da landing (pré-cadastro + obrigado) no Figma",
      "Início do pacote de criativos (primeiro lote)"
    ],
    milestone: "✅ Protótipos finais da landing aprovados + branding fechado (25 dias)",
    progress: 70
  },
  {
    week: "Semana 4",
    dates: `${formatDate(getNextDay(week1Start, 21))} a ${formatDate(getNextDay(week1Start, 23))}`,
    phase: "Implementação + Criativos",
    title: "Implementação e Testes",
    tasks: [
      "Implementação da landing no CMS/no-code",
      "Configuração de DNS, SSL, sitemap, formulários",
      "Finalização e exportação de criativos (ads + social kit)",
      "Testes funcionais e revisão rápida"
    ],
    milestone: "🚀 Soft-launch em 26/11",
    progress: 90,
    highlight: true
  },
  {
    week: "Go-Live",
    dates: formatDate(getNextDay(week1Start, 28)),
    phase: "Publicação Oficial",
    title: "Lançamento",
    tasks: [
      "Publicação oficial da landing no domínio do cliente",
      "Entrega de todos os arquivos editáveis",
      "Guia de identidade visual",
      "Pacote de criativos final"
    ],
    milestone: "🎉 Lançamento oficial do KONZ BANK",
    progress: 100,
    highlight: true
  }
]

export function TimelineGantt() {
  const [activeWeek, setActiveWeek] = useState<number | null>(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const nextWeek = () => {
    setActiveWeek(prev => prev === null || prev >= timelineData.length - 1 ? 0 : prev + 1)
  }
  
  const prevWeek = () => {
    setActiveWeek(prev => prev === null || prev <= 0 ? timelineData.length - 1 : prev - 1)
  }

  if (!mounted) return null

  return (
    <Card className="p-6 md:p-8 glass border border-border hover:border-primary/30 transition-colors duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h3 className="text-2xl font-bold font-poppins flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          Cronograma do Projeto
        </h3>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            onClick={() => setActiveWeek(activeWeek === null ? 0 : null)}
          >
            {activeWeek === null ? 'Expandir Tudo' : 'Recolher'}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between mb-6">
        <button 
          onClick={prevWeek}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Semana anterior"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
        </button>
        
        <div className="text-center">
          <h4 className="font-bold">{timelineData[activeWeek || 0].week}</h4>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Revisão do projeto:</span> 3 dias corridos após a entrega
          </p>
        </div>
        
        <button 
          onClick={nextWeek}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Próxima semana"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="hidden md:block space-y-8">
        {timelineData.map((week, index) => (
          <motion.div 
            key={week.week}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative pl-6 border-l-2 ${activeWeek === index || activeWeek === null ? 'border-primary' : 'border-border'} transition-colors duration-300`}
          >
            <div 
              className={`absolute w-4 h-4 rounded-full -left-2 top-1 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200 ${
                week.highlight 
                  ? 'border-2 border-primary bg-primary/20' 
                  : 'border-2 border-primary bg-background'
              }`}
              onClick={() => setActiveWeek(activeWeek === index ? null : index)}
            >
              <div className={`w-2 h-2 rounded-full ${(activeWeek === index || activeWeek === null) ? 'bg-primary' : 'bg-muted-foreground'}`} />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-1/4">
                <h4 className="font-bold font-poppins">{week.week}</h4>
                <p className="text-sm text-muted-foreground">{week.dates}</p>
                <Badge 
                  variant="outline" 
                  className={`mt-2 text-xs ${
                    week.highlight 
                      ? 'bg-primary/10 text-primary border-primary/30' 
                      : 'bg-muted/50'
                  }`}
                >
                  {week.phase}
                </Badge>
              </div>
              
              <div className="md:w-3/4">
                <h5 className="font-semibold text-lg mb-2">{week.title}</h5>
                
                <AnimatePresence>
                  {(activeWeek === index || activeWeek === null) && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 mt-3">
                        <ul className="space-y-2 text-sm">
                          {week.tasks.map((task, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{task}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.div 
                          className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/50"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>{week.milestone}</span>
                          </div>
                          
                          <div className="mt-2 w-full bg-background rounded-full h-2 overflow-hidden">
                            <motion.div 
                              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" 
                              initial={{ width: 0 }}
                              animate={{ width: `${week.progress}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 text-right">{week.progress}% completo</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="relative pl-6 border-l-2 border-primary"
          >
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-1" />
            
            <div className="space-y-4">
              <div>
                <Badge 
                  variant="outline" 
                  className={`text-xs mb-2 ${
                    timelineData[activeWeek || 0].highlight 
                      ? 'bg-primary/10 text-primary border-primary/30' 
                      : 'bg-muted/50'
                  }`}
                >
                  {timelineData[activeWeek || 0].phase}
                </Badge>
                <h5 className="font-semibold text-lg">{timelineData[activeWeek || 0].title}</h5>
              </div>
              
              <ul className="space-y-2 text-sm">
                {timelineData[activeWeek || 0].tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{task}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{timelineData[activeWeek || 0].milestone}</span>
                </div>
                
                <div className="mt-2 w-full bg-background rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" 
                    style={{ width: `${timelineData[activeWeek || 0].progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {timelineData[activeWeek || 0].progress}% completo
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  )
}
