export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "a6975a84efmsh9aa99ba0ab8dd71p17294cjsnfc949ea565fc",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
      headers: headers
    }
  );

  const result = await response.json()

  return result

}
