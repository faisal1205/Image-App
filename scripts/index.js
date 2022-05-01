// link = "https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY"
//access key ="LmYiUHjawdPHWv2C5Jp3l07M--an6HHWb8LlyT10vYQ"


//let url =`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=LmYiUHjawdPHWv2C5Jp3l07M--an6HHWb8LlyT10vYQ`



import {navbar} from "../components/navbar.js"
let n = document.getElementById("navbar")
n.innerHTML = navbar()





import { searchImages , append} from "./fetch.js"

let search = (e) =>                 //e is event
{
    if(e.key === "Enter")  //we are not using oninput becz we dont want to make req on every input we want only after keydown complete word
    {//we have to press enter then only data will show
        var API ="LmYiUHjawdPHWv2C5Jp3l07M--an6HHWb8LlyT10vYQ"
        let value = document.getElementById("query").value
       // console.log(value)
       
      searchImages(API,value).then((data) =>{
       // console.log(data)
        let container = document.getElementById("container")
        container.innerHTML = null
append(data.results,container)
      })

    }
}

document.getElementById("query").addEventListener("keydown",search) //keydown means once u press the key it will activate




let categories = document.getElementById("categories").children //it will give all childs of that id
//console.log(categories)
function cSearch()  //if we write arrow function here it will give error becz this. is not accesssable in case of arrow function
{
   // console.log(this.id)
  
    var API ="LmYiUHjawdPHWv2C5Jp3l07M--an6HHWb8LlyT10vYQ"
    searchImages(API,this.id).then((data) =>{
      //  console.log(data)
        let container = document.getElementById("container")
        container.innerHTML = null
append(data.results,container)
      })

}
for(let ele of categories)
{
    ele.addEventListener("click",cSearch)
}




let sortFunction = async () =>
{
    
    let sortType = document.getElementById("sort").value
    var value = document.getElementById("query").value
   
    console.log(value)
    //console.log(sortType)
    let url =`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=${sortType}&client_id=LmYiUHjawdPHWv2C5Jp3l07M--an6HHWb8LlyT10vYQ`
try {
    
    let res = await fetch(url);
    var data = await res.json();
    //console.log(data)
    let container = document.getElementById("container")
    container.innerHTML = null
    append(data.results,container)
} catch (err) {
    console.log(err)
}

}
document.getElementById("sort").addEventListener("change",sortFunction)


let filterFunction = async () =>
{
    let filterValue = document.getElementById("filter").value

let value = document.getElementById("query").value
    console.log(value)
    let url =`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&orientation=${filterValue}&client_id=LmYiUHjawdPHWv2C5Jp3l07M--an6HHWb8LlyT10vYQ`
try {
    
    let res = await fetch(url);
    var data = await res.json();
  // console.log(data)
    let container = document.getElementById("container")
    container.innerHTML = null
    append(data.results,container)
} catch (err) {
    console.log(err)
}



}
document.getElementById("filter").addEventListener("change",filterFunction)
//sortFunction()
// let searchImages = async () =>
// {
//     let value = document.getElementById("query")
//     try {
//         let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=LmYiUHjawdPHWv2C5Jp3l07M--an6HHWb8LlyT10vYQ`)
//         let data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }