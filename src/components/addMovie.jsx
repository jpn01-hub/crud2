import { useState } from 'react';

const AddMovie = ({onAddMovie}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
    return (
        <>
          <div className='inputs'>
            <input
            type='text'
            placeholder="Agregar Pelicula"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type='text'
            placeholder="Agregar Descripcion"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type='text'
            placeholder='Categoria'
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <button onClick={() => {
                setTitle('')
                setCategory('')
                setDescription('')
                onAddMovie(title,description,category)
          }}>Añadir Pelicula</button>
          </div>
          
        </>
      
    );
  };
  
  export default AddMovie;