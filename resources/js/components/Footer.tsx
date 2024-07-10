import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon

} from "@heroicons/react/24/solid";

import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex flex-wrap items-start px-4 py-8 space-y-8 bg-primary-500 justify-evenly md:space-y-0">
                <div className="max-w-xs px-4">
                    <img src="/logo.png" className="h-24 brightness-[5]" alt="logo" />
                    <p className="py-4 space-y-2 text-justify text-white">
                        En SERAM J&M S.A.C., ofrecemos asesoría y consultoría ambiental, así como en seguridad y salud ocupacional. Estamos comprometidos a brindar eficiencia y satisfacción a nuestros clientes a nivel nacional.
                    </p>
                </div>
                <div className="px-4">
                    <h2 className="mb-4 text-2xl font-bold text-white">Contáctanos</h2>
                    <div className="py-4 space-y-6">
                        <div className="flex text-left">
                            <MapPinIcon height={20} fill="white" />
                            <p className="ml-2 text-white">Ica, Ica, Ica</p>
                        </div>
                        <a href="tel:+51908801290" className="flex text-left">
                            <PhoneIcon height={20} fill="white" />
                            <p className="ml-2 text-white">908801290</p>
                        </a>
                        <a href="mailto:jhernandez@seramjym.com" className="flex text-left">
                            <EnvelopeIcon height={20} fill="white" />
                            <p className="ml-2 text-white">jhernandez@seramjym.com</p>
                        </a>
                    </div>
                </div>
                <div className="px-4">
                    <h2 className="text-2xl font-bold text-white">Síguenos</h2>
                    <div className="flex items-start gap-4 py-4">
                        <a href="https://www.facebook.com/profile.php?id=100076313921057" target="_blank">
                            <BsFacebook size={30} color="white" />
                        </a>
                        <a href="https://www.linkedin.com/company/servicios-ambientales-j-m-s-a-c/" target="_blank">
                            <BsLinkedin size={30} color="white" />
                        </a>
                        <a href="https://wa.link/i54moz" target="_blank">
                            <BsWhatsapp size={30} color="white" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-6 bg-primary-700">
                <p className="px-4 text-xl text-center text-white">
                ©2024. Servicios Ambientales J&M S.A.C. | RUC: 20608187619
                </p>
            </div>
        </footer>
    )
}
