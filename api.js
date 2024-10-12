console.log('video script added');
// 1 - fetch, load andshow categorieson html file












//crate loadcategories
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCatagories(data.categories))
        .catch((error) => console.log(error));
};



// load videos
const loadVideos = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error));
};
const cardDemo = {

    "category_id": "1001",
    "video_id": "aaah",
    "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
    "title": "Colors of the Wind",
    "authors": [{
        "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
        "profile_name": "Ethan Clark",
        "verified": true
    }],
    "others": {
        "views": "233K",
        "posted_date": "16090"
    },
    "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."

};










const displayVideos = (videos) => {

    const videoContainer = document.getElementById("videos");
    videos.forEach((videos) => {
        console.log(videos);
        const card = document.createElement("div");
        card.classList = "card card-compact";

        card.innerHTML = `
        <figure class="h-[200px]">
    <img src="${videos.thumbnail}
    class="h-full w-full object-cover"
      alt="Shoes" />
  </figure ]">
  <div class="px-0 py-2 flex gap-2">
  <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${videos.authors[0].profile_picture}/>
  </div>
    <div>
        <h2 class=font-bold>${videos.title}</h2>
       <div>
         <p>${videos.authors[0].profile_name}</p>
         <img src="https://fontawesome.com/icons/badge-check?f=sharp&s=regular"/>

       </div>
    </div>
    
    </div>
  </div>
    
    `;
        videoContainer.append(card);





    });


};








//create display catagoriesloadCatagories
const displayCatagories = (catagories) => {
    const categoryContainer = document.getElementById('categories');



    // added data in html
    catagories.forEach((item) => {
        console.log(item);
        // create button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;


        // add button
        categoryContainer.append(button);
    });

};
loadCategories();
loadVideos();