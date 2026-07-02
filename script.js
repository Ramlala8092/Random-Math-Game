 
        let num11;
        let num22;
        let totalCorrect = 0;
        let totalWrong = 0;

        function generateNum(){
            const num1 = document.getElementById("num1");
            let boxes = document.querySelectorAll(".box");


        
         num11 = Math.floor(Math.random() * 12)+1;
         num22 = Math.floor(Math.random()*12)+1;
         
         num1.innerHTML = `${num11} x ${num22}`;

         let options = [];
         let correct = num11*num22;

         options.push(correct);

         while(options.length < 4){
            let wrong = Math.floor(Math.random()*120)+1;

            if(!options.includes(wrong)){
                options.push(wrong);
            }
         }

         options.sort(()=> Math.random()-0.5);

        
        boxes.forEach((box,index)=>{
            box.innerHTML = options[index];
        })

        }

        const btn = document.getElementById("btn");
        const timer = document.getElementById("count");
        const secondPart = document.getElementById("second");
        btn.addEventListener("click",()=>{
            generateNum();
            btn.style.display = "none";
            timer.style.display = "block";

            let time = 60;

            const tt = setInterval(() => {
                timer.innerHTML = time;
                time--;

                if(time < 0){

                    clearInterval(tt);
                    secondPart.style.display = "none";
                    showContent.style.display = "block";
                    showContent.innerHTML = `Correct: ${totalCorrect} : Wrong: ${totalWrong} `;
                    //secondPart.innerHTML = `Total Correct: ${totalCorrect}`;
                }
            }, 1000);
        })
       let boxess = document.querySelectorAll(".box");
       boxess.forEach((bb)=>{
            bb.addEventListener("click",()=>{
                let number = Number(bb.innerHTML);
                let first = num11;
                let second = num22;

                
                let final = num11*num22;

                if(final == number){
                    totalCorrect++;
                }else{
                    totalWrong++;
                }

                console.log(number+" "+num11+" "+num22);
                generateNum();

                
            })
        })
        
    