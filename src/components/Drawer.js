import React from 'react';

function Drawer (props) {
    return (
        <div className='overlay'>
            <div className='drawer'>

                <h2>Корзина  <img onClick={props.onClose} className='remuvBtn' width={20} height={20} src='/img/rem.svg'/></h2>

                <div className='items'>
                    <div className="cartItem">
                        <img className="imgsvan" width={70} height={70} alt="pic" src='/img/svan.png'/>
                        <div className="discrip">
                            <p>Сванская соль</p>
                            <b> 100 руб.</b>
                        </div>
                        <img className='remuvBtn' width={20} height={20} src='/img/rem.svg'/>
                    </div>


                    <div className="cartItem">
                        <img className="imgsvan" width={70} height={70} alt="pic" src='/img/svan.png'/>
                        <div className="discrip">
                            <p>Сванская соль</p>
                            <b> 100 руб.</b>
                        </div>
                        <img className='remuvBtn' width={20} height={20} src='/img/rem.svg'/>
                    </div>


                    <div className="cartItem">
                        <img className="imgsvan" width={70} height={70} alt="pic" src='/img/svan.png'/>
                        <div className="discrip">
                            <p>Сванская соль</p>
                            <b> 100 руб.</b>
                        </div>
                        <img className='remuvBtn' width={20} height={20} src='/img/rem.svg'/>
                    </div>

                </div>
                <ul className="cartTotalBlock">
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>200 руб.</b>
                    </li>
                    <li>
                        <span>Налог:</span>
                        <div></div>
                        <b>10 руб.</b>
                    </li>
                </ul>
                <button className="buttonOrder">Оформить заказ<img src='/img/arr.svg' alt='arro'/></button>

            </div>
        </div>



    );
};

export default Drawer;