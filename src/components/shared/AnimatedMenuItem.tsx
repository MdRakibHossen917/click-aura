import Link from 'next/link'

interface Props {
  text: string
  href: string
  onClick?: () => void
}

const AnimatedMenuItem = ({ text, href, onClick }: Props) => {
  return (
    <div className="[perspective:120px] [perspective-origin:bottom]">
      <Link
        href={href}
        onClick={onClick}
        className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-5xl md:text-6xl text-white leading-[0.85] group"
      >
        {/* Top text */}
        <div className="flex">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-500 group-hover:-translate-y-full"
            >
              {char}
            </span>
          ))}
        </div>

        {/* Bottom text */}
        <div className="absolute inset-0 flex">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0"
            >
              {char}
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default AnimatedMenuItem
