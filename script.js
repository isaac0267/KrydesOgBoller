    "use strict";
    window.addEventListener("load",start);
    
    // This function it will start the javascript code. 
    function start(){
    console.log("Javascript start");  
    makeBorderClicakbel();
   
    }

    function selectCell(row,col){
   writeToCell(row,col,1);
    console.table(model);   

    }

    function makeBorderClicakbel(){
    document.querySelector("#board")  
    .addEventListener("click",boardClicked);
    }

    // We have to make the model 

    const model=[
    [0,0,0],
    [0,0,0],
    [0,0,0],

    ];

    // We have to make another functoon that called writeToCell, that can take
    // row, col, value 

    function writeToCell(row,col,value){
    model[row][col]=value;  
    } 

    function readFromCell(row,col){
    return model[row][col];  
    }



    // make the other funstion that will make be use for the boardClicked

    function boardClicked(event){
        const cell=event.target;
    //console.log(`Board clicked!`);  look at this code later.
    const row=cell.dataset.row;
    const col=cell.dataset.col;
    console.log(`cliked on row:${row}col:${col}`); 
    selectCell(row,col);
    }





