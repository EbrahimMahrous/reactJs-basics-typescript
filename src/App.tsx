import { useState } from 'react'
import './App.css'
// import Heading from './components/Heading'
import RegisterForm from './components/RegisterForm/RegisterForm'
import NavBar from './components/Navbar'
import UserDetails from './components/UserDetails'
import { IUserData } from './interfaces'

// ** NavBar
function App() {
  const companyName = 'Tops Technologies'
  const homePage = 'Home'
  const contactPage = 'Contact Us'

  const [isLogged, setIsLoggedIn] = useState(false)

  
      const [userData, setUserData] = useState<IUserData>({
          username: '',
          fullName: '',
          email: '',
          address: '',
          phone: '',
          password: ''
      })

  return (
    <>
    <NavBar 
      companyName = {companyName} 
      homePage= {homePage} 
      contactPage= {contactPage}
      isLogged = {isLogged}
      setIsLoggedIn = {setIsLoggedIn}
    />
    {/* <Heading title= {'You are '}>Welcome!</Heading> */}

    {isLogged? <UserDetails 
    user= {userData}
    /> : 
    <RegisterForm setIsLoggedIn={setIsLoggedIn} 
      userData={userData} setUserData={setUserData}
    />}

    </>
  )
}
export default App;