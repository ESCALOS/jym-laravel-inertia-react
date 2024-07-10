import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"
import Layout from "@/layouts/Layout"
import { Head } from "@inertiajs/react"

export default function Contact() {
    return (
        <Layout>
            <Head title="Contáctenos" />
            <Breadcrumb imgPath="/images/banner1.webp" title="Contáctenos" subtitle="Presentación Corporativa" />
            <ContactForm />
        </Layout>
    )
}
