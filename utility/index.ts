
export const fetchCars = async () => {
    const header = {
        'x-rapidapi-key': 'b9134637e3msh5be23cc5b19af34p1ae9f2jsn917c29671363',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', 
        {
        headers : header,
    }
)

    const result = await response.json()

    return result;

}