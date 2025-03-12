const arrow =document.querySelector('.arrowBottom');
const drobDownMenue = document.querySelector('.drobDownMenue');
const filename=document.querySelectorAll('.file-name')
const fileinput=document.querySelectorAll('.file-input')

// file-input
if(fileinput){
  fileinput.forEach((fileinput,i)=>{
    console.log(fileinput)
    fileinput.addEventListener('change',(e)=>{
      filename[i].innerHTML=`${e.target.files[0].name}`
    })
  })
}
// 
arrow.addEventListener('click',()=>{
  arrow.classList.toggle('arrowBottomRotate');
  drobDownMenue.style.display = drobDownMenue.style.display === 'block' ? 'none' : 'block';
})