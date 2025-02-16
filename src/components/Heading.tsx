



import { ReactNode } from "react";

const Heading = ({title, children}: {title: string, children: ReactNode}) => {
    return <h2>
        {title}
        {children}
    </h2> 
}

export default Heading;



