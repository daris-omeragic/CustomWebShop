import Text from '../../components/Text/Text';
import { colors, fontFamily, fontSize, fontWeight } from '../../util/theme'


const TopRowTitle = ({ text,index }) => {
    const styles = {
      container: {
        margin: ' 7px 10px',
        color: index === 3 ? colors.lightGray : colors.gray,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 7px',
        fontWeight: index === 3 ? fontWeight.medium : fontWeight.mediumBold,
        border: index === 0 ? '1px solid gray' : 'none',
        fontSize : index === 3 ? fontSize.optimal : fontSize.normal,
        fontFamily : fontFamily.LatoRegular
      },
    };

    return <Text style={styles.container}>{text}</Text>;
  };

  export default TopRowTitle;