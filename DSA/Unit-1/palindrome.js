function palindrome(size,string){
let bag=""
for(let i=size-1;i>=0;i--){
  bag=bag+string[i];
}
console.log(bag);
}

palindrome(5,masai);