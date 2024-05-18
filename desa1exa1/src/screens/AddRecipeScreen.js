import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RecipesContext } from '../context/RecipesContext';

const AddRecipeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const { addRecipe } = useContext(RecipesContext);

  const handleAddRecipe = () => {
    addRecipe({ name, ingredients: ingredients.split(',') });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nombre de la Receta</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Ingredientes (separados por comas)</Text>
      <TextInput style={styles.input} value={ingredients} onChangeText={setIngredients} />
      <Button title="Agregar" onPress={handleAddRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default AddRecipeScreen;
