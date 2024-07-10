import Breadcrumb from "@/components/Breadcrumb"
import LeafIcon from "@/components/icons/leaf"
import ImageContent from "@/components/ImageContent"
import Layout from "@/layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ServiciosDeMonitoreosAmbientales() {
    const tools = [
        {
            name: "Monitoreo de la Calidad de Aire:",
            items: [
                "Material Particulado PM<sub>10</sub>",
                "Dióxido de Azufre (SO<sub>2</sub>)",
                "Dióxido de Nitrógeno (NO<sub>2</sub>)",
                "Monóxido de Carbono (CO)",
                "Etc."
            ]
        },
        {
            name: "Monitoreo de la Calidad de Suelos:",
            items: [
                "Mercurio",
                "Cromo VI",
                "Cadmio",
                "Fracción de hidrocarburos F1 (C6-C10)",
                "Etc."
            ]
        },
        {
            name: "Monitoreo de la Calidad de Agua (Subterránea, Residual y Consumo Humano):",
            items: [
                "Aceites y Grasas",
                "Demanda Bioquímica de Oxígeno (DBO<sub>5</sub>)",
                "Potencial de Hidrógeno (pH)",
                "Temperatura",
                "Etc."
            ]
        },
        {
            name: "Monitoreos de Flora, Fauna:",
            items: [
                "Herpetofauna",
                "Mastofauna",
                "Ornitofauna",
                "Entomología",
                "Etc."
            ]
        },
        {
            name: "Monitoreo de la Calidad de Ruido Ambiental",
            items: []
        }
    ]

    return (
        <Layout>
            <Head title="Servicios de Monitoreos Ambientales" />
            <Breadcrumb imgPath="/images/banner2.webp" title="Servicios" subtitle="Servicios de Monitoreos Ambientales" />
            <div className="py-16 mt-4 space-y-24">
                <div className="px-4 mx-auto max-w-7xl">
                    <p className="text-lg text-left text-primary-500">Servicios Ambientales J&M S.A.C.</p>
                    <h2 className="text-4xl font-bold">Servicios de Monitoreos Ambientales</h2>
                    <p className="my-2 text-lg font-light text-justify text-zinc-500">
                        Los <span className="font-bold">Monitoreos Ambientales </span>
                        se llevan a cabo para medir la presencia y nivel de contaminación en los componentes ambientales, tales como el aire, agua y suelo; implicando la recolección, procesamiento y evaluación de datos sobre diversos parámetros. Estos datos se analizan e interpretan para generar información sobre el estado del medio ambiente y los factores que lo afectan.</p>
                    <p className="my-2 text-lg font-light text-justify text-zinc-500">
                        Cabe destacar que nuestros servicios de monitoreo están acreditados en todas sus etapas, desde el muestreo hasta la obtención de resultados.
                    </p>
                </div>
                <ImageContent imgPath="/images/banner2.webp" title="Servicios de Monitoreos Ambientales">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-around px-8 mx-auto py-14 max-w-7xl">
                    {
                        tools.map((tool, index) => (
                            <div key={index} className="flex flex-col justify-start p-8 text-white">
                                <LeafIcon color="white" />
                                <p className="mb-4 text-3xl font-black">{tool.name}</p>
                                <ul className="ml-4 space-y-4 list-disc">
                                    {
                                        tool.items.map((item, index2) => (
                                            <li key={index2} className="text-2xl" dangerouslySetInnerHTML={{ __html: item }}></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                </ImageContent>
            </div>
        </Layout>
    )
}
