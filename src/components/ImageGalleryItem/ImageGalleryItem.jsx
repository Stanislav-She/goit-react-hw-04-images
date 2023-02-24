import PropTypes from 'prop-types';
import ImageGalleryItemStyle from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, onClick, bigImage }) => {
  return (
    <li
      onClick={() => onClick(bigImage)}
      className={ImageGalleryItemStyle.galleryItem}
    >
      <img className={ImageGalleryItemStyle.galleryImage} src={url} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  bigImage: PropTypes.string.isRequired,
};
