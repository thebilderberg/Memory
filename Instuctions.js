//____________________________________________________Перечисление массива_____________________________________________________

const massiveName = [
  {name:'vasya', id:40, age:29, work:'backend'},
  {name:'lola', id:777, age:18, work:'girlfriend'},
  {name:'alex', id:5, age:14, work:'friend mother son'},
];

//ES_5--------------------------------------------------------------------

for (let i = 0; i < massiveName.length; i++) {
  console.log(massiveName[i]);
}

//ES_5--------------------------------------------------------------------


//ES_6--------------------------------------------------------------------

for (let i of massiveName) {
  console.log(i);
}

//ES_6--------------------------------------------------------------------
//__________________________________________________________________________________________________________________________________________________

//ForEach

//Map

//Filter

//Reduce

//Find

//FindIndex

//_______________________________________________________________________________________________________
//debugger; - проверка на ошибку в react`e
