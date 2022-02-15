import React from 'react';
import Film from './Film'

const FilmList = ({films}) => {

    const filmComponents = films.map((film) => {
        return <Film name = {film.name} url={film.url}></Film>
    })

  return (
    <>
    {filmComponents}
      					
    </>
  )

}

export default FilmList;