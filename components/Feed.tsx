import { RefreshIcon } from "@heroicons/react/outline"


function Feed() {
  return (
    <div className='col-span-7 overflow-scroll lg:col-span-5 border-x scrollbar-hide'>
      <div className='flex items-center justify-between'>
        <h1 className='p-4 text-xl font-bold'>feed</h1>
        <RefreshIcon className='w-6 h-6 m-4 transition-transform ease-in-out cursor-pointer hover:scale-110 active:scale-125 active:rotate-180 active:duration-100' />
      </div>
    </div>
  )
}

export default Feed