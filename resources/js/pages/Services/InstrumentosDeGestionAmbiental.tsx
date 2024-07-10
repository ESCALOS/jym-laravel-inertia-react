import Breadcrumb from "@/components/Breadcrumb"
import LeafIcon from "@/components/icons/leaf"
import ImageContent from "@/components/ImageContent"
import Layout from "@/layouts/Layout"
import { Head } from "@inertiajs/react"

export default function InstrumentosDeGestionAmbiental() {
    const tools = [
        "Evaluación Ambiental Preliminar (EVAP)",
        "Declaración de Impacto Ambiental (DIA)",
        "Ficha Técnica Ambiental (FTA)",
        "Estudio de Impacto Ambiental Semidetallado (EIA-sd)",
        "Estudio de Impacto Ambiental Detallado (EIA-d)",
        "Programa de Adecuación y Manejo Ambiental (PAMA)",
        "Declaración de Adecuación Ambiental (DAA)",
        "Informe Técnico Sustentatorio (ITS)",
        "Modificaciones de Instrumentos de Gestión Ambiental",
        "Informe de Gestión Ambiental (IGA)"
    ]

    return (
        <Layout>
            <Head title="Instrumentos de Gestion Ambiental" />
            <Breadcrumb imgPath="/images/banner1.webp" title="Servicios" subtitle="Instrumentos de Gestion Ambiental" />
            <div className="py-16 mt-4 space-y-24">
                <div className="px-4 mx-auto max-w-7xl">
                    <p className="text-lg text-left text-primary-500">Servicios Ambientales J&M S.A.C.</p>
                    <h2 className="text-4xl font-bold">Instrumentos de Gestión Ambiental</h2>
                    <p className="my-2 text-lg font-light text-justify text-zinc-500">
                        Los <span className="font-bold">Instrumentos de Gestión Ambiental </span>
                        son fundamentales para planificar, ejecutar y controlar actividades que impactan el medio ambiente, y pueden ser correctivos o preventivos. Estos instrumentos incluyen estudios, evaluaciones y normativas diseñadas para mitigar el impacto ambiental, promoviendo prácticas sostenibles y responsables. Por ejemplo, las empresas en operación deben presentar Instrumentos de Gestión Ambiental correctivos, como la Declaración de Adecuación Ambiental (DAA), mientras que los proyectos nuevos necesitan instrumentos preventivos, como la Declaración de Impacto Ambiental (DIA). Estos instrumentos facilitan la identificación de riesgos y la implementación de medidas correctivas, asegurando que las operaciones de las empresas cumplan con las regulaciones ambientales.</p>
                </div>
                <ImageContent imgPath="/images/banner1.webp" title="Instrumentos de Gestion Ambiental">
                    <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-16 p-6 mx-auto py-14 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                        {
                            tools.map((tool, index) => (
                                <div key={index} className="px-4">
                                    <LeafIcon color="white" />
                                    <p className="text-3xl font-black text-white">{tool}</p>
                                </div>
                            ))
                        }
                        <div className="flex justify-center px-4 md:col-span-2">
                            <div>
                                <LeafIcon color="white" />
                                <br />
                                <div className="text-left text-white">
                                    <p className="block mb-2 text-3xl font-black">
                                        Instrumento de Gestión Ambiental y Fiscalización para la Formalización de Actividades de Pequeña Minería y Minería Artesanal (IGAFOM).
                                    </p>
                                    <span className="text-2xl">
                                        Tales instrumentos presentados a las autoridades tales como:
                                    </span>
                                    <ul className="ml-4 list-disc text-xl">
                                        <li>Ministerio de Desarrollo Agrario y Riego <b>(MIDAGRI)</b></li>
                                        <li>Ministerio de Producción <b>(PRODUCE)</b></li>
                                        <li>Ministerio de Energía y Minas <b>(MINEM)</b></li>
                                        <li>Servicio Nacional de Certificación Ambiental para las Inversiones Sostenibles <b>(SENACE)</b> entre otros, según corresponda.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageContent>
            </div>

        </Layout>
    )
}
