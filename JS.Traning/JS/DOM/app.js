// const body= document.body
// body.addEventListener('click',()=>{
//     body.innerHTML= '<h1> Hello World</h1>'
// });

const btnCreate =document.querySelector('#btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const listItems =document.getElementsByTagName('li');
const listContainer = document.querySelector('.list-container');




function attachRemoveBtn(li){
  let remove = document.createElement('button');
  remove.className= 'remove';
  remove.textContent= 'Remove';
  li.appendChild(remove);
}
for (let li of listItems) {
 attachRemoveBtn(li)
}


// btnCreate.addEventListener('click',()=> {
// const input = document.querySelector('.input-main');
// const list = document.querySelector('ul');
// // const item = document.createElement('li');
// list.insertAdjacentHTML(
//   'afterbegin',
//   `<li>${input.value}|</li>`
// )
// // item.textContent = input.value;
// // list.prepend(item);
// input.value = '';

// })

 btnToggle.addEventListener('click',()=> {

  if (listContainer.style.display === 'none') {
    listContainer.removeAttribute('style')
    btnToggle.textContent = 'hide List'

  }else{
    listContainer.style.display = 'none'
    btnToggle.textContent = 'show List'
  }
 })

//  btnRemove.addEventListener('click',()=> {
//  const lastItem = document.querySelector('li:last-child');
//   // const list = document.querySelector('ul');
//   lastItem.remove()
//  })

 document.addEventListener('copy', (event) => {
  alert('Please be sure to credit the author')
});



// for(const item of listItems ){
// item.addEventListener('mouseover',()=>{
//  item.textContent = item.textContent.toUpperCase();
// } )
// }




document.addEventListener('click', (event) => {

console.log(event.target)
})

listContainer.addEventListener( 'click', (event)=>{
  if(event.target.tagName ==='BUTTON'){
    const button = event.target;
    const li = button.parentNode;
    li.remove();
 }
})


btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveBtn(li)
  ul.appendChild(li);
  input.value = '';
});