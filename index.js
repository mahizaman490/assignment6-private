const handleCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
const data = await response.json()

const tabContainer = document.getElementById('tab-container')
data.data.slice(0,4).forEach((category)=>{
const div = document.createElement('div')
div.innerHTML = `
<a class="tab tabs-boxed mx-4 text-black my-2 px-2">${category.category}</a>


`
tabContainer.appendChild(div)
})
console.log(data.data)
}
handleCategory()