var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem) ;  

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeAll = document.getElementById('removeall');
removeAll.addEventListener('click',removeallItem);




function addItem(){
   var input = document.getElementById('input');
   var item = input.value;
   ul = document.getElementById('list');
   var textnode = document.createTextNode
   (item);

   if (item === '') {
       return false;
       // add a p tag and asign a value of "Enter your todo"
   }else{
       // create li
       li = document.createElement('li');

       // create checkbox
       var checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.setAttribute('id','check');

    // create checkbox

       var lable = document.createElement('label');
       lable.setAttribute('for','item');

     // add this element on web page

       ul.appendChild(lable);
       li.appendChild(checkbox);
       lable.appendChild(textnode);
       li.appendChild(lable);
       ul.insertBefore(li, ul.childNodes[0]);
       
       setTimeout(() => {

        li.className = 'visual';

           
       },2);
      
       input.Value = '';

   }
}

function removeItem(){
    li = ul.children
    for(let index = 0; index < li.length; index++){
       while ( li[index].children[0].checked){
        ul.removeChild(li[index])
       }
        
    }  
}

function removeallItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index]) {
            ul.removeChild(li[index])
        }
        
    }
}

