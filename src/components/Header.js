import React from 'react';

function Header (props)  {
    return (

        <header className="header">
            <div className="headerLeft">
                <img className='imgLogo' width={80} height={80} src='img/kt5.png'/>
                <div className="headerInfo">
                    <h3 className="nameShop">Spices from all over the world</h3>
                    <p>The amazing world of spices</p>
                </div>
            </div>
            <ul className="headerRight">
                <li onClick={props.onClickCart} className='liRight'>
                    <img width={30} height={30} src='/img/sop.svg'/>
                    <span>1205 руб</span>
                </li>
                <li className='liRight'>
                    <img width={30} height={30} src='/img/ava.svg'/>
                </li>

            </ul>
        </header>
    );
};

export default Header;