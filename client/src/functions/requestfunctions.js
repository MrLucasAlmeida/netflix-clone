export async function getMovieListByKeyword(keyword, pageNum) {
    if (keyword === '') return [];

    const response = await fetch('http://localhost:5000/movielist/keyword', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keyword, pageNum })
    });
    const data = await response.json();
    // console.log(response.ok ? data.movieList : data.error);
    return response.ok ? data.movieList : data.error;
}

export async function getMovieListbyGenre(genreId, pageNum) {

    if (genreId === -1) return [];
    console.log(pageNum);
    const response = await fetch('http://localhost:5000/movielist/genre', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ genreId, pageNum })
    });
    const data = await response.json();
    // console.log(response.ok ? data.movieList : data.error);
    return response.ok ? data.movieList : data.error;
}


export async function getGenreList() {
    const response = await fetch('http://localhost:5000/genres', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    // console.log(response.ok ? data.genreList : data.error);
    return response.ok ? data.genreList : data.error;
}


export async function getConfiguration() {
    const response = await fetch('http://localhost:5000/configuration', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(response.ok ? data.configuration : data.error);
    return response.ok ? data.configuration : data.error;
}


export async function getMovieDetails(movieId) {
    const response = await fetch(`http://localhost:5000/movie/${movieId}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movieId })
    });
    const data = await response.json();
    // console.log('got movie details back');
    // console.log(response.ok ? data : data.error);
    return response.ok ? data : data.error;
}


export async function getMovieListbyCategory(category, pageNum) {

    if (category === '') return [];
    console.log(pageNum);
    const response = await fetch('http://localhost:5000/movielist/category', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category, pageNum })
    });
    const data = await response.json();
    // console.log(response.ok ? data.movieList : data.error);
    return response.ok ? data.movieList : data.error;
}

export async function getMovieListbyPerson(personId, pageNum) {

    if (personId === '') return [];
    console.log(pageNum);
    const response = await fetch('http://localhost:5000/movielist/person', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ personId, pageNum })
    });
    const data = await response.json();
    // console.log(response.ok ? data.movieList : data.error);
    return response.ok ? data.movieList : data.error;
}
