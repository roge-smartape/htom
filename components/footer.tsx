import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Vamos Salud Logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg shadow-lg shadow-indigo-500/20 object-cover"
              />
              <span className="text-sm font-bold tracking-tight text-slate-900">VAMOS SALUD</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Facilitamos el financiamiento, la educación y la migración legal para enfermeros mexicanos de excelencia hacia los Estados Unidos.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-4">Programa</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><Link href="#beneficios" className="hover:text-indigo-600 transition-colors">Beneficios</Link></li>
                <li><Link href="#proceso" className="hover:text-indigo-600 transition-colors">NCLEX Prep</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Requisitos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Aviso de Privacidad</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Términos de Uso</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2024 Vamos Salud. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-slate-400">
            <Link href="#" className="hover:text-indigo-600 transition-colors" aria-label="Facebook">
              <iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors" aria-label="Instagram">
              <iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
              <iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
