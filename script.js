let firstNumber = parseInt(prompt('Digite o primeiro número:'));
let secondNumber = parseInt(prompt('Digite o segundo número:'));

let checkEquals =
  firstNumber === secondNumber ? 'são iguais' : 'são diferentes';

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;

let oddPair = sum % 2 == 0 ? 'par' : 'ímpar';

const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const restOfDivision = firstNumber % secondNumber;

alert(`Os dois números inseridos ${checkEquals}`);
alert(`A soma dos dois números é ${sum}`);
alert(`A soma dos dois números é ${oddPair}`);
alert(`A subtração dos dois números é ${subtraction}`);
alert(`A multiplicação dos dois números é ${multiplication}`);
alert(`A divisão dos dois números é ${division}`);
alert(`O resto da divisão dos dois números é ${restOfDivision}`);
