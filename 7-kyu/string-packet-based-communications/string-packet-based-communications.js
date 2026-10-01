function communicationModule(packet){
  let string = [];
  for(let i = 0; i < packet.length; i = i + 4 ){
    string.push(packet.slice(i,i + 4));
  }
  let [header, instruction, data1, data2, footer] = string;
  let result = 0;
  switch(instruction){
    case "0F12":
      result = Number(data1) + Number(data2);
      break;
    case "B7A2":
      result = Number(data1) - Number(data2);
      break;
    case "C3D9":
      result = Number(data1) * Number(data2);
      break;
    default :
      result = 0;
  }
  console.log(result);
​
  if(result < 0){
    result = 0;
  }
  else if(result > 9999){
    result = 9999;
  }
  data1 =  result.toString();
  data2 = "0000";
  instruction = "FFFF";
​
  return [header, instruction, data1.padStart(4,0), data2, footer].join('');
}
communicationModule("H1H10F1200120008F4F4");
​
​