import { getCollection } from 'astro:content';

export async function getRecipes() {
  const recipes = await getCollection('recipes');
  return recipes.sort((a, b) => a.data.title.localeCompare(b.data.title, 'nl'));
}

export function totalTime(recipe: { data: { prepTime: number; cookTime: number } }) {
  return recipe.data.prepTime + recipe.data.cookTime;
}
