
const idades = [20, 25, 30, 18, 16, 22, 40, 50];
// a)
const somaIdades = idades.reduce((total, idade) => total + idade, 0);
document.getElementById('output').innerHTML += `<p>A soma das idades é ${somaIdades}.</p>`;

// b) 
const mediaIdades = somaIdades / idades.length;
document.getElementById('output').innerHTML += `<p>A média das idades é ${mediaIdades.toFixed(2)}.</p>`;

// c) 
const maiorIdade = Math.max(...idades);
document.getElementById('output').innerHTML += `<p>A maior idade é ${maiorIdade}.</p>`;

// d)
const idadesImpares = idades.filter(idade => idade % 2 !== 0);
document.getElementById('output').innerHTML += `<p>As idades ímpares são ${idadesImpares.join(', ')}.</p>`;

// e) 
const todosMaioresIdade = idades.every(idade => idade >= 18);
document.getElementById('output').innerHTML += `<p>Todos são maiores de idade? ${todosMaioresIdade}.</p>`;

// f)
const valorInformado = 25;
const todasMaioresQueValor = idades.every(idade => idade >= valorInformado);
document.getElementById('output').innerHTML += `<p>Todas as idades são maiores ou iguais a ${valorInformado}? ${todasMaioresQueValor}.</p>`;

// g)
const idadeLimite = 30;
const idadesMaioresQueLimite = idades.filter(idade => idade >= idadeLimite);
document.getElementById('output').innerHTML += `<p>As idades maiores ou iguais a ${idadeLimite} são: ${idadesMaioresQueLimite.join(', ')}.</p>`;

// h)
const idadesComLimite = idades.filter(idade => idade >= idadeLimite);
const somaIdadesComLimite = idadesComLimite.reduce((total, idade) => total + idade, 0);
const mediaIdadesComLimite = somaIdadesComLimite / idadesComLimite.length;
document.getElementById('output').innerHTML += `<p>A média das idades das pessoas com idade maior ou igual a ${idadeLimite} é ${mediaIdadesComLimite.toFixed(2)}.</p>`;