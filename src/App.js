import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";





function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCardItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)


    React.useEffect(() => {
        fetch('https://6159deec601e6f0017e5a326.mockapi.io/title')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setItems(json)
            });
    }, []);



    return (
        <div className="wrapper">
            {cartOpened && <Drawer onClose ={() => setCartOpened (false)} />}
            <Header onClickCart = {() => setCartOpened(true)} />


            <div className="content">
                <div className='content-search'>
                    <h1 className='contentH'>All spices</h1>
                    <div className='search-block'>
                        <img width={30} height={30} src='/img/zom.svg' alt='Search'/>
                        <input placeholder='Search...'/>
                    </div>
                </div>

                <div className='oll'>
                    {items.map((odj) =>(
                        <Card title={odj.title}
                              price={odj.price}
                              imageUrl={odj.imageUrl}
                              onClickFavorite={()=> (console.log('add in favorite' ))}
                              onClickPlus={() => console.log(odj)}/>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default App;
