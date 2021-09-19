import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(){

    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }

    };

    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton);
   


    // eslint-disable-next-line react-hooks/rules-of-hooks
   
    
    return (
      <>
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
              

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Anasayfa
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/projeler' className='nav-links' onClick={closeMobileMenu}>
                            Projeler 
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/dogalkaynaklar' className='nav-links' onClick={closeMobileMenu}>
                            Doğal Kaynakların Korunması
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/CevreHaberleri' className='nav-links' onClick={closeMobileMenu}>
                            Çevre Haberleri
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/iletisim' className='nav-links' onClick={closeMobileMenu}>
                            İletişim
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/hakkimizda' className='nav-links' onClick={closeMobileMenu}>
                            Hakkımızda
                        </Link>
                    </li>

                    
                    <li className='nav-item'>
                        <Link to='/uyekayit' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Üye Kayıt
                        </Link>
                    </li>
                </ul>
                 
                {button && <Button buttonStyle='btn--outline'>ÜYE KAYIT</Button>}                
             
            </div>
        </nav>
      
      </>
    )
}

export default Navbar;
