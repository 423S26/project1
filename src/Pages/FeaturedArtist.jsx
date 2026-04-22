import { useNavigate } from 'react-router-dom';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';

function FeaturedArtist() {
    const navigate = useNavigate();
    return (
        <h1 className="accent-section text-3xl font-bold mb-3 font-SatisfyR" > Asian Art App - User Documentation  </h1>

    );
}

export default FeaturedArtist;