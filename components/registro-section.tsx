'use client'

import { useState } from 'react'
import type { RegistroFormData } from '@/types'

export const RegistroSection = () => {
  const [formData, setFormData] = useState<RegistroFormData>({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    nivelIngles: '',
    aceptaTerminos: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.aceptaTerminos) {
      setMessage({
        type: 'error',
        text: 'Debes aceptar la política de privacidad para continuar.',
      })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'registro-completo',
          datos: formData,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario')
      }

      setMessage({
        type: 'success',
        text: '¡Gracias! Hemos recibido tu solicitud completa. Un asesor especializado te contactará pronto.',
      })

      // Limpiar formulario
      setFormData({
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
        nivelIngles: '',
        aceptaTerminos: false,
      })
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.',
      })
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden" id="registro-final">
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Comienza tu viaje hoy</h2>
          <p className="mt-4 text-slate-400 text-lg">Déjanos tus datos completos y un asesor especializado te contactará para evaluar tu perfil.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-indigo-500/10 border border-white/10">
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              {message.text}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nombres" className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Nombre(s)</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  placeholder="Ej. Ana María"
                  value={formData.nombres}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="apellidos" className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Apellidos</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Ej. Pérez López"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nombre@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="telefono" className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="+52 (55) 1234 5678"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="nivelIngles" className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Nivel de Inglés Actual</label>
              <div className="relative">
                <select
                  id="nivelIngles"
                  name="nivelIngles"
                  value={formData.nivelIngles}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-indigo-600 focus:bg-white outline-none cursor-pointer hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="basico">Básico (A1-A2)</option>
                  <option value="intermedio">Intermedio (B1-B2)</option>
                  <option value="avanzado">Avanzado (C1+)</option>
                </select>
                <iconify-icon icon="solar:alt-arrow-down-linear" className="absolute right-4 top-3.5 text-slate-400 pointer-events-none"></iconify-icon>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <div className="flex h-5 items-center">
                <input
                  id="aceptaTerminos"
                  name="aceptaTerminos"
                  type="checkbox"
                  checked={formData.aceptaTerminos}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="text-xs text-slate-500">
                <label htmlFor="aceptaTerminos" className="font-medium text-slate-700">Acepto la política de privacidad</label>
                <p>Doy consentimiento para ser contactado por WhatsApp o correo sobre el programa.</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Solicitud Completa
                  <iconify-icon icon="solar:plain-bold" width="20" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
                </>
              )}
            </button>
            
            <p className="text-center text-[10px] text-slate-400 mt-4">
              Tus datos están protegidos y no serán compartidos con terceros sin tu consentimiento.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
