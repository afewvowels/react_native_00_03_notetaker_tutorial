import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.CONTAINER_PADDING,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textAreaTitle: {
      fontSize: theme.FONT_SIZE_LARGE,
      fontWeight: theme.FONT_WEIGHT_HEAVY,
      alignSelf: 'flex-start',
      padding: 10
  },
  textArea: {
      flex: 1,
      padding: theme.CONTAINER_PADDING,
      alignSelf: 'stretch',
      overflow: 'scroll',
      backgroundColor: theme.PRIMARY_DARK,
      color: theme.FONT_LIGHT
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomBarWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    flex: 1
  },
  saveBtn: {
    padding: 10,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.FONT_LIGHT,
    backgroundColor: theme.PRIMARY,
    textAlign: 'center'
  },
  characterCount: {
      padding: 10,
      fontSize: theme.FONT_SIZE_SMALL,
      backgroundColor: theme.SECONDARY
  }
});
