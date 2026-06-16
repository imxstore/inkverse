let trendingAnime = [];
let upcomingAnime = [];

async function loadAnime() {
    const cache = JSON.parse(
        localStorage.getItem("animeCache")
    );

    const FIVE_MINUTES = 5 * 60 * 1000;

    if (
        cache &&
        Date.now() - cache.timestamp < FIVE_MINUTES
    ) {

        trendingAnime = cache.trendingAnime;
        upcomingAnime = cache.upcomingAnime;

        console.log("Loaded from cache");
        return;
    }

    try {

        const [res1, res2] = await Promise.all([
            fetch("https://api.jikan.moe/v4/top/anime?limit=5"),
            fetch("https://api.jikan.moe/v4/seasons/upcoming?limit=5")
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();

        trendingAnime = data1.data;
        upcomingAnime = data2.data;

        localStorage.setItem(
            "animeCache",
            JSON.stringify({
                timestamp: Date.now(),
                trendingAnime,
                upcomingAnime
            })
        );

        console.log("Fetched from API");

    } catch(err) {

        console.error(err);

    }
}

loadAnime()
