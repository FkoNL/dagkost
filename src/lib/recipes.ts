import { getCollection } from 'astro:content';

export async function getRecipes(collection: 'dagkost' | 'nonna' = 'dagkost') {
  const recipes = await getCollection('recipes');
  return recipes
    .filter((recipe) => recipe.id.startsWith(`${collection}/`))
    .map((recipe) => ({ ...recipe, slug: recipe.slug.replace(new RegExp(`^${collection}/`), '') }))
    .sort((a, b) => a.data.title.localeCompare(b.data.title, 'nl'));
}

export function totalTime(recipe: { data: { prepTime: number; cookTime: number } }) {
  return recipe.data.prepTime + recipe.data.cookTime;
}
