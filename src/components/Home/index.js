import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Carousal from '../Carousal'
import PopularRestaurants from '../PopularRestaurants'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header activeTab="HOME" />
      <div className="home">
        <Carousal />
        <PopularRestaurants />
      </div>
      <Footer />
    </>
  )
}

export default Home
