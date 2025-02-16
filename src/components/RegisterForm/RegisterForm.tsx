
import {ChangeEvent, useState} from 'react'
import './index.scss'
import { IUserData } from '../../interfaces'
import { formInputList } from '../../data'


interface Iprops {
    setIsLoggedIn: (val: boolean) => void,
    userData: IUserData,
    setUserData: (user: IUserData) => void
}


const RegisterForm = ({setIsLoggedIn, userData, setUserData}: Iprops) => {
    const [inputArr, setInputArr] = useState(formInputList)
    // ** Handlers
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = e.target
        setUserData({
            ...userData,
            [name]: value,
        })
    }
    // ** Renders
    const renderFormInputList = inputArr.map((input, idx) => (
        <div style={{display: 'flex', justifyContent: 'space-between' , alignItems: 'center'}} key={idx}>
            <div className="input-wrapper" >
                <label htmlFor= {input.id}>{input.lable}</label>
                <input 
                    type= {input.type} 
                    name= {input.name}
                    id= {input.id}
                    value={userData[input.name]}
                    onChange={onChangeHandler}
                />
            </div>
            <button onClick={()=> {
                const filtered = inputArr.filter(input => input.name != formInputList[idx]['name'])
                console.log(`remove ${idx}`)
                setInputArr(filtered)
            }}>❌<p style={{fontSize: 10}} >index {idx}</p></button>
        </div>
    ));
    return (
        <div>
            {/* <h3>Email: {email} </h3> */}
            <form className="login-form" onSubmit={(e)=>{
                e.preventDefault()
            }}>

                {/* Inputs */}
                {renderFormInputList}

                <button onClick={()=>{
                    setIsLoggedIn(true)
                }}>login</button>
            </form>
        </div>
    )
}


export default RegisterForm;
