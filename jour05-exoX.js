function calculate(num1, num2) {
    console.log(num1 * num2);
}
console.log("Si vous ne donnez pas trois arguments, le programme doit afficher error dans la console")
console.log(process.argv);
calculate(process.argv[2], process.argv[3]);
//calculate(5, 4)
