function App() {
    return (
        <div className="wrapper" >

            <header className="header">
                <div className="headerLeft">
                    <img className= 'imgLogo' width={80} height={80} src='img/kt5.png'/>
                    <div className="headerInfo">
                        <h3 className="nameShop">React Sneakers</h3>
                        <p>Удивительный мир специй</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li className='liRight'>
                        <img width={30} height={30} src='/img/user.png'/>
                        <span>1205 руб</span>
                    </li>
                    <li className='liRight'>
                        <img width={30} height={30} src='/img/beak.png'/>
                    </li>

                </ul>
            </header>
            <div className="content">
                <h1 className='contentH'>Все специи</h1>
                <div className='oll'>

                    <div className='card'>
                        <img width={190} height={170} alt="pic" src='/img/svan.png'/>
                        <h3 className='cartImg'>Сванская соль</h3>
                        <div className='cartImg'>
                            <div className='catiInfo'>
                                <span>Цена:</span>
                                <b> 100 руб.</b>
                            </div>
                            <button className='button'> +</button>
                        </div>
                    </div>

                    <div className='card'>
                        <img width={190} height={170} alt="pic" src='/img/kur.png'/>
                        <h3 className='cartImg'>Куркума молотая</h3>
                        <div className='cartImg'>
                            <div className='catiInfo'>
                                <span>Цена:</span>
                                <b> 100 руб.</b>
                            </div>
                            <button className='button'> +</button>
                        </div>
                    </div>

                <div className='card'>
                    <img width={190} height={170} alt="pic" src='/img/gor.png'/>
                    <h3 className='cartImg'>Горчица молотая</h3>
                    <div className='cartImg'>
                        <div className='catiInfo'>
                            <span>Цена:</span>
                            <b> 100 руб.</b>
                        </div>
                        <button className='button'> +</button>
                    </div>
                </div>


            <div className='card'>
                <img width={190} height={170} alt="pic" src='/img/kor.png'/>
                <h3 className='cartImg'>Корица палочка</h3>
                <div className='cartImg'>
                    <div className='catiInfo'>
                        <span>Цена:</span>
                        <b> 100 руб.</b>
                    </div>
                    <button className='button'> +</button>
                </div>
            </div>




                </div>

            </div>
        </div>
    );
}

export default App;
