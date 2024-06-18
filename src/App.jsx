import { useState, useCallback } from 'react'
import {MovieList,AddMovie} from './components'
import './App.css'
const initcial = [
  { id: 0, title: 'Matar o morir',description: 'Una pelicula basada en hechos reales', category: 'accion', done: true },
  { id: 1, title: 'Democracia',description: 'Una historia de libertad', category: 'fantacia', done: false },
  { id: 2, title: 'La palabra del mudo',description: 'Cuenta la historia...', category: 'drama', done: false },
];
function App() {
  const [movie,setMovie]=useState(initcial)
  const [search, setSearch]=useState('')
 
  const handleAdd=(title,description,category)=>{
    setMovie([
      ...movie,
      {
        id: Date.now(),
        title: title,
        description: description,
        category: category
      }
    ]);
  }
  
  const handleDelete=(movieID)=>{
      setMovie(
        movie.filter(m => m.id !== movieID)
      );
    
  }
  const handleSearch = useCallback((e) =>{
    setSearch (e.target.value);
  },[setSearch])

  return (
    <>
    <div className='header'>
      <input
            className='buscar'
            type='text'
            placeholder="Buscar"
            value={search}
            onChange={handleSearch}
          />
          <AddMovie onAddMovie={handleAdd}/>
    </div>
      
      <MovieList 
        list={movie.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )}
        onDeleteMovie={handleDelete}/>
    </>
  )
}

export default App
