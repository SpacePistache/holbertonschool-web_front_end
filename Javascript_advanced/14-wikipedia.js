function createElement(data) {
    console.log(data);
}

function queryWikipedia(callback) {
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;

            callback(extract);
        })
        .catch(err => console.error("Error fetching Wikipedia:", err));
}

queryWikipedia(createElement);
