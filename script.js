document.getElementById('calcularBtn').addEventListener('click', calcularReajuste);

function calcularReajuste() {
  const salario = parseFloat(document.getElementById('salary').value);
  
  if (isNaN(salario) || salario <= 0) {
    document.getElementById('result').innerHTML = `<p><strong>Por favor, insira um valor válido para o salário.</strong></p>`;
    return;
  }
  
  let percentual = 0;

  if (salario <= 1280.00) {
    percentual = 20;
  } else if (salario > 1280.00 && salario <= 2700.00) {
    percentual = 15;
  } else if (salario > 2700.00 && salario <= 3500.00) {
    percentual = 10;
  } else {
    percentual = 5;
  }

  const valorAumento = salario * (percentual / 100);
  const novoSalario = salario + valorAumento;

  document.getElementById('result').innerHTML = `
    <p><strong>Salário antes do reajuste:</strong> R$ ${salario.toFixed(2)}</p>
    <p><strong>Percentual de aumento aplicado:</strong> ${percentual}%</p>
    <p><strong>Valor do aumento:</strong> R$ ${valorAumento.toFixed(2)}</p>
    <p><strong>Novo salário:</strong> R$ ${novoSalario.toFixed(2)}</p>
  `;
}
