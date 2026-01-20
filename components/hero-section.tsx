'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { HeroFormData } from '@/types'

export const HeroSection = () => {
  const [formData, setFormData] = useState<HeroFormData>({
    nombre: '',
    apellido: '',
    email: '',
    statusAcademico: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'pre-calificacion',
          datos: formData,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario')
      }

      setMessage({
        type: 'success',
        text: '¡Gracias! Hemos recibido tu información. Te contactaremos pronto.',
      })

      // Limpiar formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        statusAcademico: '',
      })
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Hubo un error al enviar tu información. Por favor, intenta de nuevo.',
      })
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <header className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
      {/* Complex Background */}
      <div className="absolute inset-0 bg-dots opacity-60"></div>
      <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-200 to-indigo-100 blur-3xl opacity-50 mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 blur-3xl opacity-50 mix-blend-multiply"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-noise opacity-50 pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl relative">
            <div className="inline-flex gap-2 text-[11px] font-semibold text-indigo-700 bg-white border border-indigo-100 rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm items-center hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Convocatoria Abierta 2026
            </div>
            
            <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl mb-6 leading-[1.05]">
              Tu carrera de enfermería <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient bg-300%">en Estados Unidos.</span>
            </h1>
            
            <p className="leading-relaxed text-lg text-slate-500 max-w-lg mb-10">
              Programa integral de financiamiento y empleabilidad. Te preparamos, financiamos tu proceso y te conectamos con hospitales en EE.UU.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="flex -space-x-4">
                <Image
                  className="h-12 w-12 rounded-full ring-4 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100"
                  alt="Nurse"
                  width={48}
                  height={48}
                />
                <Image
                  className="h-12 w-12 rounded-full ring-4 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100"
                  alt="Nurse"
                  width={48}
                  height={48}
                />
                <Image
                  className="h-12 w-12 rounded-full ring-4 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100"
                  alt="Doctor"
                  width={48}
                  height={48}
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 ring-4 ring-white text-xs font-bold text-slate-600 shadow-sm border border-slate-100">TN</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <iconify-icon icon="solar:star-bold" className="text-amber-400 text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-amber-400 text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-amber-400 text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-amber-400 text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-amber-400 text-sm"></iconify-icon>
                </div>
                <p className="text-sm font-medium text-slate-600">Patrocinio Visa TN-2 Garantizado</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative w-full max-w-md mx-auto lg:ml-auto group" id="aplicar">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl shadow-indigo-500/10 border border-white p-8">
              <div className="mb-8 border-b border-slate-100 pb-4">
                <h3 className="text-xl font-semibold text-slate-900">Pre-califica hoy</h3>
                <p className="text-xs text-slate-500 mt-1">Evaluación de perfil gratuita en 2 minutos.</p>
              </div>
              {message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${
                    message.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {message.text}
                </div>
              )}
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="nombre" className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="apellido" className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Apellido</label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      placeholder="Tu apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Email</label>
                  <div className="relative">
                    <iconify-icon icon="solar:letter-linear" className="absolute left-3 top-3 text-slate-400"></iconify-icon>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="statusAcademico" className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Status Académico</label>
                  <div className="relative">
                    <select
                      id="statusAcademico"
                      name="statusAcademico"
                      value={formData.statusAcademico}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:bg-white outline-none cursor-pointer hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="titulo">Licenciatura en Enfermería (Título)</option>
                      <option value="tramite">Licenciatura (En trámite)</option>
                      <option value="tecnico" disabled className="bg-slate-100 text-slate-400">Técnico (No elegible)</option>
                    </select>
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="absolute right-3 top-3 text-slate-400 pointer-events-none"></iconify-icon>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-4 group/btn disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Iniciar Evaluación
                      <iconify-icon icon="solar:arrow-right-linear" width="18" className="group-hover/btn:translate-x-1 transition-transform"></iconify-icon>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
