import DarkModeButton from '@/components/DarkModeButton'

const Footer = () => {
  return (
    <footer className='z-10 dark:bg-hexo-black-gray flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 relative'>
      <DarkModeButton />
    </footer>
  )
}

export default Footer
