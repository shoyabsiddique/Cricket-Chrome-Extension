async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8fd9cfd8-afaa-4dbc-b0db-fbb7f52231b7&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success")return;
            const MatchList = data.data;
            if(!MatchList)return [];
            const relevantData = MatchList.filter(match => match.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map(match => `${match.name}, ${match.status}`)
            console.log({relevantData});
            document.getElementById("matches").innerHTML = relevantData.map(match => `<li><img src="bat.gif" class="image">${match}</li>`).join();
            return relevantData;
        })
        .catch(e => console.log(e))
}
getMatchData();