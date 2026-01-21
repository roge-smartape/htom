import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Resend no está configurado. Por favor configura RESEND_API_KEY en tus variables de entorno.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { tipo, datos } = body

    const emailDestino = process.env.EMAIL_DESTINO || 'tu-email@ejemplo.com'
    const emailDesde = process.env.EMAIL_DESDE || 'onboarding@resend.dev'

    const asunto = `Nueva Solicitud - ${datos.nombres} ${datos.apellidos}`
    const contenidoHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">Nueva Solicitud</h2>
        <p>Has recibido una nueva solicitud:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Nombre(s):</td>
            <td style="padding: 10px;">${datos.nombres}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Apellidos:</td>
            <td style="padding: 10px;">${datos.apellidos}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Email:</td>
            <td style="padding: 10px;">${datos.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Teléfono/WhatsApp:</td>
            <td style="padding: 10px;">${datos.telefono}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Nivel de Inglés:</td>
            <td style="padding: 10px;">${datos.nivelIngles}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Status Académico:</td>
            <td style="padding: 10px;">${datos.statusAcademico}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Acepta Términos:</td>
            <td style="padding: 10px;">${datos.aceptaTerminos ? 'Sí' : 'No'}</td>
          </tr>
        </table>
        <p style="color: #6b7280; font-size: 14px;">Fecha: ${new Date().toLocaleString('es-MX')}</p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: emailDesde,
      to: [emailDestino],
      subject: asunto,
      html: contenidoHtml,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return NextResponse.json(
        { error: 'Error al enviar el email', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email enviado correctamente', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en API:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
