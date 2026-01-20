export const FinanciamientoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="financiamiento">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <iconify-icon icon="solar:wallet-money-bold" width="20"></iconify-icon>
            Sin preocupaciones financieras
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
            Totalmente Financiado
          </h2>
          <p className="text-slate-500 text-lg">
            El costo total depende de tu nivel de inglés, tu estilo de aprendizaje y el proveedor de capacitación que elijas. Te ayudamos a seleccionar la opción que mejor se adapte a tus necesidades y a tu presupuesto.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Tu único pago inicial</h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold">$176</span>
              <span className="text-xl opacity-80">USD</span>
            </div>
            <p className="mt-3 text-indigo-100">Para asegurar tu lugar en el programa</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Costos */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-slate-900 mb-6">Costos de capacitación, exámenes y visa:</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="font-semibold text-slate-900 mb-2">Desde $1,950 USD en total</p>
                  <p className="text-sm text-slate-600">Ideal si ya aprobaste el TOEFL y únicamente necesitas la preparación para el NCLEX, el acompañamiento en el proceso de visa y puedes cubrir tus gastos por tu cuenta.</p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <p className="font-semibold text-slate-900 mb-2">Opciones de financiamiento: $2,306 - $4,696 USD</p>
                  <p className="text-sm text-slate-600">Con pagos basados en tus ingresos. Esto incluye:</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="solar:check-circle-bold" className="text-indigo-600 mt-0.5" width="16"></iconify-icon>
                      <span>Acompañamiento completo con educadores de alta calidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="solar:check-circle-bold" className="text-indigo-600 mt-0.5" width="16"></iconify-icon>
                      <span>Cursos de inglés en línea en vivo para todos los niveles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="solar:check-circle-bold" className="text-indigo-600 mt-0.5" width="16"></iconify-icon>
                      <span>Preparación para el NCLEX</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="solar:check-circle-bold" className="text-indigo-600 mt-0.5" width="16"></iconify-icon>
                      <span>Cuotas de los exámenes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="solar:check-circle-bold" className="text-indigo-600 mt-0.5" width="16"></iconify-icon>
                      <span>Apoyo para la visa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="solar:check-circle-bold" className="text-indigo-600 mt-0.5" width="16"></iconify-icon>
                      <span>Costos del financiamiento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100">
              <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <iconify-icon icon="solar:info-circle-bold" className="text-green-600" width="24"></iconify-icon>
                Financiamiento diseñado para Enfermeras(os)
              </h4>
              <p className="text-sm text-green-700 font-medium mb-6">Nuestro modelo es de bajo riesgo: Paga cuando trabajes.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <iconify-icon icon="solar:play-circle-bold" className="text-green-600 mt-1 flex-shrink-0" width="20"></iconify-icon>
                  <div>
                    <span className="font-medium text-slate-900">Inicio de pagos</span>
                    <p className="text-sm text-slate-600">El plan mensual solo se activa una vez que hayas sido contratado por la Agencia de Empleabilidad en Estados Unidos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <iconify-icon icon="solar:shield-check-bold" className="text-green-600 mt-1 flex-shrink-0" width="20"></iconify-icon>
                  <div>
                    <span className="font-medium text-slate-900">Protección ante deserción</span>
                    <p className="text-sm text-slate-600">Si no completas el programa, no apruebas el TOEFL o el NCLEX, o no obtienes el contrato, tu deuda se ajustará automáticamente. En lugar de pagar el monto total, accederás a un plan alternativo de 36 meses que reduce significativamente el saldo pendiente (por ejemplo, un máximo de $135.78 USD al mes).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <iconify-icon icon="solar:book-bookmark-bold" className="text-green-600 mt-1 flex-shrink-0" width="20"></iconify-icon>
                  <div>
                    <span className="font-medium text-slate-900">Flexibilidad educativa</span>
                    <p className="text-sm text-slate-600">Aunque financiamos los cursos de preparación actuales, si prefieres estudiar con otro proveedor educativo, Quotanda también puede financiar esa alternativa. Lo importante es que logres aprobar el NCLEX.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <iconify-icon icon="solar:wallet-money-bold" className="text-green-600 mt-1 flex-shrink-0" width="20"></iconify-icon>
                  <div>
                    <span className="font-medium text-slate-900">Pagos mensuales accesibles</span>
                    <p className="text-sm text-slate-600">Los pagos mensuales son de <span className="font-semibold">$435 USD o menos</span>, durante unos pocos meses.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-5 border border-green-200 mb-4">
                <p className="text-sm text-slate-700 text-center">
                  <iconify-icon icon="solar:chat-round-dots-bold" className="text-green-600 mr-1" width="18"></iconify-icon>
                  <span className="font-medium">Ponte en contacto con nosotros</span> para aclarar tus necesidades y trabajaremos en conjunto para diseñar la opción que mejor te funcione.
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-4 border border-green-200">
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">*</span> El crédito requiere un Aval. Se recomienda que el solicitante o Aval tengan un puntaje mínimo de 650 en Buró de crédito.
                </p>
              </div>
            </div>

            {/* Bonus */}
            <div className="mt-8 text-center p-6 bg-amber-50 rounded-2xl border border-amber-200">
              <iconify-icon icon="solar:gift-bold" className="text-amber-600" width="32"></iconify-icon>
              <p className="font-semibold text-slate-900 mt-2">Bono de Contratación: <span className="text-green-600">-$1,000 USD</span></p>
              <p className="text-sm text-slate-600">Si utilizas financiamiento, se aplicará a tu préstamo cuando comiences a trabajar en Estados Unidos, reduciendo tu saldo y tus pagos mensuales.</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 bg-slate-100 rounded-xl p-6 border border-slate-200">
          <h5 className="font-semibold text-slate-900 mb-2">Costos adicionales:</h5>
          <p className="text-sm text-slate-600">
            Los costos adicionales de solicitud de visa (VISA TD) para cada familiar son aproximadamente <span className="font-semibold">$450 USD por persona</span> y <span className="font-semibold">NO están incluidos en el financiamiento</span>. Este costo debe ser cubierto por el solicitante.
          </p>
        </div>
      </div>
    </section>
  )
}
