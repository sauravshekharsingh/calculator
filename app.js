var button = document.querySelectorAll('table tr td');
var output = document.getElementsByClassName('output')[0];
var resetCalc = false;
var darkMode = false;

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(event){

        var clickedBtn = event.target.getAttribute('class');

        if(resetCalc){
            output.innerText = '';
            resetCalc = false;
        }
        if(clickedBtn == 'add'){
            output.innerText += '+'; 
        }
        else if(clickedBtn == 'subtract'){
            output.innerText += '-'; 
        }
        else if(clickedBtn == 'multiply'){
            output.innerText += '*'; 
        }
        else if(clickedBtn == 'divide'){
            output.innerText += '/'; 
        }
        else if(clickedBtn == 'ac'){
            output.innerText = '';
        }
        else if(clickedBtn == 'del'){
            output.innerText = output.innerText.substring(0, output.innerText.length-1);
        }
        else if(clickedBtn == 'equals'){
            var result = eval(output.innerText);
            output.innerText = '=';
            output.innerText += result;
            resetCalc = true;
        }
        else if(clickedBtn == 'dark-mode'){
            console.log('dark-mode required');
            var allBtn = document.querySelectorAll('table tr td');

            if(darkMode){
                for(var j = 0; j < allBtn.length ; j++){
                    allBtn[j].style.backgroundColor = 'white';
                    allBtn[j].style.color = 'black';
                }
                darkMode = false;
            }
            else{
                for(var j = 0; j < allBtn.length ; j++){
                    allBtn[j].style.backgroundColor = '#121212';
                    allBtn[j].style.color = 'white';
                }
                darkMode = true;
            }
        }
        else{
            output.innerText += clickedBtn;
        }
    });
}