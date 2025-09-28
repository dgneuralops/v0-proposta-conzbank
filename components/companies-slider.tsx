"use client"

import { useEffect, useRef } from "react"

const companies = [
  { name: "Advocacia", src: "/images/companies/company-1.png" },
  { name: "Mercado Livre", src: "/images/companies/company-2.png" },
  { name: "Portugal Company", src: "/images/companies/company-3.png" },
  { name: "Green Company", src: "/images/companies/company-4.png" },
  { name: "Lime Company", src: "/images/companies/company-5.png" },
  { name: "BeastMode", src: "/images/companies/company-6.png" },
  { name: "Gray Company", src: "/images/companies/company-7.png" },
  { name: "USA Company", src: "/images/companies/company-8.png" },
  { name: "CliqMed", src: "/images/companies/company-9.png" },
  { name: "USA Company 2", src: "/images/companies/company-10.png" },
  { name: "MS Company", src: "/images/companies/company-11.png" },
  { name: "Drink ID", src: "/images/companies/company-12.png" },
  { name: "Otimiza", src: "/images/companies/company-13.png" },
  { name: "Direta", src: "/images/companies/company-14.png" },
  { name: "Bulldog", src: "/images/companies/company-15.png" },
  { name: "SmartClean", src: "/images/companies/company-16.png" },
]

export function CompaniesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId: number
    let startTime: number | null = null
    const duration = 60000 // 60 seconds for full cycle
    const totalWidth = slider.scrollWidth / 2 // Half because we duplicate

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = (elapsed % duration) / duration

      slider.scrollLeft = progress * totalWidth
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="py-12 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-12 overflow-hidden"
            style={{
              width: "calc(200% + 48px)",
            }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              >
                <img
                  src={company.src || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(25%) sepia(8%) saturate(1000%) hue-rotate(180deg) brightness(95%) contrast(85%)",
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              >
                <img
                  src={company.src || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(25%) sepia(8%) saturate(1000%) hue-rotate(180deg) brightness(95%) contrast(85%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
