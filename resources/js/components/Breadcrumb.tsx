export default function Breadcrumb({ imgPath, title, subtitle }: {imgPath: string, title: string, subtitle: string}) {
    return (
        <div className="relative flex items-center justify-start h-64">
            <img src={imgPath} alt="nosotros" className="absolute object-cover object-top w-full h-full"/>
            <div className="absolute inset-0 bg-black opacity-80 mix-blend-multiply"></div>
            <div className="relative z-20 px-6 text-white max-w-7xl w-full mx-auto">
                <h3 className="text-4xl font-black">{title}</h3>
                <p>Inicio <span className="font-bold">➔</span> {subtitle}</p>
            </div>
        </div>
    )
}
