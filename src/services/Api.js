class Api {
    getHistory() {
        return fetch('https://api.myjson.com/bins/bnbkc')
            .then((res) => res.json()).catch(() => {});
    }


    getOnAir() {
        return fetch('http://www.heavy-music.net/songTitle.php')
            .then((res) => res.text()).catch(() => {});
    }
}

export default Api;