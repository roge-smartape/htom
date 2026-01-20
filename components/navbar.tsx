import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/50 bg-white/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Vamos Salud Logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg shadow-lg shadow-indigo-500/20 object-cover"
          />
          <span className="text-sm font-bold tracking-tight text-slate-900">VAMOS SALUD</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#beneficios" className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors">
            Beneficios
          </Link>
          <Link href="#proceso" className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors">
            Proceso
          </Link>
          <Link href="#financiamiento" className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors">
            Inversión
          </Link>
        </div>
        <Link
          href="#registro-final"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-slate-900/25 hover:scale-105"
        >
          <span>Aplicar ahora</span>
          <iconify-icon icon="solar:arrow-right-linear" width="16" className="ml-1 transition-transform group-hover:translate-x-1"></iconify-icon>
        </Link>
      </div>
    </nav>
  )
}
