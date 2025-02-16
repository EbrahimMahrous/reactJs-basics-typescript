import './index.scss';

interface Iprops {
    companyName: string,
    homePage: string,
    contactPage: string,
    isLogged: boolean,
    setIsLoggedIn: (val: boolean) => void
}



const  NavBar = ({companyName, homePage, contactPage, isLogged, setIsLoggedIn}: Iprops) => { 
    return(
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li><a href="/" className='navbar-list-items' >{companyName.toUpperCase()}</a></li>
                <li><a href="/" className='navbar-list-items items-none' >{homePage}</a></li>
                <li><a href="/" className='navbar-list-items items-none' >{contactPage}</a></li>
                <li><button onClick={()=> {
                    setIsLoggedIn(!isLogged)
                }} className='navbar-list-items' >{isLogged ? "Logout" : 'Login'}</button></li>
          </ul>
          <h2 style={{textAlign: 'center', color: 'red'}}>DON'T USE THE 'IDX' AS A KEY IN THIS EXAMPLE!</h2>
        </nav>
    )
}
export default NavBar;




