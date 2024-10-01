const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchData = async () => {
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error("No response from Backend");
        }
        const data = await response.json();
        console.log(data, 'fetchData fn'); 
        return data;
    }catch(err){
        console.log(err);
        return null;
    }

}