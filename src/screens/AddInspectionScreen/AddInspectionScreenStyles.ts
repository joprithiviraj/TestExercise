import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollView: {
    width: '100%',
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  bodyContainer: {
    width: '100%',
    alignItems: 'center',
  },
  appNameText: {
    marginTop: 100,
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#85460b',
    letterSpacing: 0.33,
  },
  titleText: {
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#333333',
    letterSpacing: 0.33,
  },
  loginItemContainer: {
    width: '90%',
    marginTop: 48,
  },
  textTitleLabel: {
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 4,
    color: '#333333',
    letterSpacing: 0.33,
  },
  textInput: {
    flex: 1,
    marginBottom: 10,
    marginTop: 4,
    color: '#333333',
    paddingHorizontal: 15,
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    letterSpacing: 0.33,
  },
  galleryButtonView: {
    marginTop: 24,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  galleryButtonStyle: {
    backgroundColor: '#66004d',
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  galleryButtonText: { color: 'white' },
  SubmitButton: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#0072BC',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  SubmitButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    letterSpacing: 0.33,
  },
});

export default styles;
