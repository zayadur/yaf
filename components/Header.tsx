import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex px-2 py-2 bg-white border-b sticky-top-0'>
      <div className='relative flex-shrink-0 w-12 h-12'>
        <Link href='/' rel="noopener noreferrer">
          <a className='cursor-pointer'>
            <Image src='/logo.svg' alt='logo' layout='fill' objectFit='contain' />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header