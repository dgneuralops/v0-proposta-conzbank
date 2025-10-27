"use client"
import { Card } from "@/components/ui/card"
import { Clock, Phone, Mail, CalendarClock } from "lucide-react"
import { useState, useEffect } from "react"

export function CTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  const handleDownloadPDF = async () => {
    try {
      const printWindow = window.open("", "_blank")
      if (!printWindow) return

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Proposta Ademicon - NeuralOps</title>
          <meta charset="utf-8">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * { 
              box-sizing: border-box; 
              margin: 0; 
              padding: 0; 
            }
            
            body { 
              font-family: 'Inter', sans-serif; 
              line-height: 1.6; 
              color: #1f2937;
              background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
              padding: 0;
              margin: 0;
            }
            
            .pdf-container {
              max-width: 900px;
              margin: 0 auto;
              background: white;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              border-radius: 24px;
              overflow: hidden;
            }
            
            .pdf-header {
              background: linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%);
              color: white;
              padding: 50px 40px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            
            .pdf-header::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
              animation: pulse 4s ease-in-out infinite;
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 0.8; }
            }
            
            .pdf-header h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 42px;
              font-weight: 800;
              margin: 0 0 20px 0;
              text-shadow: 0 4px 8px rgba(0,0,0,0.2);
              position: relative;
              z-index: 2;
              background: linear-gradient(45deg, #ffffff, #f0fdf4);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .pdf-header .subtitle {
              font-size: 20px;
              margin: 10px 0;
              opacity: 0.95;
              font-weight: 500;
              position: relative;
              z-index: 2;
            }
            
            .logo-section {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 30px 40px;
              background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
              border-bottom: 3px solid #e5e7eb;
            }
            
            .logo-container {
              display: flex;
              align-items: center;
              gap: 20px;
            }
            
            .logo-placeholder {
              width: 120px;
              height: 60px;
              background: linear-gradient(135deg, #3b82f6, #1d4ed8);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-family: 'Poppins', sans-serif;
              font-weight: 700;
              font-size: 16px;
              box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
            }
            
            .logo-placeholder.neural {
              background: linear-gradient(135deg, #22c55e, #16a34a);
              box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);
            }
            
            .content-section {
              padding: 40px;
            }
            
            .solution-card {
              margin-bottom: 30px;
              padding: 30px;
              background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
              border: 2px solid transparent;
              border-radius: 20px;
              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
              position: relative;
              overflow: hidden;
            }
            
            .solution-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6);
            }
            
            .solution-card h3 {
              font-family: 'Poppins', sans-serif;
              font-size: 24px;
              font-weight: 700;
              color: #1f2937;
              margin: 0 0 15px 0;
              display: flex;
              align-items: center;
            }
            
            .solution-icon {
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #22c55e, #16a34a);
              border-radius: 12px;
              margin-right: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: 800;
              font-size: 18px;
              box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
            }
            
            .solution-card p {
              margin: 15px 0;
              color: #4b5563;
              font-size: 16px;
              line-height: 1.7;
            }
            
            .price-container {
              margin: 20px 0;
              display: flex;
              flex-wrap: wrap;
              gap: 15px;
              align-items: center;
            }
            
            .price {
              font-family: 'Poppins', sans-serif;
              font-size: 18px;
              font-weight: 700;
              color: #16a34a;
              background: linear-gradient(135deg, #dcfce7, #bbf7d0);
              padding: 12px 20px;
              border-radius: 12px;
              box-shadow: 0 4px 8px rgba(34, 197, 94, 0.2);
              border: 2px solid #22c55e;
            }
            
            .timeline-info {
              background: linear-gradient(135deg, #dbeafe, #bfdbfe);
              color: #1e40af;
              padding: 10px 16px;
              border-radius: 10px;
              font-size: 14px;
              font-weight: 600;
              border: 2px solid #3b82f6;
            }
            
            .total-section {
              background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%);
              color: white;
              padding: 50px 40px;
              margin: 40px 0;
              text-align: center;
              border-radius: 24px;
              box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.4);
              position: relative;
              overflow: hidden;
            }
            
            .total-section::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
              animation: pulse 6s ease-in-out infinite;
            }
            
            .total-section h2 {
              font-family: 'Poppins', sans-serif;
              font-size: 36px;
              font-weight: 800;
              margin: 0 0 30px 0;
              text-shadow: 0 4px 8px rgba(0,0,0,0.2);
              position: relative;
              z-index: 2;
              background: linear-gradient(45deg, #ffffff, #dbeafe);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .total-price {
              font-family: 'Poppins', sans-serif;
              font-size: 48px;
              font-weight: 800;
              margin: 20px 0;
              text-shadow: 0 4px 8px rgba(0,0,0,0.3);
              position: relative;
              z-index: 2;
            }
            
            .payment-options {
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              padding: 30px;
              border-radius: 16px;
              margin-top: 30px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              position: relative;
              z-index: 2;
            }
            
            .payment-options p {
              margin: 12px 0;
              font-size: 18px;
              font-weight: 600;
            }
            
            .notice-box {
              background: linear-gradient(135deg, #fef3c7, #fde68a);
              border: 3px solid #f59e0b;
              padding: 25px;
              border-radius: 16px;
              margin: 30px 0;
              text-align: center;
              box-shadow: 0 8px 16px rgba(245, 158, 11, 0.2);
            }
            
            .notice-box strong {
              color: #92400e;
              font-family: 'Poppins', sans-serif;
              font-size: 18px;
            }
            
            .footer-section {
              margin-top: 40px;
              padding: 40px;
              background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
              color: white;
              text-align: center;
              border-radius: 20px;
              box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.3);
            }
            
            .footer-section h3 {
              font-family: 'Poppins', sans-serif;
              font-size: 28px;
              font-weight: 700;
              margin: 0 0 30px 0;
              background: linear-gradient(45deg, #22c55e, #16a34a);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .contact-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 25px;
              margin-top: 25px;
            }
            
            .contact-item {
              background: rgba(255, 255, 255, 0.1);
              padding: 20px;
              border-radius: 12px;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .contact-item h4 {
              font-family: 'Poppins', sans-serif;
              font-weight: 700;
              margin: 0 0 10px 0;
              color: #22c55e;
              font-size: 16px;
            }
            
            .contact-item p {
              font-weight: 600;
              font-size: 16px;
            }
            
            .validity-notice {
              margin-top: 30px;
              padding: 20px;
              background: rgba(34, 197, 94, 0.1);
              border: 2px solid #22c55e;
              border-radius: 12px;
              font-weight: 600;
              color: #16a34a;
            }
            
            @media print {
              body { 
                margin: 0; 
                padding: 20px; 
                background: white;
              }
              .pdf-container {
                box-shadow: none;
                border-radius: 0;
              }
              .solution-card { 
                break-inside: avoid; 
                page-break-inside: avoid;
              }
              .total-section { 
                break-inside: avoid; 
                page-break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <div class="pdf-container">
            <div class="pdf-header">
              <h1>PROPOSTA – ESTRUTURA DE AQUISIÇÃO DE LEADS</h1>
              <p class="subtitle"><strong>Cliente:</strong> Ademicon</p>
              <p class="subtitle"><strong>Proposto por:</strong> Neural.Ops</p>
              <p class="subtitle"><strong>Data:</strong> ${new Date().toLocaleDateString("pt-BR")}</p>
            </div>
            
            <div class="logo-section">
              <div class="logo-container">
                <div class="logo-placeholder">ADEMICON</div>
              </div>
              <div class="logo-container">
                <div class="logo-placeholder neural">NEURAL OPS</div>
              </div>
            </div>
            
            <div class="content-section">
              <div class="solution-card">
                <h3><span class="solution-icon">1</span>Site Corporativo Responsivo</h3>
                <p>Site moderno e responsivo com design profissional, otimizado para conversão e SEO. Inclui páginas institucionais, formulários de contato e integração com redes sociais.</p>
                <div class="price-container">
                  <div class="price">💰 R$ 6.100,00</div>
                  <div class="timeline-info">📅 Prazo: 15 dias úteis</div>
                </div>
              </div>
              
              <div class="solution-card">
                <h3><span class="solution-icon">2</span>Agente de IA Personalizado</h3>
                <p>Chatbot inteligente integrado ao WhatsApp para atendimento 24/7, qualificação de leads e automação de processos de vendas.</p>
                <div class="price-container">
                  <div class="price">💰 Setup: R$ 7.500,00 | Mensal: R$ 2.500,00</div>
                  <div class="timeline-info">📅 Prazo: 20 dias úteis</div>
                </div>
              </div>
              
              <div class="solution-card">
                <h3><span class="solution-icon">3</span>CRM Personalizado</h3>
                <p>Sistema completo de gestão de clientes, pipeline de vendas e automação de marketing. <strong style="color: #dc2626;">40% de desconto</strong> para até 40 usuários.</p>
                <div class="price-container">
                  <div class="price">💰 Setup: R$ 4.000,00 | Mensal: R$ 1.920,00</div>
                  <div class="timeline-info">📅 Prazo: 25 dias úteis</div>
                </div>
              </div>
              
              <div class="solution-card">
                <h3><span class="solution-icon">4</span>Gestão de Instagram (Opcional)</h3>
                <p>Criação de conteúdo estratégico, stories, posts e gestão completa da presença digital nas redes sociais.</p>
                <div class="price-container">
                  <div class="price">💰 Setup: R$ 5.800,00 | Mensal: R$ 3.500,00</div>
                  <div class="timeline-info">📅 Prazo: 10 dias úteis</div>
                </div>
              </div>
              
              <div class="solution-card">
                <h3><span class="solution-icon">5</span>Sistema de Tracking</h3>
                <p>Monitoramento completo de métricas, conversões, performance digital e relatórios automatizados de ROI.</p>
                <div class="price-container">
                  <div class="price">💰 Setup: R$ 4.000,00 | Mensal: R$ 1.000,00</div>
                  <div class="timeline-info">📅 Prazo: 15 dias úteis</div>
                </div>
              </div>
              
              <div class="solution-card">
                <h3><span class="solution-icon">6</span>Sistema de Contratos Digitais</h3>
                <p>Plataforma completa para criação, envio, acompanhamento e assinatura digital de contratos com validade jurídica.</p>
                <div class="price-container">
                  <div class="price">💰 R$ 3.100,00</div>
                  <div class="timeline-info">📅 Prazo: 20 dias úteis</div>
                </div>
              </div>
              
              <div class="total-section">
                <h2>💎 Investimento Total</h2>
                <div class="total-price">R$ 30.500,00</div>
                
                <div class="payment-options">
                  <p><strong>💳 Parcelamento no Cartão:</strong> 7x de R$ 4.880,70</p>
                  <p><strong>💰 À Vista (PIX):</strong> R$ 27.450,00 (10% desconto)</p>
                  <p><strong>📊 Mensalidade dos Serviços:</strong> R$ 5.420,00 a R$ 8.920,00</p>
                </div>
              </div>
              
              <div class="notice-box">
                <p><strong>⏰ IMPORTANTE:</strong> As mensalidades recorrentes iniciam apenas <strong>60 dias após</strong> a assinatura do contrato e conclusão da implementação.</p>
              </div>
              
              <div class="footer-section">
                <h3>NeuralOps</h3>
                <div class="contact-grid">
                  <div class="contact-item">
                    <h4>📱 WhatsApp</h4>
                    <p>+55 62.994780279</p>
                  </div>
                  <div class="contact-item">
                    <h4>📧 Email</h4>
                    <p>contato@neuralops.app</p>
                  </div>
                  <div class="contact-item">
                    <h4>🕒 Horário</h4>
                    <p>Seg-Sex: 8h às 18h</p>
                  </div>
                </div>
                <div class="validity-notice">
                  ✨ Esta proposta é válida por 7 dias a partir da data de emissão.
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `)

      printWindow.document.close()

      // Wait for content and images to load then print
      setTimeout(() => {
        printWindow.print()
      }, 1500)
    } catch (error) {
      console.error("Erro ao gerar PDF:", error)
      alert("Erro ao gerar PDF. Tente novamente.")
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            Pronto para <span className="text-gradient">Transformar</span> Seu Negócio?
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto font-inter leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Não perca mais tempo. Comece sua transformação digital hoje mesmo.
          </p>

          {/* Enhanced Urgency Counter */}
          <Card className="inline-block p-8 mb-12 bg-gradient-to-r from-destructive/10 to-destructive/5 border-2 border-destructive/30 shadow-2xl hover:shadow-destructive/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 hover:scale-105 group">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-destructive to-destructive/70 p-1.5 animate-pulse-slow shadow-lg">
                <Clock className="w-full h-full text-white" />
              </div>
              <span className="text-destructive font-bold font-poppins text-lg">Oferta por tempo limitado!</span>
            </div>
            <div className="grid grid-cols-4 gap-6 text-center">
              {[
                { value: timeLeft.days, label: "Dias" },
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Seg" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-card rounded-xl p-4 border-2 border-destructive/20 group-hover:border-destructive/40 transition-all duration-300 hover:scale-110">
                    <div className="text-3xl font-bold text-destructive font-poppins mb-1">{item.value}</div>
                    <div className="text-xs text-muted-foreground font-inter uppercase tracking-wide">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Enhanced Contact Info */}
          <div className="mt-12 p-8 md:p-10 bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl shadow-2xl border-2 border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 hover:shadow-primary/20 transition-all duration-500 group">
            <h3 className="text-3xl font-bold mb-8 font-poppins text-gradient">Entre em Contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gradient-to-br from-background to-primary/5 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-xl group/item">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover/item:scale-125 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold mb-3 font-poppins text-lg group-hover/item:text-gradient transition-all duration-300">WhatsApp</h4>
                <p className="font-inter text-primary text-lg">(62) 99316-7132</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-background to-primary/5 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-xl group/item">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg group-hover/item:scale-125 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold mb-3 font-poppins text-lg group-hover/item:text-gradient transition-all duration-300">Email</h4>
                <p className="font-inter text-primary text-lg">contato@neuralops.app</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-background to-primary/5 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-xl group/item">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover/item:scale-125 transition-transform duration-300">
                  <CalendarClock className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold mb-3 font-poppins text-lg group-hover/item:text-gradient transition-all duration-300">Horário</h4>
                <p className="font-inter text-muted-foreground">Seg-Sex: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
