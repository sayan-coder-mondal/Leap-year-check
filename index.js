function clk(){
    // console.log(parseInt(document.getElementById('year').value)%4)
    // console.log(parseInt(document.getElementById('year').value)%400)
    // if (parseInt(document.getElementById('year').value)%4!=0 || parseInt(document.getElementById('year').value)%400!=0) {
    //     console.log("It's not a leap year")
    // }
    // else{
    //     console.log("It's a leap year")
    // }
    x=document.getElementById('year').value
    if (parseInt(document.getElementById('year').value)%400==0) {
        // console.log("It is a leap year")
        // alert("It is a leap year")
        document.getElementById('result').innerText=`${x} is a leap year`
        // document.getElementById('result').innerText='It is a leap year'
        document.getElementById('result').style.backgroundColor='rgb(0, 194, 0)'
    }
    else if (parseInt(document.getElementById('year').value)%100==0) {
        // console.log("It is not a leap year")
        // alert("It is not a leap year")
        document.getElementById('result').innerText=`${x} is not a leap year`
        // document.getElementById('result').innerText='It is not a leap year'
        document.getElementById('result').style.backgroundColor='rgb(254, 37, 37)'
    }
    else if (parseInt(document.getElementById('year').value)%4==0) {
        // console.log("It is a leap year")
        // alert("It is a leap year")
        document.getElementById('result').innerText=`${x} is a leap year`
        // document.getElementById('result').innerText='It is a leap year'
        document.getElementById('result').style.backgroundColor='rgb(0, 194, 0)'
    }
    else if (parseInt(document.getElementById('year').value)%4!=0) {
        // console.log("It is not a leap year")
        // alert("It is not a leap year")
        document.getElementById('result').innerText=`${x} is not a leap year`
        // document.getElementById('result').innerText='It is not a leap year'
        document.getElementById('result').style.backgroundColor='rgb(254, 37, 37)'
    }
    // console.log(document.getElementById('year').value)
}