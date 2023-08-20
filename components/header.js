import Link from 'next/link'
import { useWebsiteConfig } from './websiteConfigProvider';

export default function Header() {

  const websiteConfig = useWebsiteConfig();

  
  return (
    <h2 className="container  mx-auto px-5 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        {websiteConfig? websiteConfig[0].title : 'Loading'}
      </Link>
      .
    </h2>
  )
}
