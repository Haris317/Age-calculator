function calculateAge(){
    let dob= new Date(document.getElementById('dob').value);
    let ageinMs= Date.now()-dob.getTime();
    let ageDate=new Date(ageinMs);
    let age=Math.abs(ageDate.getUTCFullYear()-1970);
    let month = ageDate.getUTCMonth();
    let Days=ageDate.getUTCDate()-1;

    document.getElementById('years').innerHTML=age;
    document.getElementById('months').innerHTML=month;
    document.getElementById('days').innerHTML=Days
}