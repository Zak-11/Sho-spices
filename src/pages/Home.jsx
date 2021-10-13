import React from 'react';
import Card from "../components/Card";

function Home ({items,
               searchValue,
               setSearchValue,
               onChangeSearchInput,
               onAddToFavorite,
               onAddToCart, isLoading
}) {
    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isLoading}
                {...item}
            />
        ));
    };



    return(
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `All spices`}</h1>
                <div className="search-block d-flex">
                        <img width={30} height={30}
                            src='/img/zom.svg'
                            alt='Search'/>
                        {searchValue &&(
                        <img
                            onClick={() =>setSearchValue('')}
                             className="clear cu-p"
                             src='/img/rem.svg'
                             alt='Clear'
                        />
                        ) }
                        <input onChange={onChangeSearchInput}
                               value={searchValue}
                               placeholder='Search...'/>
                      </div>
                </div>

            <div className="d-flex flex-wrap">
                {renderItems()}</div>
            </div>
    );
    }

export default Home;