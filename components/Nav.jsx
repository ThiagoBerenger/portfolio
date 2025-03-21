"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const links = [
    { name: 'home', path: '/' },
    { name: 'portfólio', path: '/portfolio' },
    { name: 'sobre', path: '/sobre' },
    { name: 'certificados', path: '/certificados' },
    { name: 'contato', path: '/contato' },
]

const Nav = () => {

  const pathname = usePathname()

  return <nav className='flex gap-8'>
        {links.map((link, index)=> {
            return <Link href={link.path} key={index} 
            className={`${link.path === pathname ? 'text-accent border-b-2 border-accent' : 'text-white'} capitalize hover:text-accent transition-all`}
            >
                {link.name}
            </Link>
        })}
    </nav>
}

export default Nav