import React from 'react';
import { Grid } from '@mui/material';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import Text from "../../components/Text/Text";
import { fontFamily, fontSize, fontWeight, colors } from "../../util/theme";
import EveCoupe from "../../assets/images/ProductSpotlight/EveCoupe.jpeg";
import Home from "../../assets/images/ProductSpotlight/Home.jpeg";
import SpringCollection from "../../assets/images/ProductSpotlight/SpringCollection.jpeg";
import Outdoor from "../../assets/images/ProductSpotlight/Outdoor.jpeg";

const ProductSpotlight = () => {
    const styles = {
        container: {
          display: 'flex',
    margin: '2% 0px',
    padding: '0px 5%',
    boxSizing: 'border-box',
    gap: '20px',
    cursor: 'pointer',
        },
        imageContainer: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        title: {
            fontSize: fontSize.optimal,
            fontFamily: fontFamily.LatoRegular,
            fontWeight: fontWeight.mediumBold,
            margin: "15px 0px",
        },
        subTitle: {
            fontSize: fontSize.optimal,
            fontFamily: fontFamily.LatoRegular,
            textDecoration: 'underline',
            margin: "10px 0px",
            color: colors.gray,
        },
        text: {
            fontSize: '11px',
            fontFamily: fontFamily.LatoRegular,
            fontWeight: fontWeight.medium,
            lineHeight: '23px',
            marginTop: "10px",
            letterSpacing: '1px',
        }
    };
    return (
        <>
            <SimplifiedDiv style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100%", width: '90%', marginLeft: '5%', marginTop: "3%" }}>
                <Text style={{
                    fontSize: '17px',
                    fontFamily: fontFamily.MontserratExtraLight,
                    fontWeight: fontWeight.bold
                }}>ON OUR RADAR</Text>
                <div style={{ borderBottom: `1px solid ${colors.lightGray}`, flex: 1, marginLeft: '10px' }} />
            </SimplifiedDiv>
            <Grid container direction='column'>
                <SimplifiedDiv style={styles.container}>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <img style={{ ...styles.imageContainer, }} src={EveCoupe} alt='Product Spotlight' />
                        <Text style={styles.title}>THIS BEST-SELLING COUPE IS (FINALLY) BACK IN STOCK</Text>
                        <Text style={styles.subTitle}>SHOP WHILE IT'S HOT</Text>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <img style={{ ...styles.imageContainer, }} src={Outdoor} alt='Product Spotlight' />
                        <Text style={styles.title}>LUXURY HAS ITS DAY IN THE SUN</Text>
                        <Text style={styles.subTitle}>SHOP ALL OUTDOOR</Text>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} style={{}}>
                        <img style={{ ...styles.imageContainer }} src={SpringCollection} alt='Product Spotlight' />
                        <Text style={styles.title}>THE SPRING COLLECTION IS HERE</Text>
                        <Text style={styles.subTitle}>SHOP NEW ARRIVALS</Text>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} style={{}}>
                        <img style={{ ...styles.imageContainer }} src={Home} alt='Product Spotlight' />
                        <Text style={styles.title}>COMPLIMENTARY DESIGN SERVICES FOR PROJECTS OF ANY SCOPE</Text>
                        <Text style={styles.subTitle}>BOOK YOUR APPOINTMENT</Text>
                    </Grid>
                </SimplifiedDiv>
            </Grid>
            <SimplifiedDiv style={{ position: 'relative', top: '90px', padding: "0px 5%", }}>
                <Text style={{ fontSize: fontSize.normal }}>WHAT IS CB2?</Text>
                <Text style={styles.text}>CB2 is a high-design furniture and home decor store with collections ranging from contemporary pieces to rediscovered vintage icons. All crafted with premium materials and exceptional quality. CB2, in conjunction with our fellow brands Crate & Barrel and Crate & Kids, is the international destination for enduring, modern furniture, textiles and home decor. Founded in 2000, 38 years after Crate & Barrel launched, CB2's mission is to help you design covet-worthy spaces at an approachable price point. From the U.S. to Europe, CB2 merchants collaborate with more than 100 artists and designers worldwide to curate globally-inspired designs and exclusive products in every category.</Text>
                <Text style={{ fontSize: fontSize.optimal, textDecoration: 'underline', fontFamily: fontFamily.LatoRegular, fontWeight: fontWeight.medium, cursor: 'pointer', color: colors.gray, marginTop: "3px" }}>SHOW MORE</Text>
            </SimplifiedDiv>
        </>
    );
}

export default ProductSpotlight;