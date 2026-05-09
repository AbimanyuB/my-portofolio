import { data } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t py-10 px-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-xs text-white"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}>
            AB
          </div>
          <span className="font-heading text-sm text-gray-400">
            {data.name} — Tech Lead & Senior Fullstack Developer
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-600">
          <span>© {year} All rights reserved</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <a
            href={`mailto:${data.email}`}
            className="hover:text-gray-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 text-center">
        <div className="text-xs text-gray-700">
          Built with <span className="text-gradient font-medium">React</span> &amp;{' '}
          <span className="text-gradient font-medium">Go</span> · Designed with ❤️
        </div>
      </div>
    </footer>
  )
}
