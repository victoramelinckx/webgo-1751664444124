
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en Solo Un Día" subheadline="Transformamos tus recomendaciones en ventas digitales en menos de 24 horas, con soporte constante para que no te preocupes por nada." cta1="Digitaliza Ahora" />
<How step1Title="Contáctanos" step1Desc="Dinos qué vendes y tus objetivos." step2Title="Creamos tu web" step2Desc="En 24 horas tendrás tu tienda online." step3Title="Soporte constante" step3Desc="Asistencia 24/7 para tus ventas digitales." />
<Aboutus headline="WebGo: Digitaliza tu negocio ya" subheadline="WebGo crea tu web y gestiona ventas para que te enfoques en crecer." beneficiotitulo1="Gestión Total" beneficio1="Nos encargamos de todo online." beneficiotitulo2="Ventas Aumentadas" beneficio2="Transformamos recomendaciones en ventas." />
<Services heading="Digitaliza Tu Negocio y Aumenta Ventas" description="Creamos tu tienda online en 24 horas, sin complicaciones." services={[{"name":"Desarrollo Express","icon":"rocket","description":"Web de ventas lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Optimización","icon":"search","description":"Mejora tu visibilidad online."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualizamos tu web sin esfuerzo."},{"name":"Integración de Pagos","icon":"credit-card","description":"Aumenta ventas con múltiples opciones."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Entiende a tus clientes fácilmente."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web impresionantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas si solo vendo por recomendación?","respuesta":"WebGo te ayuda a crear una presencia online efectiva, transformando recomendaciones en ventas digitales. Con un sitio web optimizado y estrategias de marketing digital, llegamos a más clientes que buscan lo que ofreces."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo para mi pequeño negocio?","respuesta":"Con WebGo, obtienes un sitio web profesional que atrae clientes y aumenta tus ventas. Nos encargamos de todo, desde el diseño hasta el marketing, para que tú te enfoques en lo que mejor sabes hacer."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo soluciona WebGo este problema?","respuesta":"WebGo se encarga de la gestión completa de tu sitio web, desde actualizaciones hasta marketing. Así, puedes concentrarte en tu negocio mientras nosotros impulsamos tus ventas en línea."},{"pregunta":"¿Es complicado generar ventas online con WebGo si no tengo experiencia?","respuesta":"Para nada. WebGo simplifica todo el proceso. Creamos estrategias efectivas que convierten visitas en ventas, sin que necesites ser un experto. Tú sigues haciendo lo que amas, nosotros nos encargamos del resto."},{"pregunta":"¿Qué diferencia a WebGo de otras empresas de diseño web para negocios pequeños?","respuesta":"WebGo se enfoca en resultados. No solo diseñamos páginas bonitas, sino que las optimizamos para que generen ventas. Nuestro enfoque es integral, ocupándonos de cada detalle para que tu negocio crezca online."}]} />
<BookAppointment 
                      heading="Transforma Tus Recomendaciones en Ventas Digitales" 
                      description="WebGo te ayuda a crear una presencia online efectiva sin que tengas que preocuparte por la gestión del sitio. Conviértete en la referencia digital de tu industria en Santiago y multiplica tus ventas hoy."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
