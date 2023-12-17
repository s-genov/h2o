import './footer.css';
import DROXIC_LOGO from './../../images/droxic-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='copyright'>
        Copyright © 2023 <span>H2O</span> <span>DRONES.</span> All rights reserved.
      </div>
      <div className='ui-development'>
        <span>UI & Development</span>
        <img src={DROXIC_LOGO} className='droxic-logo' alt=""></img>
      </div>
    </footer>
  )
}

export default Footer;