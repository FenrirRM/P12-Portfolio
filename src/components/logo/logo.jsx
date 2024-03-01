import { Link } from 'react-router-dom'
import LogoMb from '../../assets/logo/logo.svg'
import '../../sass/components/_logo.scss'

const Logo = () => {
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={LogoMb} alt="logo personnel" />
      </Link>
    </div>
  )
}

export default Logo
