'use client'

import { FaHtml5, FaCss3, FaJS, FaReact, FaJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const about = {
  title: 'Sobre mim',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, tenetur inventore aspernatur est exercitationem amet quasi molestiae consequuntur, sequi odio necessitatibus excepturi et omnis sit tempora cum aliquam voluptas repudiandae.',
  info: [
    {
      fieldName: 'Nome',
      fieldValue: 'Thiago Berenger'
    },
    {
      fieldName: 'Telefone',
      fieldValue: '(21) 96481-9371'
    },
    {
      fieldName: 'Experiência',
      fieldValue: '2 anos'
    },
    {
      fieldName: 'Nacionalidade',
      fieldValue: 'Brasileiro'
    },
    {
      fieldName: 'Email',
      fieldValue: 'thberenger27@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Disponível'
    },
  ]
}

const education = {
  icon: '/assets/about/cap.svg',
  title: 'Formações',
  items: [
    {
      institution: 'Universidade Estácio de Sá',
      position: 'Análise e Desenvolvimento de Sistemas',
      duration: '2023 - 2025'
    },
    {
      institution: 'UNINTER',
      position: 'Tecnologia de Segurança Privada',
      duration: '2020 - 2022'
    },
    {
      institution: 'Udemy',
      position: 'The Ultimate Fullstack Web Development Bootcamp',
      duration: '2024'
    },
    {
      institution: 'Udemy',
      position: 'Formação Front-end - HTML, CSS, Javascript, React e+',
      duration: '2024'
    },
    {
      institution: 'IFRS',
      position: 'React Native: Criação de Aplicativos Móveis Modernos',
      duration: '2025'
    },
    {
      institution: 'Fundação Bradesco',
      position: 'Criando um projeto com interface Gráfica utilizando a linguagem Python',
      duration: '2025'
    },
  ],
}

const skills = {
  title: 'Tecnologias',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure commodi, eligendi quis deleniti totam cumque inventore qui voluptas obcaecati quo asperiores quibusdam dolores aliquam? Temporibus possimus maiores corrupti natus sunt.',
  skillList: [
    {
      icon: <FaHtml5/>,
      name: 'HTML5'
    },
    {
      icon: <FaCss3/>,
      name: 'css 3'
    },
    {
      icon: <FaJs/>,
      name: 'Javascript'
    },
    {
      icon: <FaReact/>,
      name: 'React.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind.css'
    }
  ]
}


import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"

import { ScrollArea } from "@radix-ui/react-scroll-area"
import { motion } from 'framer-motion'

const Sobre = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue='about' 
        className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='about'>Sobre mim</TabsTrigger>
            <TabsTrigger value='education'>Certificados</TabsTrigger>
            <TabsTrigger value='skills'>Habilidades</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value='about'className='w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg/6 max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education'className='w-full'>
              Formações
            </TabsContent>
            <TabsContent value='skills'className='w-full'>
              Habilidades
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Sobre


// https://www.youtube.com/watch?v=dImgZ_AH7uA 2:02:40