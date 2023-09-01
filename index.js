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
   console.log(data.data)
}




 
handleCategory()

