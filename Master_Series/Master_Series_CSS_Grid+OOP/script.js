class Letter {
    constructor(char, wrapper,row,col){
      if(char === " "){
          char = "space";
      }
        let letter =        document.createElement("div");
       letter.setAttribute("id", char);
       letter.setAttribute("style", 
       `grid-row: ${row};
        grid-column: ${col};
        position: absolute;
        `);
      wrapper.appendChild(letter);
        
    let top =        document.createElement("div");
       top.setAttribute("id", `${char}Top`);
      letter.appendChild(top);
        
     let left =        document.createElement("div");
       left.setAttribute("id", `${char}Left`);
      letter.appendChild(left);
        
    let right =        document.createElement("div");
       right.setAttribute("id", `${char}Right`);
      letter.appendChild(right);
        
     let bot =        document.createElement("div");
       bot.setAttribute("id", `${char}Bot`);
      letter.appendChild(bot);     
    
     let vert =        document.createElement("div");
       vert.setAttribute("id", `${char}Vert`);
      letter.appendChild(vert);
        
     let horz =        document.createElement("div");
       horz.setAttribute("id", `${char}Horz`);
      letter.appendChild(horz);      
    }
}

class Type {
    constructor(wrapper) {
    
        let keystrokes = 0;
        let location =
    ["1/2","2/3","3/4","4/5","5/6",
     "6/7","7/8","8/9","9/10"];
      
        let colCount = 0;
        document.addEventListener("keydown",  (event) => {
        
            
        
        if(event.keyCode > 64 && event.keyCode < 91 || event.keyCode === 32){
            
            keystrokes += 1;
            
           if(keystrokes%10 === 0){
                colCount += 1;
                
            }
            
            let col = location[colCount];
            let row = location[keystrokes%10 - 1];
            
            console.log(row,col);
            
            return new Letter(event.key, wrapper, col, row);
          
        
        }
         
            
        
    });
    
    }
}

class Arrange {
    constructor(){
        let wrapper = document.createElement("div");
        wrapper.setAttribute("id","grid");
        wrapper.setAttribute("style",`
          display: grid;
          position: absolute;
          grid-template-rows: repeat(10, 10vh);
          grid-template-columns: repeat(10, 10vh);
          grid-template-areas: 
            "1 2 3 4 5 6 7 8 9 10"
            "11 12 13 14 15 16 17 18 19 20"
            "21 22 23 24 25 26 27 28 29 30"
            "31 32 33 34 35 36 37 38 39 40"
            "41 42 43 44 45 46 47 48 49 50"
            "51 52 53 54 55 56 57 58 59 60"
            "61 62 63 64 65 66 67 68 69 70"
            "71 72 73 74 75 76 77 78 79 80"
            "91 92 93 94 95 96 97 98 99 100";
          `)
        document.body.appendChild(wrapper);
    return new Type(wrapper);    
    }
}
new Arrange;

