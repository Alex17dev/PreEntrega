import './App.css'
import FormularioContainer from './components/FormularioContainer/FormularioContainer'
import { Layout } from './components/Layout/Layout'

import ProductosContainer from './components/Productos/ProductosContainer/ProductosContainer'
function App() {
  return (
    <>
      <Layout>
          <ProductosContainer Mensaje={"Discubri los mejores collares"} />
          <FormularioContainer />
      </Layout>

    </>
  )
}

export default App
