function gettable(){
    let enterednum=document.getElementById('num').value
    let row=''
    for (let i=1;i<=10;i++){
row+=enterednum+'*'+i+'= '+enterednum*i+'<br/>'
    }
    document.getElementById('table').innerHTML=row
}