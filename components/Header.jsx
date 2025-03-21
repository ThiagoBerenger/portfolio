import Link from 'next/link';
import { Button } from './ui/button';

// components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:px-12 text-white'>
        <div className='container mx-auto flex justify-between'>
            <Link href='/'>
                <h1 className='text-4xl font-semibold'>
                    Thiago Berenger<span className='text-accent'>.</span>
                </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Link href='/contato'>
                <Button>Contato</Button>
              </Link>
            </div>
            {/* mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
            
        </div>
    </header>
  )
}

export default Header