const BASE_URL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "http://34.121.143.250:5000"


export const login = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/login", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const signup = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/user/signup", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const driverUpdate = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/updateDriver", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const plannerUpdate = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/updatePlanner", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const plannerUpdateDetails = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/updatePlannerDetails", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const getAllBookings = () => {
    var requestOptions = {
        method: 'GET',
    };
    return fetch(BASE_URL+"/getAllBookings", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const userDelete = (payload) => {
    var requestOptions = {
        method: 'DELETE',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/deleteUser", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const getUserById = (id) => {
    var requestOptions = {
        method: 'GET'
    };
    return fetch(BASE_URL+`/fetchUsersByID/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const getPlansById = (id) => {
    var requestOptions = {
        method: 'GET'
    };

    return fetch(BASE_URL+`/fetchPlansByID/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}


export const getUsers = () => {
    var requestOptions = {
        method: 'GET',
    };
    return fetch(BASE_URL+"/fetchUsers", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const getBookings = (email) => {
    var requestOptions = {
        method: 'GET',
    };
    return fetch(BASE_URL+`/fetchBookings/${email}`, requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

//


export const getDriverBookings = (email) => {
    var requestOptions = {
        method: 'GET',
    };
    return fetch(BASE_URL+`/fetchDriverBookings/${email}`, requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}
export const saveBooking = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/createPlan", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}

export const updateBooking = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(BASE_URL+"/updatePlan", requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    })
}