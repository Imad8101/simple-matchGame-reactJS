import './index.css'

const FruitItem = props => {
  const {fruitDetails, updateImageListIndex} = props
  const {id, thumbnailUrl} = fruitDetails
  const onCLickThumbnail = () => {
    updateImageListIndex(id)
  }

  return (
    <li className="fruit-item">
      <button type="button" className="fruit-btn" onClick={onCLickThumbnail}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-fruit-image"
        />
      </button>
    </li>
  )
}

export default FruitItem
