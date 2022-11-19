
function draw(albums) {
    let albumsDiv = document.querySelector("#albums_list");
    albumsDiv.innerHTML = "";
    for(let album of albums ){
        albumsDiv.innerHTML +=`<p onclick ="albumClick(${album.id})">${album.title}</p>
        <hr>`
        ;
    }
}

;(async function(){
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albums = await response.json();
    draw(albums)
    }
)();

const albumClick = albumId =>{
    localStorage.setItem('albumId',albumId);
    location.href ='authors.html'
}