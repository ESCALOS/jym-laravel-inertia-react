import Breadcrumb from "@/components/Breadcrumb"
import Layout from "@/layouts/Layout"
import { Head } from "@inertiajs/react"

export default function Client() {
    const imgClients = [
        "agricola-athos",
        "agricola-copacabana",
        "belen",
        "challapampa",
        "don-ricardo",
        "donfermin",
        "el-rancho",
        "estanislao",
        "exfrusur",
        "fundo-don-manuel",
        "fundo-el-arenal",
        "fundo-las-casuarinas",
        "gyg-arquitectos",
        "huarmey",
        "ingecon",
        "la-calera",
        "las-piedras",
        "llaxta",
        "los-laureles",
        "los-olivos",
        "mamay",
        "milagritos-fundo",
        "municipalidad-ica",
        "pararca",
        "pomica",
        "urbanizacion-jacaranda",
        "vanguard-international",
        "vida"
    ]
    return (
        <Layout>
            <Head title="Clientes" />
            <Breadcrumb imgPath="/images/banner5.webp" title="Clientes" subtitle="Presentación Corporativa" />
            <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto max-w-7xl">
                <div>
                    <h1 className="text-4xl font-bold text-center">
                        Nuestras <br />Empresas Aliadas
                    </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    {
                        imgClients.map((client, index) => (
                            <div className="bg-gray-400 rounded-md" key={index}>
                                <img className="rounded-md" src={`/images/logos-clientes/${client}.png`} width={250} alt={`${client}-logo`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
