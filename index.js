const handleCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
const data = await response.json()

const tabContainer = document.getElementById('tab-container')
const trimedData = data.data.slice(0,4)
trimedData.forEach((category)=>{
const div = document.createElement('div')
div.innerHTML = `
<a onclick="handleLoad('${category.category_id}')" class="tab tabs-boxed mx-4 text-black my-2 px-2">${category.category}</a>


`
tabContainer.appendChild(div)
})
// console.log(data.data)


}

const handleLoad = async (categoryId) => {
   const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
   const data = await response.json()
   const cardContainer = document.getElementById("card-container")
   cardContainer.innerHTML = ""
   data.data.forEach((news) => {
    console.log(news)
const div = document.createElement("div")
div.innerHTML = `


<div class="card h-96 bg-base-100 shadow-xl">
<figure><img src=${news.thumbnail} />

</figure>
<div class="card-body"> 
<div class="flex">
<div class="avatar">
    <div class="w-16 rounded-full">
      <img src=${news.authors[0].profile_picture} />
    </div>
  </div>
<h2 class="card-title pl-3">
${news.title.slice(0,14)}

</h2>
</div>
<div class="flex items-center">

<p class="pl-24 " id="">${news.authors[0].profile_name}</p>

<div class="badge badge-primary mr-20 " id="">
${news.authors[0].verified}


</div>

</div>
<h3 class="pl-28"> <span id="">${news.others.views}</span> views</h3>
</div>

</div>


`
cardContainer.appendChild(div)

 })

}




 
handleCategory()
handleLoad(1000)
