import {useState, useEffect} from 'react'
import './App.css';

import ImageCard from './components/ImageCard';

function App() {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-3">
        {
          images.map(image => {
            return <ImageCard key={image.id} image={image} />
          })
        }
      </div> 
    </div>
  );
}

export default App;
