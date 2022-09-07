import React, { useEffect, useState } from "react"
import SongList from '../components/SongList'

const SongContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);


    useEffect(() => {
        getSongs();
    },[]);

    const getSongs = function () {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((res) => res.json())
        .then((data) => setSongs(data.feed.entry));
    };

    const onSongSelect = function (song) {
        setSelectedSong(song);
    };

    return (
        <div className="main-container">
            {/* <SongDetail song={selectedSong} /> */}
            <SongList songs={songs}/>
        </div>
    );
};

export default SongContainer