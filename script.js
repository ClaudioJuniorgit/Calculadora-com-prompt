let add = document.getElementById('text')
const calc = () => {
  let numberOne = Number(prompt('Primeiro valor'))
  let numberTwo = Number(prompt('Segundo valor'))
  let resolve = Number(
    prompt(` Valores Informados: ${numberOne} e ${numberTwo}
  O que vamos fazer?
  [1] Somar
  [2] Subtrair
  [3] Multiplicar
  [4] Dividir
    `)
  )
  if (resolve == 1) {
    let result = numberOne + numberTwo
    add.innerHTML = `<b>Calculando</b> <br>
    ${numberOne} + ${numberTwo} = <b>${result}</b>`
  } else if (resolve == 2) {
    let result = numberOne - numberTwo
    add.innerHTML = `<b>Calculando</b> <br>
    ${numberOne} - ${numberTwo} = <b>${result}</b>`
  } else if (resolve == 3) {
    let result = numberOne * numberTwo
    add.innerHTML = `<b>Calculando</b> <br>
    ${numberOne} X ${numberTwo} = <b>${result}</b>`
  } else if (resolve == 4) {
    let result = numberOne / numberTwo
    add.innerHTML = `<b>Calculando</b> <br>
    ${numberOne} / ${numberTwo} = <b>${result}</b>`
  } else {
    add.innerHTML = `OPÇÃO INVÁLIDA! Você digitou 1 e 2, mas não sei o que fazer com eles.`
  }
}
