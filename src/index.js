let today = new Date();
const time = document.getElementById('time');
time.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

const calcularFibonacci = () => {
    let inputSeed = today.getMinutes();
    let lastPush = today.getSeconds(); 
    let seedArray = String(inputSeed).split('').map(item => Number(item));

    if (seedArray.length == 1) {
        seedArray.unshift(0);
    };
    
    for (let i = 0; i < lastPush; i++) {  
        let element1 = seedArray[i];
        let element2 = seedArray[i+1];
        let newPush = element1 + element2;
        seedArray.push(newPush);
    };

    const result = document.getElementById('result');
    result.innerHTML = "La serie de Fibonacci es: ";

    for (let i = 0; i < seedArray.length; i++) {
        result.innerHTML += `${seedArray[i]}, `;
    }
}