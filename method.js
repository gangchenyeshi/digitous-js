var array = [ 1, 5, 3, 4];
// return 2, 6, 4, 5
//function qui prend en paraletre un liste
//et qui retrourne une liste avec les memes elements + 1
function incrment(list) {
    for (var i= 0; i<list.length; i++) {
        list[i] = list[i] + 1;
    }
    return list;
}
console.log(incrment(array));

function incrment1(list1) {
    var listNew = [];
    for(var i=0; i<list1.length; i++) {
        listNew.push(list1[i] + 1);
    }
    return listNew;
}
console.log(incrment1(array));
/*
function addOne(element) {
    return element + 1;
}
*/

function incrment2(list2) {
    return list2.map((element) => {
        return element + 1;
    })
}
console.log(incrment2(array));