import GifCard from './GifCard'
import useImages from '../hooks/useImages';

const GitGrid = ({ category }) => {

    const { images, loading } = useImages(category);
    return (
        <div>
            <h3>{category}</h3>
            {loading && <p>Cargando... </p>}
            <div className='card-grid'>
                {images.map((image) => {
                    return <GifCard key={image.id} {...image} />
                })}
            </div>
        </div>
    )
}

export default GitGrid


// OgXL8xicWEqtWS4KwUUTd1bDij98kMeG

// api.giphy.com/v1/gifs/search