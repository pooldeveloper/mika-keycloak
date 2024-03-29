import UniversidadState from "../context/universidad/UniversidadState"
import Head from "next/head";
import '../styles/globals.css'; 

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <UniversidadState>
          {children}
        </UniversidadState>
      </body>
    </html>
  )
}
