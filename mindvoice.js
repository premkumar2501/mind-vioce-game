
let readyGame = document.getElementById('ready')
function start(){
    let brands = document.getElementById('companys')
    brands.style.visibility = 'visible'
    readyGame.style.display = 'none'
}

let collection = ['volkswagan','Toyota','Mahindra','Tata','Hyundai','Honda','Renault','Benz','Audi','BMW','Ford','Suzuki']
        
let list1=['("BMW , ford,renault , honda , benz , suzuki")','("mahindra , hyundai , honda , renault , audi , suzuki")',
        '("BMW , ford , hyundai , honda , audi , suzuki")','("BMW , ford , renault , benz , audi , suzuki")',
        '("BMW , ford , tata , benz , suzuki")','("ford , toyota , tata , benz , audi , suzuki")',
        '("BMW , ford , mahindra , renault")']

let empty = []
       
var cls = document.querySelector('#chick')
        
let a = 0
function change(value){
    i=a
        
        if(value == 'Ok'){
            cls.innerHTML = `<h2>${list1[i]}</h2>` 
        }
        else if(i == 0){
            if(value=='Yes'){
                empty.push(10)
                console.log(empty)
                cls.innerHTML = `<h2>${list1[1]}</h2>`
                a = i+1
            }
            else{
                cls.innerHTML = `<h2>${list1[1]}</h2>`  
                a = i+1
            }
        }

        else if(i==1){        
            if(value =='Yes'){
                empty.push(15)
                console.log(empty)
                cls.innerHTML =  `<h2>${list1[2]}</h2>`
                a = i+1
            }
            else{
                cls.innerHTML =  `<h2>${list1[2]}</h2>`
                a = i+1  
            }
        }
        else if(i==2){
            if(value == 'Yes'){
                empty.push(25)
                console.log(empty)
                cls.innerHTML =  `<h2>${list1[3]}</h2>`
                a = i+1
            }
            else{
                cls.innerHTML =  `<h2>${list1[3]}</h2>` 
                a = i+1 
            }  
        }
        else if(i==3){        
            if(value == 'Yes'){
                empty.push(30)
                console.log(empty)
                cls.innerHTML =  `<h2>${list1[4]}</h2>`
                a = i+1
            }
            else{
                cls.innerHTML =  `<h2>${list1[4]}</h2>`  
                a = i+1
            }  
        }
        else if(i==4){
            if(value == 'Yes'){
                empty.push(20)
                console.log(empty)
                cls.innerHTML =  `<h2>${list1[5]}</h2>`
                a = i+1
            }
            else{
                cls.innerHTML =  `<h2>${list1[5]}</h2>` 
                a = i+1 
            }  
        }
        else if(i==5){
            if(value == 'Yes'){
                empty.push(10)
                console.log(empty)
                cls.innerHTML =  `<h2>${list1[6]}</h2>`
                a = i+1
            }
            else{
                cls.innerHTML =  `<h2>${list1[6]}</h2>` 
                a = i+1 
            }  
        }
        else if(i==6){
            let remove = document.querySelector('#ansButton')
            let h4 = document.getElementById('h4')
            if(value == 'Yes'){
                empty.push(5)
                remove.style.display = 'none'
                cls.innerHTML = '<button onclick="find()">Find Ans</button>'
                h4.style.display = 'none'
            }
            else{
                empty.push(0)
                h4.style.display = 'none'
                remove.style.display = 'none'
                cls.innerHTML = '<button onclick="find()">Find Ans</button>'
            }  
        }
    }
    function demo(){
        let div = document.getElementById('chickBox')
        let chance = document.getElementById('okey')
        let h2 = document.getElementById('h2')
        let cmd = chance.innerHTML
        change(cmd)
        div.style.visibility= 'visible'
        chance.style.display = 'none'
        h2.style.visibility = 'hidden'
    }
    function first(){
        let cls1 = document.querySelector('#first')
        let correct = cls1.innerHTML
        change(correct)
    }

    function nobrand(){
        let cls3 = document.querySelector('#second')
        let wrong = cls3.innerHTML
        change(wrong)
    }
    function find(){
        const final = document.querySelector('#final')
        const output = final.querySelector('div')
        const number = empty.reduce((x,y) => x+y)/10
        const ans = collection[number]
        final.style.display = 'block'
        console.log(ans)
        if(ans === 'volkswagan'){
            output.innerHTML = '<img src="./imgs/vw.jpg" width="400px" height="300px">'
        }
        else if(ans === 'Toyota'){
            output.innerHTML = '<img src="./imgs/toyota.jpg" width="350px" height="210px">'
        }
        else if(ans === 'Mahindra'){
            output.innerHTML = '<img src="./imgs/mahindra.png" width="350px" height="200px">'
        }
        else if(ans === 'Benz'){
            output.innerHTML = '<img src="./imgs/benz.jpg" width="350px" height="380px">'
        }
        else if(ans === 'Tata'){
            output.innerHTML = '<img src="./imgs/tata.png" width="350px" height="200px">'
        }
        else if(ans === 'Honda'){
            output.innerHTML = '<img src="./imgs/hondapng.png" width="350px" height="200px">'
        }
        else if(ans === 'Hyundai'){
            output.innerHTML = '<img src="./imgs/hyundai.jpg" width="350px" height="200px">'
        }
        else if(ans === 'Audi'){
            output.innerHTML = '<img src="./imgs/audi2.jpg" width="350px" height="200px">'
        }
        else if(ans === 'BMW'){
            output.innerHTML = '<img src="./imgs/bmw.png" width="350px" height="230px">'
        }
        else if(ans === 'Ford'){
            output.innerHTML = '<img src="./imgs/ford3.jpg" width="350px" height="200px">'
        }
        else if(ans === 'Suzuki'){
            output.innerHTML = '<img src="./imgs/suzuki.jpg" width="350px" height="240px">'
        }
        else if(ans === 'Renault'){
            output.innerHTML = '<img src="./imgs/renault2.jpg" width="350px" height="250px">'
        }
    }

            
            
            
            
            
            
            
            
            
            
            
    
