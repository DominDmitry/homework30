import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.log(error));
    }, [userId]);

    return (
        <div className="box">
            <h1 className="boxTitle">User Albums</h1>
            <ul className="boxList boxListAlbums">
                {albums.map(album => (
                    <AlbumItem key={album.id} album={album} />
                ))}
            </ul>
        </div>
    );
};

const AlbumItem = ({ album }) => {
    return (
        <div>
            <li className="boxItemtem boxItemAlbums">
            {album.title};
        </li>
        <li className="boxItemtem boxItemAlbums">
            <Link to={`/albums/${album.id}`}>{'User Photos'}</Link>
        </li>
        </div>
    );
};

export default AlbumList;