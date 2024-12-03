function createComponent(template) {
  return template.content.cloneNode(true).firstElementChild;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.app-cmp-input-list');
  const template = document.querySelector('.app-templ-input');

  const completeResult = () => {
    const inputComponents = [
      ...document.querySelectorAll('input[type="number"].app-elem-input'),
    ];

    const result = inputComponents.reduce(
      (result, inputComponent) => result + inputComponent.valueAsNumber,
      0,
    );

    const output = document.querySelector('output.app-elem-result');
    output.value = `${result.toLocaleString()}`;
  };

  const addComponent = () => {
    const inputComponent = createComponent(template);
    const title = inputComponent.querySelector('.app-cmp-input-title-no');
    title.textContent = `${
      container.querySelectorAll('.app-cmp-input').length + 1
    }`;
    container.append(inputComponent);

    const input = inputComponent.querySelector('input');
    input.addEventListener('change', completeResult);

    completeResult();
  };

  document
    .querySelector('.app-cmp-add-input')
    .addEventListener('click', addComponent);

  addComponent();
});
