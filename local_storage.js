const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Get chapters from localStorage or set to empty array if not found
let chaptersArray = getChapterList() || [];

// Display the stored chapters on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Event Listener for adding a new chapter
button.addEventListener('click', () => {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

// Function to add an item to the displayed list
function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  // Add delete functionality
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// Save chapters to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Get chapters from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Delete chapter from array and update storage
function deleteChapter(chapter) {
  // Remove the ❌ at the end
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
