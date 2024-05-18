import React, { createContext, useState } from 'react';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((_, index) => index !== id));
  };

  const getRecipeById = (id) => {
    return recipes[id];
  };

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe, deleteRecipe, getRecipeById }}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContext, RecipesProvider };
