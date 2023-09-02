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




// starts here
// const contentDiv = document.getElementById("contentDiv");

// if ( data.data === 0) {
//   contentDiv.classList.remove("hidden");
// } else {
//   contentDiv.classList.add("hidden");
// }



//ends here




const handleLoad = async (categoryId) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data = await response.json()
  const AllData = data.data
  showCategoryData(AllData)

}

const showCategoryData = (mainData)=> {
  const errorMsg = document.getElementById('contentDiv')
  if(mainData.length === 0){
  errorMsg.classList.remove("hidden")


  }else{

    errorMsg.classList.add('hidden')
  }
  const cardContainer = document.getElementById("card-container")
  cardContainer.innerHTML = ""
  mainData.forEach((news) => {
    const seconds = news.others.posted_date;
    const runingMinutes = seconds % 60;

    const totalMinutes = (seconds-runingMinutes) / 60;

    const runingHourse =  totalMinutes % 60;
    const totalHours = (totalMinutes - runingHourse) / 60;

    let showTime;
    if(seconds.length === 0){
      showTime;
    }
    else {
      showTime = `${totalHours} Hours ${runingHourse} minutes ago`
    }


 
   const div = document.createElement("div")
   div.innerHTML = `
     <div class="card h-96 bg-base-100 shadow-xl">
     <figure class='h-40 relative'>
     <img src=${news.thumbnail} class=' w-full'/>
      <div class=" ${showTime=== undefined ? 'bg-transparent  border-none' : 'bg-black'} badge badge-neutral absolute right-2 bottom-5">
        ${showTime ? showTime : ''}
      </div>
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
           <p class="pl-12">${news.authors[0].profile_name} </p>
           <div class=' w-10 h-8 '>
           
           
           ${news.authors[0].verified ? "<img src='../images/verified.png'  />" : ''}
           </div>
           
        
         </div>
         <h3 class="pl-12"> <span>${news.others.views}</span> views</h3>
       </div>
     </div>
   `;
   cardContainer.appendChild(div);
 })
}

 
handleCategory()
handleLoad(1000)






 


