function createComponent() {
  const component = document.createElement('div');
  component.classList.add('app-cmp-input');

  const label = document.createElement('label');

  const title = document.createElement('b');
  title.classList.add('app-elem-input-title');

  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('value', '0');
  input.classList.add('app-elem-input');

  component.append(label);
  label.append(title, input);

  return component;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.app-cmp-input-list');
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
    const inputComponent = createComponent();
    const title = inputComponent.querySelector('.app-elem-input-title');
    title.textContent = `Number ${
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
