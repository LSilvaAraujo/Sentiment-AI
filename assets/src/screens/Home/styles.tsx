import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#262839',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 22,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  form: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#17141E',
    padding: 32,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 22,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#17141E',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    alignSelf: 'flex-end',
    marginTop: 16,
  },
});
