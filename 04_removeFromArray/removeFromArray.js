const removeFromArray = function(arr, ...args) {
    const array=[];
    for(let i=0;i<arr.length;i++){
        let bool = true;
        for(const arg of args){
            if(arr[i]===arg)
                bool = false;
        }
        if(bool == true){
            array.push(arr[i]);
        }
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
