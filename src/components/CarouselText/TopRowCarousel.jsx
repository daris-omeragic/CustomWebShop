import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Text from "../Text/Text";
import Grid from "@mui/material/Grid";
import { colors, fontFamily, fontSize } from '../../util/theme';


const TopRowText = () => {

    const styles = {
        carouselContainer: {
            width: "35vw", 
            margin: "3px 0px",
        },
        carouselItem: {
            display: "inline-block",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            letterSpacing : '2px',
            textAlign: "center",
        },
        text: {
            fontSize: fontSize.small,
            color: colors.black,
            //fontWeight : fontWeight.mediumBold,
            fontFamily : fontFamily.LatoItalic
        },
    };

    const carouselItems = [
        {
            text: 'UP TO 60% OFF NEW MARKDOWNS'
        },
        {
            text: 'FREE DESIGN SERVICES'
        },
        {
            text: 'UP TO 25% OFF ACCENT FURNITURE & DECOR'
        },
        {

            text: 'LIMITED TIME: OUTDOOR FURNITURE DOUBLE REWARDS EVENT‡'
        },
        {
            text :'ORDER BY 3/31 TO GET IT FOR EASTER'

        },
    ];

    return (
        <Grid container justifyContent="center">
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <div style={styles.carouselContainer}>
                    <Carousel
                    autoPlay
                        infiniteLoop
                        showArrows={false}
                        interval={1000}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        centerMode={false} 
                    >
                        {carouselItems.map((item, index) => (
                            <div key={index} style={styles.carouselItem}>
                                <Text style={styles.text}>{item.text}</Text>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Grid>
        </Grid>
    )
}

export default TopRowText;