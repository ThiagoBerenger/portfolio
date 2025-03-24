'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion, delay, easeIn } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Chip News App',
    description: 'Aplicativo desenvolvido para facilitar a gestão dos clientes, permitindo a emissão de boletos, consulta de pagamentos realizados, atualização de dados pessoais, solicitação de suporte técnico e realização de upgrades de planos de internet fixa e móvel, tudo de forma ágil e intuitiva.',
    href:''
  },
  {
    num: '02',
    title: 'Chip News Landing page',
    description: 'Landing page para um provedor de internet, desenvolvida com foco em SEO e alta performance. O projeto garante carregamento rápido, design responsivo e otimização para melhor posicionamento nos mecanismos de busca.',
    href:'https://www.chipnews.com.br/'
  },
  {
    num: '03',
    title: 'Dr. Leonardo Borges',
    description: 'Desenvolvimento de um site para um escritório de advocacia, focado na captação de clientes. Foram aplicadas as melhores práticas de SEO, incluindo análise de concorrência e otimização com as palavras-chave mais buscadas no Google, garantindo maior visibilidade nos mecanismos de busca.',
    href:'https://advleo.com.br/'
  },
  {
    num: '04',
    title: 'Dr. Valdinan Carvalho',
    description: 'Criação de um site para um escritório de advocacia utilizando React, com foco na performance e otimização. O projeto priorizou uma experiência fluida e responsiva, além de técnicas avançadas de SEO para melhor posicionamento nos motores de busca.',
    href:'http://valdinancarvalhoadv.com.br/'
  },
]

const Portfolio = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ 
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
         }} 
         className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index)=>{
            return (
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl'/>
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
              <p className='text-white/60'>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
