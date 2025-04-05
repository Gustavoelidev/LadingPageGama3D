"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight,Layers, Scissors, Gift, Syringe, CarTaxiFront, Hotel } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
  {
    title: "Action Figures",
    description: "1 action figure personalizada à sua escolha, com opções de cores disponíveis conforme o estoque. Ideal para colecionadores ou presentes criativos!",
    icon: Gift, // corrigido: passou o componente, não o JSX
    linkText: 'Olá, vi no site sobre Action Figures e gostaria de mais informações.'
  },
  {
    title: "Presentes",
    description: "Que tal um presente personalizado feito sob medida? Ideal para colecionadores, datas especiais ou para surpreender quem você ama!",
    icon: Gift, // ou Cube, se estiver usando outro ícone mais temático
    linkText: 'Olá, vi no site sobre presentes personalizados e gostaria de mais informações.'
  },
  {
    title: "Decorações",
    description: "Transforme seu espaço com decorações personalizadas em 3D!",
    icon: Gift, // Ou Cube, Package, Layers, dependendo da proposta visual
    linkText: 'Olá, vi no site sobre decorações personalizadas e gostaria de mais informações.'
  }

]

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  })

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-[#18cb96]">Serviços</h2>


        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
          {services.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_calc(100%/3)] min-w-0 px-3"
              >
                <article className="bg-[#373643] text-white rounded-2xl p-6 h-full flex flex-col space-y-4">
                  <Icon className="w-6 h-6" style={{ color: '#18cb96' }} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                  <a
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(item.linkText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm hover:underline flex items-center gap-2"
                    style={{ color: '#18cb96' }}
                  >
                    <WhatsappLogo className="w-4 h-4" />
                    Fale com um especialista
                  </a>
                </article>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
