// Components
import React from 'react';
import Header from '../components/header';
import Search from '../components/search';
import Categories from '../components/categories';
import Carousel from '../components/carousel';
import Item from '../components/item';
import Footer from '../components/footer';
// Styles
import '../assets/styles/app.scss';
// States
import useInitialState from '../hooks/useInitialState';

// Consts
const API = 'http://localhost:8080/initialState.json';

const App = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1> Loading... </h1> : (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist?.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            <Item />
          </Carousel>
        </Categories>
      }

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends?.map(item =>
            <Item key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      
      <Categories title="Originales de Platzi Video">
        <Carousel>
          <Item />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}
export default App;