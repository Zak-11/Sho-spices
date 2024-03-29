import React from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from "../../context";



function Card({
                  id,
                  title,
                  imageUrl,
                  price,
                  onFavorite,
                  onPlus,
                  favorited = false,
                  loading = false,
              }) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const obj = { id, parentId: id, title, imageUrl, price };


    const onClickPlus = () => {
        onPlus(obj);

    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (

        <div className={styles.card}>

            {loading ? (
                <ContentLoader
                    speed={2}
                    width={150}
                    height={265}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="150" height="155"/>
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
                    <rect x="0" y="223" rx="5" ry="5" width="80" height="25"/>
                    <rect x="113" y="220" rx="11" ry="11" width="32" height="32"/>
                </ContentLoader>

            ) : (
                <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img width={18} height={18} src={isFavorite ? 'img/fav.jpg' : 'img/lov.svg'} alt='love'/>
                    </div>
                    <img width={180} height={170} src={imageUrl} alt='Spices'/>
                    <h3>{title}</h3>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price:</span>
                            <b>{price} $</b>
                        </div>
                        {onPlus && (
                        <img
                            className={styles.plus}
                            onClick={onClickPlus}
                            src={isItemAdded(id) ?'img/embl.png' : 'img/plu.svg'}
                            alt='Plus'/>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;



