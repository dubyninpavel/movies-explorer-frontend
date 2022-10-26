import { Link } from 'react-router-dom';
import promoLogo from '../../images/promoLogo.svg';

function HeaderAuth() {
  return (
    <header className='headerauth'>
        <div className='headerauth__container'>
          <Link to='/'><img className='header__logo' src={promoLogo} alt='Логотип проекта Movies'/></Link>
        </div>
    </header>
  );
}

export default HeaderAuth;
