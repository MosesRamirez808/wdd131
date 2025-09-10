 
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

 
button.addEventListener('click', function () {
  
  const chapter = input.value.trim();

   
  if (chapter !== '') {
     
    const li = document.createElement('li');
    li.textContent = chapter;

     
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

     
    li.append(deleteButton);

     
    list.appendChild(li);
  }

   
  input.value = '';
  input.focus();
});

 
list.addEventListener('click', function (e) {
   
  if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    list.removeChild(li);
    input.focus();
  }
});
