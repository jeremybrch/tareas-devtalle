 //editado mar 19 de marzo 2024
 
 //areaDeUnTrangulo 
 Report : {
let base:number=10
let altura:number=5

console.log ('el area del triangulo es', base*altura*2)
 }
//buscadorPorLetras
Report :  {
    function heroesThatStartsWith( nameList: string[] , letter:string){
    
        let newNameList: string[] = []
         
        for (let i=0 ; i< nameList.length; i++){
            let name = nameList[i]
            if ( name.startsWith( letter ) 
            ){
                newNameList.push( name )
            }
        }
    
        return newNameList
    }
    
    
    
    let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
    let heroswithLetterS = heroesThatStartsWith( heroes, 's' );
    console.log( heroswithLetterS );
}
//combertirLibrasAKilos
Report: {
 let pounds = 150
let Kgs = pounds * 0.453592

console.log('150 kilos a libras son', '=', Kgs)
}
//FuncionNumeroMayor 
Report : {
    function max (a:number, b:number, c:number){
        if ( a > b ){
        if( a > c )
        {return a
       }else
         { return c
        }
    }
      if
        ( b > c ){
            return b
        }else
         { return c
        }
    }
    
    
    let maxvalue = max (5,2,6)
    console.log(maxvalue
    )
}
//nombresMasLargo
Report : {
    function largestNameOfArray(nameArray:string[]){
        let largestName = ''
        for(let i = 0 ; i < nameArray.length; i++){
            let name = nameArray[i]
            if (name.length > largestName.length){
                largestName=name
            }
        }
        return largestName
    }
    let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
    let hero = largestNameOfArray( heroes );
    console.log( hero ); // Profesor Charles Xavier
}
//imprecionEnTabla
Report : {
    for(let i = 1 ; i <=5 ; i++){
     let line=' '
    for ( let j = 1; j<5; j++)
        {
            line += ' ' + (j * i)
        }
    
    console.log( line )
    }
}
//kilometros-Millas
Report : {
    let kilometos = 10
    let millas = kilometos * 0.62

console.log('10 kilometros son', '=', millas, ' ','millas')
}
//numeroMayor
Report : {
    let numbers = [1,6,8,4,2,7,10,3,5]

let numeroMax=0

for (let i=0; i< numbers.length; i++ ){
    if(numbers [i] >= numeroMax ){
        numeroMax=numbers[i]
    }
}
console.log ('El numero mas alto' + numeroMax)

}
//paresImpares
Report : {
    let number = [1, 6, 8, 4, 2, 7, 10, 3, 5]

for (let i=0; i < number.length; i++ ){
    let numbers = number[i] 
    if((i % 2) ===0 ) {
        console.log('el numero' + ' ' + numbers + ' ' + 'es par')
    }else {
        console.log('el numero' + ' ' + numbers + ' ' + 'es impar')
    }
}


}

