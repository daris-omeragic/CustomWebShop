import React from 'react';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import Text from '../../components/Text/Text';
import { Grid } from '@mui/material';
import { fontSize, fontWeight, colors, fontFamily } from '../../util/theme';



const HomePage = () => {
    return (
        <>
            <Grid container direction='column'>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <SimplifiedDiv style={{
                        boxSizing: 'border-box',
                        backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/040523_outdoor_promo_D?wid=1920&qlt=80&op_sharpen=1')`,
                        backgroundSize: 'cover ',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100vh',
                        zIndex: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'start',
                    }}
                    >
                        <SimplifiedDiv style={{
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "45%",
                        }}>
                            <Text style={{
                                fontSize: fontSize.xxLarge,
                                color: colors.black,
                                letterSpacing: '6px',
                                fontFamily : fontFamily['Libre Bodoni, serif'],
                                fontWeight: 100,
                            }}>UP TO 25% OFF</Text>
                            <Text style={{
                                fontSize: fontSize.large,
                                fontWeight: 400,
                                color: colors.black,
                                letterSpacing: '4px'
                            }}>OUTDOOR FURNITURE & DECOR</Text>
                            <Text style={{
                                fontSize: fontSize.optimal,
                                fontWeight: fontWeight.light,
                                color: colors.black,
                                letterSpacing: '3px',
                                padding: '10px 0px',
                            }}>SHOP THE SALE  |  SHOP ALL OUTDOOR</Text>
                        </SimplifiedDiv>
                    </SimplifiedDiv>
                </Grid>
            </Grid>

            <SimplifiedDiv style={{
                padding: "0px 5%",
                boxSizing: 'border-box',
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/040623_new_D_1?wid=1920&qlt=75')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
                zIndex: 0,
            }}
            >
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                padding: "0px 5%",
                boxSizing: 'border-box',
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/032323_SpringFlings_HP_D?wid=1920&qlt=75')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
                zIndex: 0,
            }}
            >
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                padding: "0px 5%",
                boxSizing: 'border-box',
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/010223_Home_D_Dining?wid=1920&qlt=75')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
                zIndex: 0,
            }}
            >
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                padding: "0px 5%",
                boxSizing: 'border-box',
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/010223_Home_D_Markdowns?wid=1920&qlt=50')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '30vh',
                zIndex: 0,
            }}
            >
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                padding: "0px 5%",
                boxSizing: 'border-box',
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/010223_Home_D_Pillow_re?wid=1920&qlt=50')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
                zIndex: 0,
            }}
            >
            </SimplifiedDiv>
        </>
    )
}


export default HomePage;