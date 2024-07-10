import Breadcrumb from "@/components/Breadcrumb"
import LeafIcon from "@/components/icons/leaf"
import ImageContent from "@/components/ImageContent"
import Layout from "@/layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ConstruccionDeSistemasDeTratamiento() {
    const tools = [
        "Tanque Séptico",
        "Pozo Percolador",
        "Biodigestores"
    ]

    return (
        <Layout>
            <Head title="Construccion de Sistemas de Tratamiento" />
            <Breadcrumb imgPath="/images/banner4.webp" title="Servicios" subtitle="Construccion de Sistemas de Tratamiento" />
            <div className="py-16 mt-4 space-y-24">
                <div className="px-4 mx-auto max-w-7xl">
                    <p className="text-lg text-left text-primary-500">Servicios Ambientales J&M S.A.C.</p>
                    <h2 className="text-4xl font-bold">Construcción de Sistemas de Tratamiento</h2>
                    <p className="my-2 text-lg font-light text-justify text-zinc-500">
                        La construcción de <span className="font-bold">Sistemas de Tratamiento </span>
                        implica la planificación, diseño, instalación y puesta en marcha de infraestructura para el tratamiento de aguas residuales, asegurando que se cumplan los estándares de calidad ambiental y salud pública.</p>
                </div>
                <ImageContent imgPath="/images/banner4.webp" title="Construccion de Sistemas de Tratamiento">
                    <div className="flex flex-wrap items-start justify-center w-full h-full p-6 mx-auto max-w-7xl">
                        {
                            tools.map((tool, index) => (
                                <div key={index} className="flex flex-col items-center justify-center w-full text-center py-24 md:w-1/2">
                                    <LeafIcon color="white" />
                                    <p className="text-4xl font-black text-white">{tool}</p>
                                </div>
                            ))
                        }
                    </div>
                </ImageContent>
            </div>

        </Layout>
    )
}
