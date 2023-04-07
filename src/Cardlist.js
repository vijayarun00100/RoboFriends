import Card from './Card';
import React from 'react';

const Cardlist = ({robo}) => {
    const infor = robo.map((user,i)=>{
        return <Card key={i} id={robo[i].name} name={robo[i].name} email={robo[i].email} />
    })
    return(
        <div>
            {infor}
        </div>
    );

}

export default Cardlist;