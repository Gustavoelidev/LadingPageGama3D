'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import printerImage from '../../public/about3.jpg'
import teamImage from '../../public/about2.jpg'

const images = [printerImage, teamImage]

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // muda a cada 4 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Carrossel de Imagens */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={img}
                alt={`Imagem ${index + 1}`}
                className="object-cover w-full h-full"
                draggable={false}
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>

        {/* Texto sobre a empresa */}
        <div className="max-w-xl mx-auto md:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#18cb96]">
            Sobre a nossa empresa
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Na Gama3D, transformamos ideias em realidade através da impressão 3D de alta precisão. 
            Somos apaixonados por tecnologia e inovação, com foco total na satisfação do cliente.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Com equipamentos modernos e uma equipe especializada, atuamos desde a prototipagem até a produção final, 
            sempre prezando pela qualidade, agilidade e personalização de cada projeto.
          </p>

          <a
            href="https://wa.me/5511999999999"
            className="inline-block bg-[#18cb96] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:brightness-110 transition"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}
