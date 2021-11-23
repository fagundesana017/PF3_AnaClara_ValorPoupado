 const calcular = document.getElementById('calcular');


function poupado () {
    const nome = document.getElementById('nome').value;
    const valor_mensal = document.getElementById('valor_mensal').value;
    const taxa_juros = document.getElementById('taxa_juros').value;
    const parcelas = parseFloat(document.getElementById('parcelas').value/100);
    const resultado = document.getElementById('resultado');
   
    if (nome !== '' && valor_mensal  !== '' && parcelas !== '') { 
        const taxa_juros = (taxa_juros * 100)
        let valor_total = (valor_mensal*((((1+ taxa_juros)**parcelas) - 1) / taxa_juros));
        let valor_total_calculado = valor_total.toFixed(2);
        resultado.textContent = ` ${nome}, se você aplicar R$ ${valor_mensal}, à taxa de juros é ${taxa_juros} ao mês durante, 
        acumulará uma poupança de R$ ${valor_total_calculado}`;
    }
    else
    {
      resultado.textContent = 'Para calcular o valor poupado, insira seus dados'
    }
}
calcular.addEventListener('click', poupado);
