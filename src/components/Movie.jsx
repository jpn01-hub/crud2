const Movie=({movie, onDelete})=>{

    return(
        <div className="movie">
            <h1>{movie.title}</h1>
            <p>Categoria: {movie.category}</p>
            <hr/>
            <p>{movie.description}</p>
            <hr/>
            <button onClick={() => onDelete(movie.id)}>
            Eliminar
          </button>
        </div>
    )
    
}
export default Movie