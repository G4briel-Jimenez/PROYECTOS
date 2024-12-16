import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import React, { useState } from 'react';
import './Estilos.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
function Indices() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='Indices'>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home"><Link to="/Home">Página Principal</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/AcercaDanzas"><Link to="/AcercaDanzas">Acerca de Danzas</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Danzas de Bolivia
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link to="/Diablada">La Diablada</Link></DropdownItem>
                <DropdownItem><Link to="/Tinku">El Tinku</Link></DropdownItem>
                <DropdownItem><Link to="/Chacarrera">La Chacarera</Link></DropdownItem>
                <DropdownItem><Link to="/Morenada">La Morenada</Link></DropdownItem>
                <DropdownItem><Link to="/Caporal">El Caporal</Link></DropdownItem>
                <DropdownItem><Link to="/Saya">La Saya</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Realizado por gab</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Danzas de Bolivia</h5>
            <p>Una interesante cultura por Bolivia.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Redes sociales</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Barra = () => {
  return (
    <div className="Barra">
      <div className="sidebar-heading" style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>Mi Pagina en React</div>
      <Nav vertical style={{ padding: '1rem' }}>
        <Card style={{ width: '100%', margin: '0' }}>
          <img alt="Sample" src="https://www.cochabamba2018.bo/wp-content/uploads/2024/07/banderas-de-Bolivia-1.jpg" />
          <CardBody>
            <CardTitle tag="h5">BOLIVIA</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Danzas tradicionales</CardSubtitle>
            <CardText>
            Bolivia es un país diverso en cultura y geografía, con Andes y Amazonía.</CardText>
          </CardBody>
        </Card>
      </Nav>
    </div>
  );
};

function AcercaDanzas() {
  return (
    <div className="Contenido" style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #dee2e6', borderRadius: '.25rem', padding: '1rem', backgroundColor: '#fff', maxWidth: '800px', width: '100%', margin: '1rem' }}>
        <div style={{ padding: '8rem 1rem 1rem 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img style={{ width: '34%', height: 'auto', borderRadius: '.25rem' }} alt="Sample" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMOO61J3JDLuJnBirxCs8GBVeN-X0MX43Og&s" />
          <img style={{ width: '34%', height: 'auto', borderRadius: '.25rem' }} alt="Sample" src="https://assets.una.edu.ar/files/cursos/1648231567_2022-una-fo-curso-extension-danzas-bolivianas-960.jpg" />
        </div>
          <h5 style={{ fontSize: '1.25rem', marginBottom: '.75rem' }}>Las Danzas de Bolivia</h5>
          <h6 style={{ fontSize: '1rem', marginBottom: '.5rem', color: '#6c757d' }}>Expresión de una Cultura Viva</h6>
          <p style={{ marginBottom: '1rem' }}>Las danzas de Bolivia son una manifestación artística profundamente enraizada en su historia y diversidad cultural. Reflejan las tradiciones de los pueblos indígenas, afrodescendientes y mestizos, y cada danza tiene un significado simbólico relacionado con la naturaleza, las creencias ancestrales, la historia colonial, y las luchas sociales. A través de sus ritmos y movimientos, las danzas bolivianas celebran la conexión con la Pachamama (Madre Tierra), la resistencia de los pueblos originarios y la fusión de culturas a lo largo de los siglos. Son especialmente relevantes en festividades religiosas, carnavales y celebraciones patrias, donde grupos de bailarines, con trajes elaborados y colores vibrantes, representan escenas de la vida cotidiana, mitos y leyendas.</p>
        </div>
      </div>
    </div>                                                                                                                                                                                                                                          
  );
}

const items = [
  {
    src: 'https://gdb.voanews.com/01000000-0aff-0242-7a9f-08dc4fffc38b_w1200_r1.png',
    altText:'Comidas tipicas de Bolivia',
    caption:'Comidas tipicas de Bolivia',
    key: 1,
  },
  {
    src: 'https://cdn.bolivia.com/sdi/2022/10/06/conciertos-en-bolivia-artistas-internacionales-1072923-1.jpg',
    altText: 'Cantante Favorito',
    caption: 'Cantante Favorito',
    key: 2,
  },
  {
    src: 'https://www.dilitrust.com/wp-content/uploads/benefits_second_480.jpg',
    altText: 'Empresas de Bolivia',
    caption: 'Empresas de Bolivia',
    key: 3,
  },
  {
    src: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/07/mario-rabbids-kingdom-battle-2752889.jpg?tf=3840x',
    altText: 'Juegos populares',
    caption: 'Juegos populares',
    key: 4,
  },
  {
    src: 'https://www.buscador.com/wp-content/uploads/2020/02/producto2.jpg',
    altText: 'Productos de Bolivia',
    caption: 'Productos de Bolivia',
    key: 5,
  },
  {
    src: 'https://www.lima2019.pe/sites/default/files/2019-10/DEPORTES%20LIMA%202019.jpg',
    altText: 'Deportes de Bolivia',
    caption: 'Deportes de Bolvia',
    key: 6,
  },
  {
    src: 'https://media.es.wired.com/photos/66d094b8573dbae1acd0c70e/16:9/w_2560%2Cc_limit/GettyImages-1392983528.jpg',
    altText: 'Ropas de moda',
    caption: 'Ropas de moda',
    key: 7,
  },
  {
    src: 'https://www.uzonepackaging.com/wp-content/uploads/2024/04/beauty-overconsumption-e1713152475260.jpg',
    altText: 'Acerca de los maquillajes',
    caption: 'Acerca de los maquilajes',
    key: 8,
  },
  {
    src: 'https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2016/05/04/160504124628_gayetos_640x360_thinkstockgetty_nocredit.jpg.webp',
    altText: 'Aparatos electronicos',
    caption: 'Aparatos electronicos',
    key: 9,
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-img" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-wrapper">
      <h2 marginRight className="carusel-titulo">COSAS QUE TE PUEDAN INTERESAR</h2>
      <div className="carousel-container">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </div>
  );
}

function Diablada() {
  return (
    <div className="Contenido">
      <div style={{ display: 'flex', border: '1px solid #dee2e6', borderRadius: '.25rem', padding: '1rem', backgroundColor: '#fff' }}>
        <img alt="La Diablada" src="https://sayacaporal.com/wp-content/uploads/2022/08/danza-la-diablada-1.jpg" style={{ width: '50%', height: 'auto', borderRadius: '.25rem', marginRight: '1rem' }} />
        <div style={{ padding: '1rem' }}>
          <h5>La Diablada</h5>
          <h6 className="text-muted">La Diablada (La Paz y Oruro)</h6>
          <p>La Diablada es una danza representativa de la lucha entre el bien y el mal, donde los danzantes usan máscaras de demonios y ángeles, simbolizando la lucha espiritual. Es famosa en el Carnaval de Oruro, donde miles de bailarines desfilan al ritmo de música de metales y tambores. Los trajes son muy elaborados, destacando colores vivos y detalles simbólicos. La danza tiene raíces tanto en las creencias indígenas como en el sincretismo religioso con la llegada de los colonizadores. Su historia es una mezcla de leyendas indígenas, cristianismo y las creencias mitológicas andina.</p>
        </div>
      </div>
    </div>
  );
}

function Tinku() {
  return (
    <div className="Contenido">
      <div style={{ display: 'flex', border: '1px solid #dee2e6', borderRadius: '.25rem', padding: '1rem', backgroundColor: '#fff' }}>
        <img alt="La Diablada" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbe0uknUIWCoFh_AFbA4SmM0dUU8mpdYzFOQ&s" style={{ width: '50%', height: 'auto', borderRadius: '.25rem', marginRight: '1rem' }} />
        <div style={{ padding: '1rem' }}>
          <h5>El Tinku</h5>
          <h6 className="text-muted">El Tinku (Potosí, Chuquisaca):</h6>
          <p>El Tinku es una danza ritual que tiene sus orígenes en las comunidades indígenas del altiplano boliviano, especialmente en los departamentos de Potosí y Chuquisaca. Su nombre proviene de la palabra quechua que significa “encuentro” o “choque”, ya que originalmente representaba un combate entre dos grupos de personas. Los danzantes imitan una lucha simbólica, donde hombres y mujeres golpean con los pies y las manos al ritmo de la música de zampoñas y bombos. Aunque tiene un fuerte componente de lucha, también es una celebración de la fortaleza y la unión de la comunidad. Se baila en festividades y ceremonias religiosas, y es un homenaje a los dioses para pedir protección. Los trajes varían, pero generalmente incluyen ponchos de colores brillantes y adornos con plumas. El Tinku es una de las danzas más emblemáticas del mundo andino.</p>
        </div>
      </div>
    </div>
  );
}
function Chacarrera() {
  return (
    <div className="Contenido">
      <div style={{ display: 'flex', border: '1px solid #dee2e6', borderRadius: '.25rem', padding: '1rem', backgroundColor: '#fff' }}>
        <img alt="La Diablada" src="https://montescojeans.com.ar/wp-content/uploads/como-es-la-danza-de-la-chacarera.webp" style={{ width: '30%', height: 'auto', borderRadius: '.25rem', marginRight: '1rem' }} />
        <div style={{ padding: '1rem' }}>
          <h5>La Chacarera </h5>
          <h6 className="text-muted">La Chacarera (Santa Cruz, Tarija):</h6>
          <p>La Chacarera es una danza alegre y festiva originaria de Argentina, pero que ha sido adoptada en varias regiones de Bolivia, como Santa Cruz y Tarija. Es una danza de pareja, en la que ambos participantes se mueven al ritmo de guitarras, bombos y violines. La coreografía es sencilla pero llena de expresión, con movimientos que imitan la vida rural y las costumbres campesinas. En Santa Cruz, se ha fusionado con otros ritmos tropicales y se ha vuelto muy popular en las festividades locales, donde se representa la unidad y la alegría del pueblo. Los bailarines visten trajes tradicionales de campesinos, con pantalones y camisas a rayas para los hombres y faldas largas para las mujeres. La danza es un símbolo de la cultura campesina cruceña, y su popularidad ha crecido en varias partes de Bolivia. Aunque su origen es argentino, la Chacarera se ha convertido en una de las danzas más queridas en las fiestas bolivianas.</p>
        </div>
      </div>
    </div>
  );
}
function Morenada() {
  return (
    <div className="Contenido">
      <div style={{ display: 'flex', border: '1px solid #dee2e6', borderRadius: '.25rem', padding: '1rem', backgroundColor: '#fff' }}>
        <img alt="La Diablada" src="https://elrinconboliviano.com/wp-content/uploads/2020/11/morenada-tradicional-traje-del-moreno_500x600.jpg" style={{ width: '30%', height: 'auto', borderRadius: '.25rem', marginRight: '1rem' }} />
        <div style={{ padding: '1rem' }}>
          <h5>La Morenada </h5>
          <h6 className="text-muted">La Morenada (Oruro, La Paz, Potosí, Tarija):</h6>
          <p>La Morenada es una de las danzas más representativas de Bolivia, que refleja la resistencia y sufrimiento de los esclavos africanos durante la época colonial. Los bailarines visten trajes coloridos, con sombreros y máscaras de gran tamaño, emulando a los morenos que trabajaban en las minas. Se caracteriza por un ritmo lento pero fuerte, con pasos marcados y solemnes que simbolizan el trabajo pesado y la lucha por la libertad. La danza se acompaña de música festiva, especialmente con bombos, zampoñas y flautas. Aunque tiene un fuerte componente de sufrimiento, también celebra la resistencia y la identidad afroboliviana. La Morenada es vista como un homenaje a los afrodescendientes que vivieron y resistieron en la época colonial. Además, se ha convertido en una danza que se interpreta en diversas festividades a nivel nacional.</p>
        </div>
      </div>
    </div>
  );
}

function Caporal() {
  return (
    <div className="Contenido">
      <div style={{ display: 'flex', border: '1px solid #dee2e6', borderRadius: '.25rem', padding: '1rem', backgroundColor: '#fff' }}>
        <img alt="La Diablada" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0W8bTkdFrnA_x2ubwFodwYxjKYDwloQT18A&s" style={{ width: '50%', height: 'auto', borderRadius: '.25rem', marginRight: '1rem' }} />
        <div style={{ padding: '1rem' }}>
          <h5>El Caporal</h5>
          <h6 className="text-muted">El Caporal (Potosí, Oruro):</h6>
          <p>El Caporal es una danza de origen afroboliviano que representa a los capataces de las minas durante la época colonial, encargados de supervisar a los trabajadores indígenas y esclavos. Su coreografía es vigorosa y enérgica, con saltos y giros que simbolizan la dureza del trabajo en las minas. Los danzantes visten trajes de lujo, con botas altas, sombreros adornados con plumas y trajes brillantes que imitan el poder y la autoridad de los capataces. La danza está acompañada de música festiva, como el ritmo del bombo y las flautas. A pesar de su origen en la explotación, el Caporal se ha transformado en una danza de celebración de la resistencia y la lucha por la libertad. En el Carnaval de Oruro, el Caporal se interpreta con gran fervor, y se ha convertido en un símbolo de la identidad afroboliviana. Es una de las danzas más populares de Bolivia.</p>
        </div>
      </div>
    </div>
  );
}
function Saya() {
  return (
    <div className="Contenido">
      <div style={{ display: 'flex', border: '1px solid #dee2e6', borderRadius: '.25rem', padding: '1rem', backgroundColor: '#fff' }}>
        <img alt="La Diablada" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bOcDZkgL_Db4i1hpXVe9lzPsfZm21wh_WA&s" style={{ width: '50%', height: 'auto', borderRadius: '.25rem', marginRight: '1rem' }} />
        <div style={{ padding: '1rem' }}>
          <h5>La Saya</h5>
          <h6 className="text-muted">La Saya (Cochabamba y Santa Cruz):</h6>
          <p>Originaria de los afrodescendientes, la Saya es una danza festiva que refleja la cultura y tradiciones de los pueblos afrobolivianos. Se caracteriza por movimientos rápidos de cadera y pies, y es acompañada por tambores, charangos y guitarras, creando una atmósfera vibrante y energética. Es una danza de gran carga simbólica, que celebra la identidad y resistencia de los afrobolivianos frente a la opresión y el mestizaje. Los bailarines visten trajes coloridos, con las mujeres usando faldas amplias y los hombres camisas de manga larga. La Saya tiene raíces africanas, pero también se ha fusionado con elementos indígenas y mestizos. Además, es común verla en festivales y celebraciones, como el Carnaval de Cochabamba y la Fiesta de la Virgen de la Candelaria. Esta danza se ha vuelto un símbolo cultural de la resistencia afroboliviana en Bolivia.</p>
        </div>
      </div>
    </div>
  );
}

function Principal() {
  return (
    <div className='Padre'>
      <Indices />
      <div className="MiContenido">
        <Barra />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AcercaDanzas" element={<AcercaDanzas />} />
          <Route path="/Diablada" element={<Diablada />} />
          <Route path="/Tinku" element={<Tinku />} />
          <Route path="/Chacarrera" element={<Chacarrera />} />
          <Route path="/Morenada" element={<Morenada />} />
          <Route path="/Caporal" element={<Caporal />} />
          <Route path="/Saya" element={<Saya />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Principal;
