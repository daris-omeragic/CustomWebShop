import React from 'react';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import Text from '../../components/Text/Text';
import { Grid } from '@mui/material';
import { fontSize, fontWeight, colors, fontFamily } from '../../util/theme';



const HomePage = () => {
    const styles = {
        container: {
            boxSizing: 'border-box',
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
        },
        containerText: {
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: "45%",
        },
        spanStyle: {
            fontSize: fontSize.optimal,
            fontWeight: fontWeight.bold,
            color: colors.cleanWhite,
            textDecoration: 'underline',
            fontFamily: fontFamily.LatoThin,
            padding: "10px 0px",
            cursor: 'pointer',
            letterSpacing: '2px',
            width: "35%",
            display: "flex",
            justifyContent: "center"
        },
        text: {
            fontSize: fontSize.xLarge,
            color: colors.black,
            letterSpacing: '6px',
            fontFamily: fontFamily.MontserratExtraLight,
            fontWeight: fontWeight.bold,
        },
        divStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: fontFamily.LatoThin,
            letterSpacing: '1px',
            padding: '10px 0px',
            cursor: 'pointer',
            width: "44%",
        }
    };
    return (
        <>
            <Grid container direction='column'>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <SimplifiedDiv style={{
                        ...styles.container,
                        backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/040523_outdoor_promo_D?wid=1920&qlt=80&op_sharpen=1')`,
                    }}>
                        <SimplifiedDiv style={styles.containerText}>
                            <Text style={styles.text}>UP TO 25% OFF</Text>
                            <Text style={{
                                ...styles.text,
                                fontSize: fontSize.medium,
                                fontWeight: fontWeight.medium,
                                letterSpacing: '4px',
                                fontFamily: fontFamily.LatoRegular
                            }}>OUTDOOR FURNITURE & DECOR</Text>
                            <SimplifiedDiv style={styles.divStyle}>
                                <span style={{
                                    ...styles.spanStyle,
                                    color: colors.black,
                                    borderRight: '0.25px solid black',
                                    marginRight: '10px',
                                    padding: "0px",
                                }}>SHOP THE SALE</span>
                                <span style={{
                                    ...styles.spanStyle,
                                    color: colors.black,
                                    marginLeft: '10px',
                                    padding: "0px",
                                }}>SHOP ALL OUTDOOR</span>
                            </SimplifiedDiv>
                        </SimplifiedDiv>
                    </SimplifiedDiv>
                </Grid>
            </Grid>
            <SimplifiedDiv style={{
                ...styles.container,
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/040623_new_D_1?wid=1920&qlt=75')`,
            }}>
                <SimplifiedDiv style={styles.containerText}>
                    <Text style={styles.text}>NEW APRIL ARRIVALS</Text>
                    <SimplifiedDiv style={{ ...styles.divStyle, width: "100%" }}>
                        <span style={{
                            ...styles.spanStyle,
                            color: colors.black,
                            marginRight: '0px',
                            padding: "0px",
                            borderRight: '0.25px solid black',
                            width: "15%",
                        }}>SHOP ALL NEW</span>
                        <span style={{
                            ...styles.spanStyle,
                            color: colors.black,
                            marginLeft: '0px',
                            padding: "0px",
                            width: "15%"
                        }}>SHOP SOFAS</span>
                    </SimplifiedDiv>
                </SimplifiedDiv>
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                ...styles.container,
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/032323_SpringFlings_HP_D?wid=1920&qlt=75')`,
            }}>
                <SimplifiedDiv style={{
                    ...styles.containerText,
                    width: "35%",
                    alignItems: 'start',
                    height: "60%",
                    marginLeft: '16%'
                }}>
                    <Text style={styles.text}>FOR ALL YOUR SPRING FLINGS</Text>
                    <span style={{
                        ...styles.spanStyle,
                        width: '100%',
                        color: colors.black,
                        justifyContent: 'start'
                    }}>SHOP ENTERTAINING</span>
                </SimplifiedDiv>
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                ...styles.container,
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/010223_Home_D_Dining?wid=1920&qlt=75')`,
            }}>
                <SimplifiedDiv style={styles.containerText}>
                    <Text style={styles.text}>THE ART OF FINE DINING</Text>
                    <span style={{ ...styles.spanStyle, color: colors.black, }}>SHOP DINING ROOM FURNITURE</span>
                </SimplifiedDiv>
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                ...styles.container,
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/010223_Home_D_Markdowns?wid=1920&qlt=50')`,
                height: '30vh',
            }}>
                <SimplifiedDiv style={{
                    ...styles.containerText,
                    width: "75%",
                    height: "100%",
                    marginLeft: '15%'
                }}>
                    <Text style={{ ...styles.text, color: colors.cleanWhite }}>UP TO 60% OFF NEW MARKDOWNS</Text>
                    <span style={{ ...styles.spanStyle, marginTop: "5px" }}>SHOP NOW</span>
                </SimplifiedDiv>
            </SimplifiedDiv>
            <SimplifiedDiv style={{
                ...styles.container,
                backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/010223_Home_D_Pillow_re?wid=1920&qlt=50')`,
            }}>
                <SimplifiedDiv style={{ ...styles.containerText, alignItems: 'flex-end' }}>
                    <Text style={{
                        ...styles.text,
                        fontSize: fontSize.large,
                        width: '30%',
                        color: colors.cleanWhite,
                    }}>FREE SHIPPING ON 1000+ ITEMS</Text>
                    <span style={styles.spanStyle}>SHOP NOW</span>
                </SimplifiedDiv>
            </SimplifiedDiv>
        </>
    )
}
export default HomePage;