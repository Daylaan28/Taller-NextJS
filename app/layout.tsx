import type { Metadata } from "next";
import "./globals.css";

// Definimos una interfaz para las propiedades del layout
interface RootLayoutProps {
  children: React.ReactNode; // Para que el layout reciba cualquier componente hijo
  pageTitle?: string;         // Un título personalizado para la página
  themeColor?: string;        // Color de fondo personalizado
}

// Definimos la metadata
export const metadata: Metadata = {
  title: "Gestión de Notas",
  description: "Plataforma para gestión de notas de estudiantes",
};

// Componente RootLayout con las propiedades tipadas por RootLayoutProps
export default function RootLayout({
  children,
  pageTitle = "Gestión de Notas", // Si no se pasa título, usa un valor por defecto
  themeColor = "#E9E9E9",        // Si no se pasa color, usa el gris claro
}: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <title>{pageTitle}</title> {/* Usar el título recibido como propiedad */}
      </head>
      <body
        className={`font-Anaheim antialiased`}
        style={{ backgroundColor: themeColor }} // Usar el color de fondo personalizado
      >
        {children}
      </body>
    </html>
  );
}

