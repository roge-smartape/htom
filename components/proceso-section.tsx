import Image from 'next/image'

export const ProcesoSection = () => {
  return (
    <section className="py-24 bg-white relative" id="proceso">
      <div className="[background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide text-xs uppercase mb-3">Certificación Global</h2>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Tus llaves al éxito</h2>
          <p className="mt-4 text-slate-500 font-light text-lg">
            Dominar estos dos exámenes es el requisito fundamental para ejercer en EE.UU.
          </p>
        </div>

        {/* Definitions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30">TOEFL</div>
              <h3 className="text-lg font-bold text-slate-900">Inglés Universitario</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              El TOEFL (Test of English as a Foreign Language) es un examen reconocido internacionalmente que evalúa la capacidad de una persona para usar y comprender el idioma inglés a nivel universitario. Es un requisito fundamental para demostrar el dominio del idioma ante las autoridades migratorias y las Juntas de Enfermería (Board of Nursing) en Estados Unidos.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30">NCLEX</div>
              <h3 className="text-lg font-bold text-slate-900">Licencia Clínica RN</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              El NCLEX-RN (National Council Licensure Examination for Registered Nurses) es un examen estandarizado a nivel nacional en Estados Unidos que toda enfermera debe aprobar para obtener su licencia y ejercer legalmente como Enfermera Registrada (RN). Evalúa los conocimientos, habilidades y aptitudes necesarias para la práctica de la enfermería de forma segura y eficaz.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Roadmap de Preparación</h3>
            <div className="pl-2 relative space-y-10">
              <div className="absolute left-[27px] top-4 bottom-8 w-px bg-slate-200"></div>

              {/* Step 1 */}
              <div className="relative flex gap-6 group">
                <div className="flex-none h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm relative z-10 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-all">
                  <span className="font-bold text-lg font-mono">01</span>
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-slate-900">Preparación (Inglés y NCLEX)</h4>
                  <div className="inline-block bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 mt-1">6 meses o más</div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    El tiempo total del proceso varía según tu nivel de inglés inicial y tu dedicación. Cursos de inglés en línea en vivo para todos los niveles y preparación para el NCLEX.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 group">
                <div className="flex-none h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm relative z-10 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-all">
                  <span className="font-bold text-lg font-mono">02</span>
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-slate-900">Aprobación de exámenes</h4>
                  <div className="inline-block bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 mt-1">Inmediato</div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Trámites académicos, aprobación de exámenes y obtención de credenciales oficiales en EE.UU.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 group">
                <div className="flex-none h-14 w-14 rounded-2xl bg-indigo-600 border border-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 relative z-10">
                  <span className="font-semibold text-lg font-mono">03</span>
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-slate-900">Trámite de Visa de trabajo (TN-2)</h4>
                  <div className="inline-block bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 mt-1">Aproximadamente 3 meses</div>
                  <p className="leading-relaxed text-sm text-slate-500">
                    Oferta laboral, gestión consular de Visa TN-2 y traslado a tu nueva ciudad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            <div className="relative">
              {/* Sombras de color decorativas */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl blur-xl opacity-20"></div>
              
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a5e47bb-243a-4c10-8667-70b3faf5884c_800w.jpg"
                alt="Medical Study"
                width={800}
                height={500}
                className="relative rounded-2xl shadow-2xl shadow-indigo-500/40 object-cover h-full w-full rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white hover:shadow-indigo-500/60 hover:shadow-3xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.2), 0 10px 40px -10px rgba(168, 85, 247, 0.3)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
