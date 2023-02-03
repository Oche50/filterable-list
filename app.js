// Get input element
let filterInput=document.getElementById('filter-input')
// Add Eventlistener
filterInput.addEventListener('keyup', function(){
    // console.log(1)
// Get value of input
let filterValue=document.getElementById('filter-input').value.toUpperCase()
console.log(filterValue)
// Get names (ul)
let ul=document.getElementById('names')
// Get items (li)
let li=document.querySelectorAll('.collection-item')
// loop through collection-items li
for(let i=0; i<li.length; i++){
// 
    let a = li[i].getElementsByTagName('a')[0]
// if matched
if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
    li[i].style.display='';
}
// if it dosent match
else{
    li[i].style.display='none'
}
}
})



