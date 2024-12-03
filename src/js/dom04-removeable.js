function createComponent(template) {
  return template.content.cloneNode(true).firstElementChild;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.app-cmp-input-list');
  const template = document.querySelector('.app-templ-input');

  const completeResult = () => {
    const inputElements = [
      ...document.querySelectorAll('input[type="number"].app-elem-input'),
    ];

    const result = inputElements.reduce(
      (result, inputElement) => result + inputElement.valueAsNumber,
      0,
    );

    const output = document.querySelector('output.app-elem-result');
    output.value = `${result.toLocaleString()}`;
  };

  const updateComponent = () => {
    [...container.querySelectorAll('.app-cmp-input')].forEach(
      (inputComponent, index, inputComponents) => {
        [
          ...inputComponent.querySelectorAll('.app-elem-input-title-no'),
        ].forEach((element) => (element.textContent = `${index + 1}`));
        [...inputComponent.querySelectorAll('.app-cmp-remove-input')].forEach(
          (element) => (element.disabled = inputComponents.length === 1),
        );
      },
    );
  };

  const addComponent = () => {
    const inputComponent = createComponent(template);
    // const title = inputComponent.querySelector('.app-cmp-input-title-no');
    // title.textContent = `${
    //   container.querySelectorAll('.app-cmp-input').length + 1
    // }`;
    container.append(inputComponent);

    const input = inputComponent.querySelector('input');
    inputComponent.addEventListener('change', (ev) => {
      if (ev.target?.matches('input[type="number"].app-elem-input')) {
        completeResult();
      }
    });
    inputComponent.addEventListener('click', (ev) => {
      if (ev.target?.matches('.app-cmp-remove-input')) {
        inputComponent.remove();
        updateComponent();
        completeResult();
      }
    });
    updateComponent();
    completeResult();
  };

  document
    .querySelector('.app-cmp-add-input')
    .addEventListener('click', addComponent);

  addComponent();
});
