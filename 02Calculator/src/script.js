function onClickFunction(value){

    switch (value) {
      case 'C':
        document.querySelector('#inputField').value = '';
        break;
      case 'back':
        let inputFieldText1 = document.querySelector('#inputField').value;
        document.querySelector('#inputField').value = inputFieldText1.slice(0,-1);
        break;
      case '=':
        let inputFieldText2 = document.querySelector('#inputField').value;
        let evaluated = eval(inputFieldText2);
        if (!Number.isInteger(evaluated)){
            document.querySelector('#inputField').value = eval(inputFieldText2);
        }else{
            document.querySelector('#inputField').value = eval(inputFieldText2).toFixed(2);
        }
        
        break
      default:
        let inputFieldText = document.querySelector('#inputField').value;
        inputFieldText += value;
        document.querySelector('#inputField').value = inputFieldText;
        console.log(inputFieldText);
        break;
    }

    
  }