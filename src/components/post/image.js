import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getImageUrl } from '../../services/firebase';

export default function Image({ src, caption }) {
  // const handleToggleFollow = async () => {
  //   const imageUrl = await resolve(getImageUrl(src));
  //   console.log(`getImageUrl`, getImageUrl(src));
  //   return imageUrl;
  // };

  async function handleToggleFollow() {
    const imageUrl = await getImageUrl(src);
    console.log(`imageUrl`, imageUrl);
  }
  return (
    <img
      src={handleToggleFollow().then((imageUrl) => console.log('imageUrl :>> ', imageUrl))}
      alt={caption}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
