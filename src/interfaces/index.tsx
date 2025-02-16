


export interface IUserData {
    username: string,
    fullName:string,
    email: string,
    address: string,
    phone: string,
    password: string
}


export interface IFormInput {
    lable: string, 
    type: string, 
    id: string, 
    name: keyof IUserData
}