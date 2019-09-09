import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.CONTAINER_PADDING,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 35
  },
  textAreaTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    alignSelf: 'flex-start',
    padding: 10,
    textAlign: 'center'
  },
  textArea: {
    flex: 1,
    alignSelf: 'stretch',
    overflow: 'scroll',
    padding: theme.CONTAINER_PADDING,
    paddingTop: 15,
    marginBottom: 15,
    backgroundColor: theme.PRIMARY_DARK,
    color: theme.FONT_LIGHT
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  saveBtn: {
    padding: 10,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.FONT_LIGHT,
    backgroundColor: theme.PRIMARY,
    textAlign: 'center',
    flex: 1
  },
  characterCount: {
    padding: 10,
    fontSize: theme.FONT_SIZE_SMALL,
    backgroundColor: theme.SECONDARY,
    alignSelf: 'stretch',
    flex: 1,
    textAlign: 'center'
  }
});
