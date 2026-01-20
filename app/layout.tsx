import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Vamos Salud | Tu Futuro Global',
  description: 'Programa integral de financiamiento y empleabilidad para enfermeros mexicanos en Estados Unidos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white relative">
        {children}
      </body>
    </html>
  )
}
