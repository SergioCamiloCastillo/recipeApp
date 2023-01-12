import { useState, useEffect } from "react";
import { getRecipes } from "../../api/recipes";
import { useAppDispatch } from "../../redux/hooks";
import { getRecipesRedux } from "../../redux/slices/recipe.slice";
import "../../styles/newrecipes.css";
import CardRecipe from "../CardRecipe";

export default function NewRecipes() {
  const dispatch = useAppDispatch();

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      await loadRecipes();
    })();
  }, []);
  const loadRecipes = async () => {
    try {
      const response = await getRecipes();
      console.log("llegan los response=>", response.title);
      dispatch(
        getRecipesRedux({
          title: response?.title,
        })
      );
      setRecipes(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="box-new-recipes">
      <span className="title">Nuevas Recetas</span>
      <div className="content">
        {recipes?.map((item) => (
          <CardRecipe values={item} />
        ))}
      </div>
    </div>
  );
}
