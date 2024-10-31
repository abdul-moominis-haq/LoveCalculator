function calculatelove(){
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    if(name1 === '' || name2 === ''){
        alert('Please enter both names');
        return;
    }else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById('result');

        result.innerHTML = `Love Percentage between ${name1} and ${name2} is ${lovePercentage}%`;





        if(lovePercentage < 30){
            result.innerHTML += '<br> You both are not made for each other';
    }else if(lovePercentage >= 30 && lovePercentage <= 70){
        result.innerHTML += '<br>  There is potential, Give it a try';
}
else{
    result.innerHTML += '<br> Great match, You both are made for each other, Love is in the air';
}}
}