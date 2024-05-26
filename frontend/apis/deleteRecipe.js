const deleteRecipe = async(id) => {
    try {
        const res = await fetch(`http://localhost:5002/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error(`Failed to delete recipes with status ${res.status}`,
            )
        }

        return await res.json();
    } catch (err) {
        console.error(err)
    }
};

export default deleteRecipe;