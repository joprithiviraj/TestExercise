import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#66004d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyContainer: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },

  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  placeholderImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },

  cardContent: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },

  status: {
    marginTop: 8,
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default styles;
