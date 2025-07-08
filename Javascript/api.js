export const get=async(endpoint)=>{
    const data= await fetch(`http://localhost:8080/Proyecto_grado2/api/${endpoint}`);
    return await data.json();
}

export const post = async (endpoint, data) => {
    try {
    const response = await fetch(`http://localhost:8080/Proyecto_grado2/api/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response; 
  } catch (error) {
    console.error("Error en POST:", error);
    return null; 
  }
}