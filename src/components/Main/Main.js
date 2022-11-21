import PropTypes from 'prop-types';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({ isLoggedIn }) {
  return (
    <>
      <Promo
        isLoggedIn = {isLoggedIn}
      />
      <main className='main'>
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

Main.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Main;
