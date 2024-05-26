import dom from '../dom.js';
import deleteRecipe from '../../apis/deleteRecipe.js';

const deleteHandler = async (id) => {
    const recipeToDelete = document.getElementById(id);
    recipeToDelete.remove();
    const res = await deleteRecipe(id);
};

export default deleteHandler;