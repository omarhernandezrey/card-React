import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  return (
    <Layout>
      <Card 
        food="Pasta" 
        imageUrl="https://i.pinimg.com/564x/4c/34/f0/4c34f0e70d69de7ca67c61cc6457d0b1.jpg" 
        title="Deliciosa pasta italiana" 
        grade="Pasta Italiana" 
        restaurant="Restaurante Italiano" 
        descripcion= "La pasta italiana es un plato icónico que deleita los sentidos con su combinación perfecta de sabores y texturas. Con una base de pasta al dente, adornada con una deliciosa salsa de tomate casera, esta obra maestra culinaria está coronada con generosas porciones de queso parmesano rallado y hierbas frescas. Cada bocado es una explosión de sabor que te transporta a las pintorescas calles de Italia. Ya sea que la disfrutes como plato principal o como acompañamiento, la pasta italiana siempre es una opción deliciosa y reconfortante para cualquier ocasión"
        price="$12.99" 
      />
    </Layout>
  );
}

export default Home;
