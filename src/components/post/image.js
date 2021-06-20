import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { getImageUrl } from '../../services/firebase';

export default function Image({ src, caption }) {
  async function handleToggleFollow() {
    const imageUrl = await getImageUrl(src);
    return imageUrl;
  }
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <img
        src={handleToggleFollow().then((imageUrl) => {
          console.log(imageUrl);
        })}
        alt={caption}
      />
      ;
    </Suspense>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
