import dom from '../dom.js';
import updateRecipe from '../../apis/updateRecipe.js';
import updateRecipeDom from '../components/updateRecipeDom.js';


const editHandler = async (recipe) => {
    // const title = recipe.title;
    // const ingredients = recipe.ingredients;
    // const instructions = recipe.instructions;
    // const image = recipe.image;
    // const id = recipe._id

    // dom.title.value = title;
    // dom.ingredients.value = ingredients;
    // dom.instructions.value = instructions;
    // dom.image.value = image;
    const recipeDom = document.getElementById(recipe._id);
    updateRecipeDom(recipe, recipeDom);
    await updateRecipe(recipe);

    dom.btn.innerText = 'Edit';
    document.getElementById(id).classList.add('selected');
};

export default editHandler;