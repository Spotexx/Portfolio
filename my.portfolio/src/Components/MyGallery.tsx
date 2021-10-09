//@ts-nocheck
import ImageGallery from 'react-image-gallery';
import graphs from '../portfolioPictures/graphs.PNG';
import homeTall from '../portfolioPictures/homeTall.PNG';
import homeWide from '../portfolioPictures/homeWide.PNG';
import searchable from '../portfolioPictures/searchable.PNG';

const images = [
    {
        original: graphs,
        thumbnail: graphs,
    },
    {
        original: homeTall,
        thumbnail: homeTall,
    },
    {
        original: homeWide ,
        thumbnail: homeWide,
    },
    {
        original: searchable,
        thumbnail: searchable,
    },
];

export const MyGallery = () => {
    return (
        <div>
            <ImageGallery items={images} />
        </div>
    );
};
