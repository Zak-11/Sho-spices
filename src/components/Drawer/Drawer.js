import React from "react";
import Info from "../info";
import axios from "axios";
import {useCart} from "../../hook/useCart";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://6159deec601e6f0017e5a326.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://6159deec601e6f0017e5a326.mockapi.io/card' + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <div className="drawer">

                <h2 className="d-flex justify-between mb-30">
                    Корзина <img
                                 onClick={onClose}
                                 className="cu-p"
                                 width={20} height={20} src='/img/rem.svg'
                                 alt="Close"/>
                </h2>

                {items.length > 0 ? (

                    <div className="items flex">
                        <div className="d-flex flex-column flex">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                        className="cartItemImg"></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        width={20} height={20}
                                        src='/img/rem.svg'
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>


                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>

                                    <b>{totalPrice} руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>

                                    <b>{(totalPrice / 100) * 5} руб. </b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                Оформить заказ<img src='/img/arr.svg' alt='arro'/>
                            </button>
                        </div>
                    </div>



                ) : (
                    <Info
                    title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                    description={
                    isOrderComplete
                    ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                    : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                }
                    image={isOrderComplete ? '/img/ord.jpg' : '/img//img/box.jpg'}
                    />


                )}
            </div>
        </div>
    );
};

export default Drawer;