import "./image-gallery.css";
import galleryPlaceholder from "./../../images/video-gallery-placeholder.png"

const ImageGalleryPlaceholders = [
  {
    url: galleryPlaceholder
  },
  {
    url: galleryPlaceholder
  },
  {
    url: galleryPlaceholder
  },
  {
    url: galleryPlaceholder
  },
  {
    url: galleryPlaceholder
  },
  {
    url: galleryPlaceholder
  }
]

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {ImageGalleryPlaceholders.map((_, index) => {
        return (
          <div className='image' key={index}> 
            <img src={galleryPlaceholder} alt=""></img>
          </div>
        )
      })}
    </div>
  )  
}

export default ImageGallery;