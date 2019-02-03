class Api {
    getHistory() {
        return fetch('https://api.myjson.com/bins/bnbkc')
            .then((res) => res.json());
    }


    getOnAir() {
        return fetch('http://www.heavy-music.net/songTitle.php')
            .then((res) => res.text());
    }
}

export default Api;