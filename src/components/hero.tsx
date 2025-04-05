'use client'

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import treeimage from '../../public/logo_2.png'

export function Hero() {
  return (
    <section className="bg-[#373643] text-white relative overflow-hidden py-20">
      
      {/* Detalhe visual de fundo */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px]  blur-3xl z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px]  blur-3xl z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <article className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Texto */}
          <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in-up">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <h1>Seus projetos merecem cuidados!</h1>
            </div>

            <p className="text-lg lg:text-xl font-normal max-w-xl mx-auto md:mx-0">
              Transformamos suas ideias em realidade com impressão 3D de alta qualidade.
            </p>


            {/* Botão de contato */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#18cb96] text-white px-6 py-3 rounded-full font-bold flex items-center justify-center w-fit gap-2 
              shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out mx-auto md:mx-0"
            >
              <WhatsappLogo className="w-5 h-5" />
              Fale com um especialista
            </a>

            <div className="mt-2">
              <p className="text-sm leading-relaxed">
                <b className="bg-[#18cb96] text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra
              </p>
            </div>
          </div>

          {/* Imagem (Logo ou visual 3D) */}
          <div className="hidden md:flex justify-center items-center flex-1 animate-fade-in">
          <Image
  src={treeimage}
  alt="Logo Gama3D"
  className="w-auto h-[600px] object-contain pointer-events-none drop-shadow-lg"
/>


          </div>
        </article>
      </div>
    </section>
  )
}
