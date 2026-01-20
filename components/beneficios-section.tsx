export const BeneficiosSection = () => {
  return (
    <section className="py-24 relative bg-slate-900 text-white overflow-hidden" id="beneficios">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-noise opacity-[0.07]"></div>
      <div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
      <div className="-translate-x-1/2 blur-[120px] bg-indigo-500/20 w-full h-[500px] rounded-full absolute top-0 left-1/2"></div>

      <div className="lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-indigo-400/50"></span>
            Beneficios Exclusivos
            <span className="w-8 h-px bg-indigo-400/50"></span>
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl text-white">Recompensa tu esfuerzo a nivel internacional.</h3>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Salary */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 p-8 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-semibold text-white">Ingresos Competitivos</h4>
                  <p className="text-slate-400 mt-2 text-sm">Sueldos de tiempo completo (40h+).</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                  <iconify-icon icon="solar:dollar-bold" width="20"></iconify-icon>
                </div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/5">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">
                  $1,000 - $2,200 <span className="text-sm font-medium text-slate-500">USD/Semana</span>
                </div>
                <div className="mt-2 text-sm text-indigo-400 font-medium">$25 a $55 USD por hora laboral</div>
              </div>
            </div>
          </div>

          {/* Card 2: Residency */}
          <div className="md:col-span-5 relative overflow-hidden rounded-3xl group border border-white/10 bg-slate-800/50 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent"></div>
            <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 mb-6 relative z-10">
              <iconify-icon icon="solar:home-bold" width="20"></iconify-icon>
            </div>
            <h4 className="text-xl font-semibold text-white relative z-10">Residencia Americana</h4>
            <p className="text-sm text-slate-400 mt-2 font-light relative z-10">
              Oportunidad de obtener la residencia permanente (Green Card) al término de tu contrato de 3 años.
            </p>
          </div>

          {/* Card 3: Family */}
          <div className="md:col-span-6 relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 p-8 hover:bg-slate-800 transition-colors group">
            <div className="flex justify-between items-start">
              <div>
                <div className="h-10 w-10 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center border border-pink-500/20 mb-4">
                  <iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                </div>
                <h4 className="text-lg font-semibold text-white">Familia Incluida</h4>
                <p className="text-sm text-slate-400 mt-2 pr-4">
                  Los familiares directos (cónyuge e hijos dependientes) pueden acompañarte a vivir en Estados Unidos. VISAS TD para tus familiares directos esposa(o), hijos hasta los 18 años.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: TN Visa */}
          <div className="md:col-span-6 relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 p-8 hover:bg-slate-800 transition-colors group">
            <div className="flex justify-between items-start">
              <div>
                <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 mb-4">
                  <iconify-icon icon="solar:passport-linear" width="20"></iconify-icon>
                </div>
                <h4 className="text-lg font-semibold text-white">Patrocinio Visa TN-2</h4>
                <p className="text-sm text-slate-400 mt-2 pr-4">
                  Patrocinio de VISA TN-2 para trabajar legalmente en Estados Unidos, para enfermera(o)s. Gestionamos tu visa de trabajo profesional bajo el tratado T-MEC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
