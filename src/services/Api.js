class Api {
    getHistory() {
        return fetch('http://rock-songs.online/api/history')
            .then((res) => res.json()).catch(() => {});
    }


    getOnAir() {
        return fetch('http://www.heavy-music.net/songTitle.php')
            .then((res) => res.text()).catch(() => {});
    }
}

export default Api;