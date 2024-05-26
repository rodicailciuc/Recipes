const updateRecipeDom = (recipe, recipeDom) => {
    recipeDom.querySelector('.title').innerText = recipe.title;
    recipeDom.querySelector('.ingredients').innerText = recipe.ingredients;
    recipeDom.querySelector('.instructions').innerText = recipe.instructions;
    recipeDom.querySelector('.image').src = recipe.image;
    recipeDom.querySelector('.image').alt = recipe.title;
};

export default updateRecipeDom;