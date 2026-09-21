function solve(s,g){
    let container = [];
    for(let i = 1; i <= s ; i++){
        if(i % g === 0){
            container.push(i);
        }
    }
    const result = container.reduce((accumulator, currentElement, index, array) => {
        for(let i = index; i < array.length; i++){
            if(currentElement + array[i] === s){
             accumulator.push(currentElement,array[i]); 
            }
          
        }
        return accumulator;
    },[]);
    if(result.length === 0){
      return -1;
    }
    return [result[0] ,result[1]];
}
console.log(solve(8,2));
​