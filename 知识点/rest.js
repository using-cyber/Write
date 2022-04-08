function fn(a,b,...rest){
    console.log(rest);
}
fn(1,2,3)      // [3]
fn(1,2,3,4,5)  // [3,4,5]

