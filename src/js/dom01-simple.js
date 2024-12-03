document.addEventListener('DOMContentLoaded', () => {
  const inputConponents = [
    ...document.querySelectorAll('input[type="number"].app-elem-input'),
  ];

  const completeResult = () => {
    const result = inputConponents.reduce(
      (result, inputConponent) => result + inputConponent.valueAsNumber,
      0,
    );

    const output = document.querySelector('output.app-elem-result');
    output.value = `${result}`;
  };

  inputConponents.forEach((inputConponents) => {
    inputConponents.addEventListener('change', completeResult);
  });

  completeResult();
});
