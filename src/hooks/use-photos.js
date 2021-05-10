import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const followingUserIds = await getUserByUserId(userId);
    }

    console.log(userId);
    // getTimelinePhotos()
  }, []);
  return { photos };
}
