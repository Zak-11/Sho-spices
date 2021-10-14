import axios from "axios";
import React from "react";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Index from "./components/Drawer";
import Favorites from "./pages/Favorits";
import AppContext from './context';

import Header from "./components/Header";
import Orders from "./pages/Orders";




function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);




    React.useEffect(() => {

        async function fetchData() {
            const cartResponse = await   axios.get('https://6159deec601e6f0017e5a326.mockapi.io/card')
            const favoritesResponse = await axios.get('https://6159deec601e6f0017e5a326.mockapi.io/favorites');
            const itemsResponse = await  axios.get('https://6159deec601e6f0017e5a326.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);
    const onAddToCart = (obj) => {
     console.log(obj);
     if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
         axios.delete(`https://6159deec601e6f0017e5a326.mockapi.io/card${obj.id}`)
         setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
     }else {
         axios.post('https://6159deec601e6f0017e5a326.mockapi.io/card', obj)
    setCartItems((prev) => [...prev, obj]);
     }
 };
    const onRemoveItem = (id) => {

      axios.delete(`https://6159deec601e6f0017e5a326.mockapi.io/card/${id}`)
      setCartItems((prev) => prev.filter((item) => item.id !== id));

  }
    const onAddToFavorite = async (obj) => {
          try {
              if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                  axios.delete(`https://6159deec601e6f0017e5a326.mockapi.io/favorites/${obj.id}`)
                  setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
              } else {
                  const { data } = await  axios.post('https://6159deec601e6f0017e5a326.mockapi.io/favorites', obj);
                  setFavorites((prev) => [...prev, data]);
              }
          } catch (error) {
              alert('Failed to add to favorites');
          }
      };
    const onChangeSearchInput = (event) => {
     setSearchValue(event.target.value)
 }

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id));
    };


    return (
        <AppContext.Provider value={{items, cartItems, favorites,  isItemAdded,onAddToFavorite, setCartOpened, setCartItems }}>
        <div className="wrapper clear">
            {cartOpened && (
                <Index items={cartItems}
                       onClose={() => setCartOpened(false)}
                       onRemove={onRemoveItem} />
            )}
            <Header onClickCart={() => setCartOpened(true)} />

            <Route path="/" exact>
                <Home
                    items={items}
                    cartItems={cartItems}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    isLoading={isLoading}

                />
            </Route>

            <Route path="/favorites" exact>
                <Favorites onAddToFavorite={onAddToFavorite} />
            </Route>

            <Route path="orders" exact>
                <Orders />
            </Route>

        </div>
        </AppContext.Provider>
    );
}

export default App;
