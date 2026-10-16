import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EquipoContainer from "../Equipo/EquipoContainer/EquipoContainer";
export function Layout({children}) {
    return (
        <div>  
            <Header />
            <main>
                {children}            
                <section>
                    <EquipoContainer Mensaje={"CONTACTOS"}/>
                </section>
                
            </main>
            <Footer />
        </div>
    )
}