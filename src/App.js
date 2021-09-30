function App() {
    return (
        <div className="wrapper">
            <div style={{display: 'none'}} className='overlay'>
                <div className='drawer'>

                    <h2>Корзина  <img className='remuvBtn' width={20} height={20} src='/img/rem.svg'/></h2>

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


            <header className="header">
                <div className="headerLeft">
                    <img className='imgLogo' width={80} height={80} src='img/kt5.png'/>
                    <div className="headerInfo">
                        <h3 className="nameShop">Spices from all over the world</h3>
                        <p>Удивительный мир специй</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li className='liRight'>
                        <img width={30} height={30} src='/img/sop.svg'/>
                        <span>1205 руб</span>
                    </li>
                    <li className='liRight'>
                        <img width={30} height={30} src='/img/ava.svg'/>
                    </li>

                </ul>
            </header>
            <div className="content">
                <div className='content-search'>
                    <h1 className='contentH'>Все специи</h1>
                    <div className='search-block'>
                        <img width={30} height={30} src='/img/zom.svg' alt='Search'/>
                        <input placeholder='Поиск...'/>
                    </div>
                </div>

                <div className='oll'>

                    <div className='card'>
                        <img className='heard' width={18} height={18} src='/img/lov.svg'/>
                        <img width={190} height={170} alt="pic" src='/img/svan.png'/>
                        <h3 className='cartImg'>Сванская соль</h3>
                        <div className='cartImg'>
                            <div className='catiInfo'>
                                <span>Цена:</span>
                                <b> 100 руб.</b>
                            </div>
                            <img className='button' src='/img/plu.svg'/>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='heard' width={18} height={18} src='/img/lov.svg'/>
                        <img width={190} height={170} alt="pic" src='/img/kur.png'/>
                        <h3 className='cartImg'>Куркума молотая</h3>
                        <div className='cartImg'>
                            <div className='catiInfo'>
                                <span>Цена:</span>
                                <b> 100 руб.</b>
                            </div>
                            <img className='button' src='/img/plu.svg'/>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='heard' width={18} height={18} src='/img/lov.svg'/>
                        <img width={190} height={170} alt="pic" src='/img/gor.png'/>
                        <h3 className='cartImg'>Горчица молотая</h3>
                        <div className='cartImg'>
                            <div className='catiInfo'>
                                <span>Цена:</span>
                                <b> 100 руб.</b>
                            </div>
                            <img className='button' src='/img/plu.svg'/>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='heard' width={18} height={18} src='/img/lov.svg'/>
                        <img width={190} height={170} alt="pic" src='/img/kor.png'/>
                        <h3 className='cartImg'>Корица палочка</h3>
                        <div className='cartImg'>
                            <div className='catiInfo'>
                                <span>Цена:</span>
                                <b> 100 руб.</b>
                            </div>
                            <img className='button' src='/img/plu.svg'/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default App;
