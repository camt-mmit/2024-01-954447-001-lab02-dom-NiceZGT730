import { assignComponent } from './inputs-component.js';

const mainElement = document.querySelector('.app-cmp-main');
const sectionTemplate = document.querySelector('.app-cmp-section');


const addSection = () => {
  const newSection = sectionTemplate.cloneNode(true);
  mainElement.append(newSection);


  const sectionTitle = newSection.querySelector('.app-cmp-section-title');


  const sections = [...mainElement.querySelectorAll('.app-cmp-section')];


  const sectionNumber = sections.length;
  sectionTitle.textContent = `Section ${sectionNumber}`;

  updateDeleteButtonStatus();

  assignComponent(newSection);


  const inputList = newSection.querySelector('.app-cmp-input-list');
  inputList.innerHTML = '';
  newSection.querySelector('.app-cmp-add-input').click();
};


const removeSection = (section) => {
  section.remove();

  updateSectionNumbers();

  updateDeleteButtonStatus();
};


const updateSectionNumbers = () => {
  const sections = [...mainElement.querySelectorAll('.app-cmp-section')];

  sections.forEach((section, index) => {
    const sectionTitle = section.querySelector('.app-cmp-section-title');
    sectionTitle.textContent = `Section ${index + 1}`;
  });
};


const updateDeleteButtonStatus = () => {
  const sections = [...mainElement.querySelectorAll('.app-cmp-section')];

  sections.forEach((section) => {
    const deleteButton = section.querySelector('.app-cmp-remove-section');
    if (sections.length === 1) {
      deleteButton.disabled = true;
    } else {
      deleteButton.disabled = false;
    }
  });
};

mainElement.addEventListener('click', (ev) => {
  if (ev.target?.matches('.app-cmp-add-section')) {

    addSection();
  }

  if (ev.target?.matches('.app-cmp-remove-section')) {

    const section = ev.target.closest('.app-cmp-section');
    removeSection(section);
  }
});


assignComponent(sectionTemplate);


updateDeleteButtonStatus();
