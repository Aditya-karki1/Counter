const countvalue = document.querySelector('#counter')

function increment(){
    let value = parseInt(countvalue.innerText) ; // get valuestring form text parse Int se string integer mein convert ho jayegi
    value = value+1;      // update value
    countvalue.innerText = value ;     //  set value wapis dal dia increase krke
};

const decrement = () =>{
    let value = parseInt(countvalue.innerText) ; // get valuestring form text parse Int se string integer mein convert ho jayegi
    value = value-1;      // update value
    countvalue.innerText = value ;     //  set value wapis dal dia increase krke
};