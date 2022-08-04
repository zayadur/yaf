import Link from 'next/link'
import { CodeIcon, HeartIcon } from '@heroicons/react/solid'

function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 col-span-9 border-t">
      <a className='flex items-center justify-center mx-1 cursor-pointer' href='https://zayadur.com' target='_blank' rel='noopener noreferrer'>
        <HeartIcon className='w-5 h-5' />
      </a>
      <a className='flex items-center justify-center mx-1 cursor-pointer' href='https://github.com/zayadur/yaf' target='_blank' rel='noopener noreferrer'>
        <CodeIcon className='w-5 h-5' />
      </a>
    </footer>
  )
}

export default Footer