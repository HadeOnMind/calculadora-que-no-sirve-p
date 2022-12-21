
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const txop = document.getElementById("operacion")
const res = document.getElementById("resultado")
const button = document.getElementById("button")

function calcular(){
  const opValue = txop.value

  if (opValue == "+" || opValue == "*" || opValue == "-" || opValue == "/"){
      res.innerText = "Calculo posible"
  }else{
      res.innerText = "Operador desconocido"
  }
}
  
