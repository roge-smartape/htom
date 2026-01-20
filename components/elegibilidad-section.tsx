export const ElegibilidadSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-slate-900">Requisitos de Elegibilidad</h2>
            <p className="text-sm text-slate-500 mt-2">Filtros estrictos para asegurar la aprobación de tu visa TN.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex-shrink-0 flex items-center justify-center">
                <iconify-icon icon="solar:diploma-verified-linear" width="20"></iconify-icon>
              </div>
              <div>
                <span className="font-bold text-sm text-slate-900 block mb-1">Licenciatura en Enfermería</span>
                <p className="text-xs text-slate-500">Título y Cédula Profesional indispensables. <span className="text-red-500 font-medium block mt-1">❌ Técnicos NO son elegibles.</span></p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex-shrink-0 flex items-center justify-center">
                <iconify-icon icon="solar:passport-linear" width="20"></iconify-icon>
              </div>
              <div>
                <span className="font-bold text-sm text-slate-900 block mb-1">Nacionalidad Mexicana</span>
                <p className="text-xs text-slate-500">Requisito obligatorio por el tratado T-MEC para la visa TN.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
