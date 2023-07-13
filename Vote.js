function checkeligibility(){
    let age=document.getElementById('age').value
    let msg=document.getElementById('msg')
    if (age>=18){
msg.innerHTML="You are eligible to vote."

}
else{
msg.innerHTML='You are not eligible to vote yet.'
}
}