export function createComponent(template){
  return template.content.cloneNode(true).firstElementChild;
}
export function assignComponent(element){

    const template = element.querySelector('template.app-templ-input');
   const container = template.parentElement;

  const completeResult = () => {
    const inputElements = [
      ...container.querySelectorAll('input[type="number"].app-elem-input'),
    ];

    const result = inputElements.reduce(
      (result, inputElement) => result + inputElement.valueAsNumber,
      0,
    );

    const output = [...element.querySelectorAll('output.app-elem-result'),]
    .forEach((output) => (output.value = `${result.toLocaleString()}`));
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

  element.addEventListener('click',(ev)=>{
    if (ev.target?.matches('.app-cmp-add-input')){
      addComponent();
    }
  });
   

  addComponent();

}
