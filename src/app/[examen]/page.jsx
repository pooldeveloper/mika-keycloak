"use client"
import { useContext, useEffect } from "react";
import UniversidadContext from "@/src/context/universidad/UniversidadContext";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ExamenPage() {
    const ruta = usePathname();

    const { obtenerExamen, examen } = useContext(UniversidadContext)

    useEffect(() => {
        obtenerExamen(ruta)
    }, [])

    if (!examen) return null
    return (
        <div className="inicio">
            <h1 className="titulo">{examen.nombre}</h1>
            <h2>Instrucciones:</h2>
            <p>{examen.instrucciones}</p>
            <Link href={`/${examen.examen_id}/iniciando`}><button className="boton">Iniciar</button></Link>
        </div>
    );
}