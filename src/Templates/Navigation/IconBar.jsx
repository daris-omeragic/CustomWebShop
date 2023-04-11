import React from 'react';
import Grid from "@mui/material/Grid";
import Text from '../../components/Text/Text';
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv"
import { colors, fontSize, fontWeight } from "../../util/theme";
import CategoryTab from '../CategoryTab/CategoryTab';

import { TextField, InputAdornment } from '@mui/material';
import { Search, Person, FavoriteBorder, AddShoppingCart, LocationOn } from '@mui/icons-material';




const IconGallery = () => (
    <>
        <Person sx={iconStyle} />
        <LocationOn sx={iconStyle} />
        <FavoriteBorder sx={iconStyle} />
        <AddShoppingCart sx={iconStyle} />
    </>
);
const iconStyle = {
    fontSize: fontSize.large,
    margin: '0px 15px',
    color: colors.cleanWhite,
};

const IconBar = () => {
    return (
        <SimplifiedDiv style={{
            padding: "0px 5%",
            boxSizing: 'border-box',
            backgroundImage: `url('https://cb2.scene7.com/is/image/CB2/032323_CBCC_HP_D?wid=1920&qlt=90')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            filter: 'brightness(90%)',
            zIndex: 0,
        }}
        >
            <Grid container alignItems="center">
                <Grid item sm={12} md={4} lg={4}>
                    <SimplifiedDiv style={{ margin: "20px 0px" }}>
                        <TextField
                            size='small'
                            label='What can we help you find?'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <Search style={{ fontSize: fontSize.medium }} />
                                    </InputAdornment>
                                ),
                                style: {
                                    fontSize: '23px',
                                    height: "40px",
                                    borderColor: 'white',
                                    
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontSize: fontSize.normal,
                                    color : colors.cleanWhite
                                },
                            }}
                        />
                    </SimplifiedDiv>

                </Grid>
                <Grid item sm={12} md={4} lg={4}>
                    <SimplifiedDiv style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontWeight: fontWeight.medium,
                            border: '2px solid white',
                            padding: '5px 15px',
                            fontSize: fontSize.medium,
                            color: colors.cleanWhite,
                        }}>
                            CB2
                        </Text>
                    </SimplifiedDiv>
                </Grid>
                <Grid item sm={12} md={4} lg={4}>
                    <SimplifiedDiv style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <IconGallery />
                    </SimplifiedDiv>
                </Grid>
            </Grid>
            <CategoryTab />
            <SimplifiedDiv style={{
                display : 'flex',
                justifyContent : 'center',
                margin : '30px 0px'
            }}>
            </SimplifiedDiv>
        </SimplifiedDiv>
    );
}

export default IconBar;