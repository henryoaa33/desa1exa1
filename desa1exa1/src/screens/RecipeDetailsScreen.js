import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RecipesContext } from '../context/RecipesContext';

const RecipeDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const { getRecipeById } = useContext(RecipesContext);
  const recipe = getRecipeById(id);

  return (
    <View style={styles.container}>
      {recipe ? (
        <>
          <Text style={styles.recipeName}>Nombre: {recipe.name}</Text>
          <Text style={styles.ingredientsHeader}>Ingredientes:</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>{ingredient}</Text>
          ))}
        </>
      ) : (
        <Text style={styles.error}>Receta no encontrada</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ingredientsHeader: {
    fontSize: 18,
    marginVertical: 12,
  },
  ingredient: {
    fontSize: 16,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default RecipeDetailsScreen;
