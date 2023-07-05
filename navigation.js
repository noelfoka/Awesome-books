/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
function displaySection(sectionId) {
  const sections = ['list', 'form', 'contact'];

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      if (section === sectionId) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  }
}

  // console.log(sectionList, sectionForm, sectionContact);

  /*switch (section) {
    case 'list':
      sectionList.classList.remove('hidden');
      sectionForm.classList.add('hidden');
      sectionContact.classList.add('hidden');
      heading.innerHTML = 'All Awesome Books';
      break;

    case 'form':
      sectionList.classList.add('hidden');
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
*/
function setDate() {
  const today = new Date();
  return today.toDateString();
}
