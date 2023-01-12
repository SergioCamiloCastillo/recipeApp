export const BASE_URL = "https://api.spoonacular.com/recipes";

const endpoint = "/findByIngredients?ingredients=apples,+flour,+sugar&number=4&apiKey=18c251a1d35448ea9442d109163daf97";
export async function getRecipes() {

    try {
        const url = `${BASE_URL}${endpoint}`;
        //es fetch porque es un api sin seguridad, sin token porque solo trae los productos
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}