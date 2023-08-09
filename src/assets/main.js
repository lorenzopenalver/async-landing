const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC2t5bjwHdUX4vM2g8TRDq5g&part=snippet%2Cid&order=date&maxResults=10';
const content = null || document.getElementById("content")
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f8d88a73a8mshdebefa94c33066ap1e5285jsnece760028ac5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}
(async () => {
    try {
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => 
            
            ` 
            <a href="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
            <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>`).slice(0,10).join("")}`
      content.innerHTML = view;
    }
 
    catch (error){
        alert("Error!");
     }
})();