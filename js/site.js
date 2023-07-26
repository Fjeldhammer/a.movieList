const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGJiOWUzYTc3OTQxMmJlNjlkNzBlNzZjOGQ3ZjgxNCIsInN1YiI6IjY0YzE2YTQ1ZGY4NmE4MDEyNTgyODkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MO5hOqxWBxw_oWz9eMDX58JLcsBwbV-eZLk6dnDqPS8'

// https://api.themoviedb.org/3/movie/popular

async function getMovies() {

    try {

        let response = await fetch('https://api.themoviedb.org/3/movie/popular', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        let data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}