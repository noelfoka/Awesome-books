/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
function displaySection(section) {
  const sectionList = document.getElementById('list');
  const sectionForm = document.getElementById('form');
  const sectionContact = document.getElementById('contact');
  const heading = document.getElementById('title');
  const date = document.getElementById('date');
  date.textContent = setDate();

  console.log(sectionList, sectionForm, sectionContact);

  switch (section) {
    case 'list':
      sectionList.classList.remove('hidden');
      sectionForm.classList.add('hidden');
      sectionContact.classList.add('hidden');
      heading.innerHTML = 'All Awesome Books';
      break;

    case 'form':
      sectionList.classList.remove('hidden');
      sectionForm.classList.remove('hidden');
      sectionContact.classList.add('hidden');
      heading.innerHTML = 'Add a New Book';
      break;

    case 'contact':
      sectionList.classList.add('hidden');
      sectionForm.classList.add('hidden');
      sectionContact.classList.remove('hidden');
      heading.innerHTML = 'Contact Information';
      break;

    default:
      break;
  }
}

function setDate() {
  const today = new Date();
  return today.toDateString();
}
