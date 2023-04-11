import React from 'react';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import Text from '../../components/Text/Text';
import { colors, fontSize, fontWeight } from '../../util/theme';
import { Grid } from '@mui/material';
import TopRowText from "../../components/CarouselText/TopRowCarousel";
import FlageImage from "../../assets/images/FlagImage.png";
import TopRowTitle from '../../components/TopRowTittle/TopRowTittle';


const TopRow = () => {

  const styles = {
    container: {
      backgroundColor: colors.white,
      width: '100%',
      height: '35px',
      padding: "0px 5%",
      boxSizing: 'border-box',
    },
    rightText: {
      fontSize: fontSize.optimal,
      color: colors.gray,
      margin: ' 7px 0px',
      fontWeight: fontWeight.light,
      borderBottom: '0.5px solid gray'
    },
    image: {
      width: "20px",
      height: "auto",
      objectFit: 'contain'
    },
  }
  return (
    <SimplifiedDiv style={styles.container}>
      <Grid container direction='row'>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SimplifiedDiv style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <TopRowTitle text="CB2" index={0} />
            <TopRowTitle text="Crate&Barrel" index={1} />
            <TopRowTitle text="Crate&Kids" index={2} />
            <TopRowTitle text="HUDSON|GRACE" index={3}/>

            <img src={FlageImage} alt="Flag" style={styles.image} />
          </SimplifiedDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SimplifiedDiv >
            <TopRowText />
          </SimplifiedDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SimplifiedDiv style={{
            display: "flex",
            justifyContent: 'flex-end',
          }}>
            <Text style={styles.rightText}>SEE ALL OFFERS (7)</Text>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default TopRow;