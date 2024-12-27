import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, Card, List, Avatar, Text } from 'react-native-paper';
import { View, StyleSheet, Image } from 'react-native';

// Daftar buah dengan gambar
const fruits = [
  {
    name: 'Apple',
    description: 'A sweet, crunchy fruit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
  },
  {
    name: 'Banana',
    description: 'A soft, creamy fruit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
  },
  {
    name: 'Orange',
    description: 'A juicy citrus fruit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
  },
  {
    name: 'Grapes',
    description: 'A bunch of small sweet fruits',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg',
  },
  {
    name: 'Mango',
    description: 'A tropical stone fruit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
  },
];

// Komponen utama untuk daftar buah
const FruitListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {fruits.map((fruit, index) => (
        <Card
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('FruitDetails', { fruit })}
        >
          <Card.Content>
            <List.Item
              title={fruit.name}
              description={fruit.description}
              left={(props) => (
                <Avatar.Image
                  {...props}
                  size={50}
                  source={{ uri: fruit.image }}
                />
              )}
            />
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

// Komponen untuk detail buah
const FruitDetailsScreen = ({ route }) => {
  const { fruit } = route.params;
  return (
    <View style={styles.detailsContainer}>
      <Avatar.Image size={150} source={{ uri: fruit.image }} style={styles.image} />
      <Text variant="headlineMedium" style={styles.detailsText}>
        {fruit.name}
      </Text>
      <Text variant="bodyLarge" style={styles.detailsText}>
        {fruit.description}
      </Text>
    </View>
  );
};

// Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FruitList" component={FruitListScreen} options={{ title: 'Fruits' }} />
          <Stack.Screen
            name="FruitDetails"
            component={FruitDetailsScreen}
            options={({ route }) => ({ title: route.params.fruit.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginVertical: 5,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  detailsText: {
    marginVertical: 10,
  },
  image: {
    marginBottom: 20,
  },
});

export default App;
