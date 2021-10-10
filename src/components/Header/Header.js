import { Link } from 'react-router-dom';

function Header (props)  {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
             <div className="d-flex align-center">
                 <img width={80} height={80} src="img/kt5.png" alt="Logotype" />
                <div>
                   <h3 className="text-uppercase">Spices from all over the world</h3>
                    <p className="opacity-5">The amazing world of spices</p>
                </div>
            </div>
                </Link>
            <ul className="d-flex">
                   <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={30} height={30} src='/img/sop.svg' alt="Корзина"/>
                    <span>1205 руб</span>
                </li>
                 <li className="mr-20 cu-p">
                         <Link to="/favorites">
                    <img width={30} height={30} src='/img/lov.svg'alt="Закладки" />
                         </Link>
                </li>
                <li>
                    <img width={30} height={30} src='/img/ava.svg' alt="Пользователь"/>
                </li>

            </ul>
        </header>
    );
};

export default Header;