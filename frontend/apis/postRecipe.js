const postRecipe = async (newRecipe) => {
    try {
        const res = await fetch('http://localhost:5002', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        });
        if (!res.ok) {
            throw new Error(`Failed to post recipe with status ${res.status}`);
        }
        const data = await res.json();
        return data
    } catch (err) {
        console.error(err);
    }
};

export default postRecipe;