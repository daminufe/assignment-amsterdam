const API = 'http://localhost:3000';

const fetchApi = async uri => {
    const response = await fetch(`${API}${uri}`);
    return await response.json();
};


const searchFlights = async search => {
    if (search.length < 3) {
        return false;
    }

    return await fetchApi(`/flights.json?search=${search}`);
};

export default {
    searchFlights
};
