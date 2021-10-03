import React from 'react';
import styles from './Card.module.scss'


function Card(props) {

    const [isAdded, setAdded] = React.useState(false)

    const onClickPlus = () => {
        setAdded(!isAdded)

    }


    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onClickFavorite}>
                <img width={18} height={18} src='/img/lov.svg' alt='favorite'/>
            </div>
            <img width={180} height={170} src={props.imageUrl} alt='Spices'/>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.cardImg}>
                <div className={styles.cardInfo}>
                    <span>price:</span>
                    <b>{props.price}$</b>
                </div>
                <img className={styles.button}
                     onClick={onClickPlus}
                     src={isAdded ? '/img/chek.svg' : '/img/plu.svg' }
                     alt='Plus'/>

            </div>
        </div>
    );
};

export default Card;



