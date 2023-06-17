var stackarr = [];


var topp = -1;


function push(e) {
	topp++;
	stackarr[topp] = e;
}


function pop() {
	if (topp == -1)
		return 0;
	else {
		var popped_ele = stackarr[topp];
		topp--;
		return popped_ele;
	}
}


function operator(op) {
	if (op == '+' || op == '-' ||
		op == '^' || op == '*' ||
		op == '/' || op == '(' ||
		op == ')') {
		return true;
	}
	else
		return false;
}


function precedency(pre) {
	if ( pre == '(' || pre == ')') {
		return 1;
	}
	else if (pre == '+' || pre == '-') {
		return 2;
	}
	else if (pre == '/' || pre == '*') {
		return 3;
	}
	else if (pre == '^') {
		return 4;
	}
	else
		return 0;
}


function InfixtoPostfix() {


	var postfix = [];
	var temp = 0;
	push(')');
	

	
	for (var i = 0; i < string.length; i++) {
		var el = string[i];

	
		if (operator(el)==true) {
      postfix[temp++]=" ";
			if (el == ')') {
				while (stackarr[topp] != "(") {
					postfix[temp++] = pop();
				}
				pop();
			}

			
			else if (el == '(') {
				push(el);
			}

		
			else if (precedency(el) > precedency(stackarr[topp])) {
				push(el);
			}
			else {
				while (precedency(el) <=
					precedency(stackarr[topp]) && topp > -1) {
          postfix[temp++] = " ";
					postfix[temp++] = pop();
          
				}
				push(el);
        postfix[temp++] = " ";
			}
		}
		else {
			postfix[temp++] = el;
		}
	}

	postfix[temp++]=" ";
	while (stackarr[topp] != ')') {
		postfix[temp++] = pop();
	}

	
	var st = "";
	for (var i = 0; i < postfix.length; i++)
		st += postfix[i];
    //document.querySelector('input').value = st;



 let stack = [];
 
        
        let n = "";
        for (let i = 0; i < st.length; i++)
        {
            let c = st[i];
 
            if (c ==' ')
            {
                continue;
            }
            else if (c >= '0' && c <= '9'|| c=='.')
            {
                while (c >= '0' && c <= '9' || c=='.')
                {
                    n = n+c;
                    i++;
                    c = st[i];
                }
            
                let float=parseFloat(n,10);
                n="";
                stack.push(float);
                
            }
                else if(c=='π')
                {
                  let nn= 3.1415926;
                  stack.push(nn);
                }
                  else if(c=='e')
                {
                  let mn= 2.7182818;
                  stack.push(mn);
                }
            else
            {
                let val1 = stack.pop();
              let val2 = stack.pop();
 
                switch (c)
                {
                    case '+':
                   stack.push(val2 + val1);
                    break;
 
                    case '-':
                    stack.push(val2 - val1);
                    break;
 
                    case '/':
                    stack.push(val2 / val1);
                    break;
 
                    case '*':
                    stack.push(val2 * val1);
                    break;
                    
                    case '^':
                    stack.push(Math.pow(val2,val1));
                    break;
                }
            }
        }
      let ans=stack.pop();
      string="";
      string=ans;
      document.querySelector('input').value = ans;
}


    

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      InfixtoPostfix()
    }
    else {

      if (e.target.innerHTML == 'x') {
        string = string + '*';
        document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML == '÷') {
        string = string + '/'
        document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML == 'C') {
        string = "";
        document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length - 1);
        document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML == '^') {
        string = string + '^';
        document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML == 'π') {
        string = string + "π";
        document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML == 'e') {
        string = string + "e";
        document.querySelector('input').value = string;
      }
      else {
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }
    }
  })
})
