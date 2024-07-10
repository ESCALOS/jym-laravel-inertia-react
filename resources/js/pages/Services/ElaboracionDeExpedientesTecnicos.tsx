import Breadcrumb from "@/components/Breadcrumb"
import LeafIcon from "@/components/icons/leaf"
import ImageContent from "@/components/ImageContent"
import Layout from "@/layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ElaboracionDeExpedientesTecnicos() {
    const tools = [
        "Expediente DIRESA",
        "Expediente DIGESA",
        "Autorización para el reúso de aguas residuales tratadas",
        "Acreditación de disponibilidad hídrica para otorgar derechos de uso de agua",
        "Autorización para la ejecución de obras de aprovechamiento hídrico y obtención de licencia de uso de agua en procedimiento simplificado para la ejecución de proyectos"
    ]

    return (
        <Layout>
            <Head title="Elaboración de Expedientes Técnicos" />
            <Breadcrumb imgPath="/images/banner5.webp" title="Servicios" subtitle="Elaboración de Expedientes Técnicos" />
            <div className="py-16 mt-4 space-y-24">
                <div className="px-4 mx-auto max-w-7xl">
                    <p className="text-lg text-left text-primary-500">Servicios Ambientales J&M S.A.C.</p>
                    <h2 className="text-4xl font-bold">Elaboración de Expedientes Técnicos</h2>
                    <p className="my-2 text-lg font-light text-justify text-zinc-500">
                        Los <span className="font-bold">Expedientes Técnicos </span>
                        son documentos que contienen toda la información técnica, administrativa y económica necesaria para la ejecución de un proyecto de construcción, infraestructura o instalación. Este proceso debe llevarse a cabo con cuidado y profesionalismo, ya que de ello depende el cumplimiento del objetivo principal de la obra.</p>
                    <p className="my-2 text-lg font-light text-justify text-zinc-500">
                        Estos expedientes incluyen una memoria descriptiva del proyecto, planos de ubicación, diseños y especificaciones técnicas, cronogramas de ejecución de obras, y otros documentos relevantes.
                    </p>
                </div>
                <ImageContent imgPath="/images/banner5.webp" title="Elaboración de Expedientes Técnicos">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-around px-8 mx-auto py-14 max-w-7xl">
                        {
                            tools.map((tool, index) => {
                                const isLastAndOdd = (index === tools.length - 1) && (index % 2 === 0);
                                return (
                                <div key={index} className={`flex flex-col items-center justify-center w-full py-24 px-4 text-center ${isLastAndOdd ? 'lg:col-span-2' : ''}`}>
                                    <LeafIcon color="white" />
                                    <p className="text-4xl font-black text-white">{tool}</p>
                                </div>
                            )})
                        }
                    </div>
                </ImageContent>
            </div>

        </Layout>
    )
}
