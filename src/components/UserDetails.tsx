

import { IUserData } from "../interfaces";

interface Iprops {
    user: IUserData
}

const UserDetails = ({user}: Iprops) => {
    return (
        <>
        <div style={{margin: '1.5rem'}}>
            <p>Your name is: {user.username}</p>
            <p>Your email is: {user.address}</p>
            <p>Your address is: {user.email}</p>
            <p>Your password is: {user.password}</p>
            <p>Your phone is: {user.phone}</p>
        </div>

        </>
    )
}

export default UserDetails;