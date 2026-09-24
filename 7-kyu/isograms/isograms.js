function isIsogram(str){
  const set = new Set(str.toLowerCase());
  console.log(set);
  return set.size !== str.length? false: true;
​
}
 