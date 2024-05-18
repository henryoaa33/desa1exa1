import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { RecipesContext } from '../context/RecipesContext';

const HomeScreen = ({ navigation }) => {
  const { recipes, deleteRecipe } = useContext(RecipesContext);

  return (
    <View style={styles.container}>
      <Button title="Agregar Receta" onPress={() => navigation.navigate('AddRecipe')} />
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeName}>{item.name}</Text>
            <Button title="Ver Detalle" onPress={() => navigation.navigate('RecipeDetails', { id: index })} />
            <Button title="Eliminar" onPress={() => deleteRecipe(index)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recipeItem: {
    marginVertical: 8,
  },
  recipeName: {
    fontSize: 18,
  },
});

export default HomeScreen;
