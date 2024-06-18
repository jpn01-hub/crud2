import {Movie} from './index';

const MovieList=({list, onDeleteMovie})=>{

    return(
        <>
            <div className='movieList'>
            <ul className='lista'>
                {list.map(m => (
                    <li key={m.id}>
                    <Movie
                       movie={m}
                       onDelete={onDeleteMovie} 
                    />
                </li>
          ))}
        </ul>
            </div>
        </>
    )
}

export default MovieList