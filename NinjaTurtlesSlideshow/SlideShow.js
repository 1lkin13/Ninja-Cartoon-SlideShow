const images=[
{
    url:"https://wallpaperaccess.com/full/467860.jpg",
    title:"Raphael"
},
{
    url:"https://wallpaperaccess.com/full/467888.jpg",
    title:"Michelangelo"
},
{
    url:"https://cdn.wallpapersafari.com/45/56/R9m4GE.jpg",
    title:"Leonardo"
},
{
    url:"https://cdn.wallpapersafari.com/0/67/zBGDoN.jpg",
    title: "Donatello "
}



]
let CurrentIndex=0;


setImage(CurrentIndex)



images.forEach((img,index) =>{
    document.querySelector(".images").innerHTML+=` 
    <img src="${img.url}"  alt="${img.title}" onclick="setImage(${index})"> `

})
function setImage(index){
document.querySelector("#picture").setAttribute("src",images[index].url)
document.querySelector("h1").innerText=images[index].title
CurrentIndex=index



}
function prev(){
if(CurrentIndex<=0){
    CurrentIndex=images.length-1
}
else{
    CurrentIndex--;
}
setImage(CurrentIndex)

}
function next(){
    if(CurrentIndex>=images.length-1){
        CurrentIndex=0
    }
    else{
        CurrentIndex++;
    }
    setImage(CurrentIndex)
    
    }
    setInterval(next,3000)