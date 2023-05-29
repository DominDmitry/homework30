import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error));
    }, [albumId]);

    return (
        <div className="box">
            <h1 className="boxTitle">Photo List</h1>
            <ul className="boxList boxListPhotos">
                {photos.map(photo => (
                    <li className="boxItem boxItemPhotos" key={photo.id}>
                        <img className="boxImg" src={photo.thumbnailUrl} alt="img" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;