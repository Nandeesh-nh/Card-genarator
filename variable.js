let i = 0;

let title,views,cName,old,duration,url;

function myfunction() {
    
    title = prompt("enter the title of the video here: ");
    views = prompt("enter the number of the views(IN NUMBERS ONLY)",);
    views = parseInt(views);
    if(typeof(views)=='number'){
    if(views>=1000&&views<1000000) {
        views = Math.floor(views/1000) + "k"
    }
    else if(views>=1000000) {
        views = Math.floor(views/1000000) + "M"
    }
  }
    else {
        views = "null"
    }
    cName = prompt("enter the channel Name here: ")
    old = prompt("enter how many months old is the video: ");
    duration = prompt("enter the duration of the video(IN FORMAT OF HH:MM:SS)");
    url = prompt("enter the thumbnail of the video")
    
    i++;
    console.log(i)
    createCard(title,cName,views,old,duration,url)
}

    


function createCard(title,cName,views,old,duration,thumbNail) {
   var div = document.createElement("div");
       div.classList.add("container");
       document.body.children[2].appendChild(div);
  let card = document.body.getElementsByClassName("container")[i-1];
  let tum = document.createElement("img");
      tum.setAttribute("src",`${thumbNail}`);
      tum.classList.add("image");
  card.append(tum);

  let t = document.createElement("h2");
      t.classList.add("title");
      t.innerText= `${title}`
  card.append(t)

  var div = document.createElement("div");
      var h = document.createElement("h4");
          h.innerText = "channel :";
          div.append(h);
       var p = document.createElement("p");
       p.innerText = `${cName}`
       p.classList.add("name")
         div.append(p);
  card.append(div);

  var div = document.createElement("div");
      var h = document.createElement("h4");
          h.innerText = "upload :";
          div.append(h);
       var p = document.createElement("p");
       p.classList.add("name")
       p.innerText = `${old}`
         div.append(p);
  card.append(div);

  var div = document.createElement("div");
      var h = document.createElement("h4");
          h.innerText = "views :";
          div.append(h);
       var p = document.createElement("p");
       p.classList.add("name")
       p.innerText = `${views}`
         div.append(p);
  card.append(div);

  var div = document.createElement("div");
      var h = document.createElement("h4");
          h.innerText = "duration :";
          div.append(h);
       var p = document.createElement("p");
       p.classList.add("name")
       p.innerText = `${duration}`
         div.append(p);
  card.append(div);
          
}



// createCard("Introuction to Backend","code with harry",560000,21:32,url)