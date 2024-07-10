import Breadcrumb from "@/components/Breadcrumb"
import LeafIcon from "@/components/icons/leaf"
import ImageContent from "@/components/ImageContent"
import Layout from "@/layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ServiciosDeMonitoreosOcupacionales() {
    const tools = [
        {
            name: "Agentes Físicos:",
            items: [
                "Ruido (Sonometría y Dosimetría)",
                "Iluminación",
                "Vibraciones mano - brazo",
                "Vibraciones cuerpo entero",
                "Estrés térmico (calor y frío)",
                "Radiaciones UV, otros"
            ]
        },
        {
            name: "Agentes Químicos:",
            items: [
                "Polvo respirable e inhalable",
                "Compuestos orgánicos volátiles",
                "(COV´s)",
                "Humos metálicos de soldadura",
                "Gases, Vapores, otros"
            ]
        },
        {
            name: "Agentes Biológicos:",
            items: [
                "Aerófilos mesófilos",
                "Mohos y levaduras",
                "Coliformes",
                "Agua para consumo"
            ]
        },
        {
            name: "Agentes Psicosociales:",
            items: [
                "Exigencias psicológicas",
                "Doble presencia",
                "Control sobre el trabajo"
            ]
        },
        {
            name: "Factores de Riesgo Disergonómico:",
            items: [
                "Posturas forzadas",
                "Levantamiento manual de carga",
                "Movimientos repetitivos",
                "Diversas metodologías de evaluación"
            ]
        }
    ]

    return (
        <Layout>
            <Head title="Servicios de Monitoreos Ocupacionales" />
            <Breadcrumb imgPath="/images/banner3.webp" title="Servicios" subtitle="Servicios de Monitoreos Ocupacionales" />
            <div className="py-16 mt-4 space-y-24">
                <div className="px-4 mx-auto max-w-7xl">
                    <p className="text-lg text-left text-primary-500">Servicios Ambientales J&M S.A.C.</p>
                    <h2 className="text-4xl font-bold">Monitoreos Ocupacionales</h2>
                    <p className="my-2 text-lg font-light text-justify text-zinc-500">
                        Los <span className="font-bold">Monitoreos Ocupacionales </span>
                        permiten la evaluación y control de los riesgos y peligros en el entorno laboral, con el objetivo de proteger la seguridad y la salud de los trabajadores.</p>
                </div>
                <ImageContent imgPath="/images/banner3.webp" title="Servicios de Monitoreos Ocupacionales">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-around px-8 mx-auto py-14 max-w-7xl">
                    {
                        tools.map((tool, index) => (
                            <div key={index} className="flex flex-col justify-start p-8 text-white">
                                <LeafIcon color="white" />
                                <p className="mb-4 text-3xl font-black">{tool.name}</p>
                                <ul className="ml-4 space-y-4 list-disc">
                                    {
                                        tool.items.map((item, index2) => (
                                            <li key={index2} className="text-2xl">{item}</li>
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
