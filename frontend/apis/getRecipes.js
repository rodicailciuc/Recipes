const getRecipes =async () => {
    try {
        const res = await fetch('http://localhost:5002');
        if (!res.ok) {
            throw new Error(`Failed to fetch recipes with status ${res.status}`,
            );
        }

        const data =  await res.json();
        return data;
    } catch (err) {
        console.error(err)
    }
};

export default getRecipes;