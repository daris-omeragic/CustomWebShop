import React from 'react';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';



const HomePage = ()=>{
    return(
        <SimplifiedDiv style={{
            padding: "0px 5%",
            boxSizing: 'border-box',
            backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/040523_outdoor_promo_D?wid=1920&qlt=80&op_sharpen=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            zIndex: 0,
        }}
        ></SimplifiedDiv>
    )
}


export default HomePage;