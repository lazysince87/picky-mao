'use client'
import React, {useState} from 'react'
import './button.css'


const Filter = () => {

    var [isOpen, setIsOpen] = useState(true);
    var Opacity1 = false;
    var Opacity2 = false;
    var Now = 0;
    var Later= 0;
    var Vegan = 0;
    var Non_Vegan = 0;

        
// Toggle Visibilty---------------------------------------------------------------------------------------------------------
    function toggle1() {

        const button = document
            .getElementById('Opt1');
        const currentOpacity = window
            .getComputedStyle(button).opacity;
        
        if (isOpen){
            if (currentOpacity == 1 && Opacity2 != true) {
                button.style.opacity = 0.5;
                Opacity1 = true;
                Vegan++;
            } else if (Opacity1){
                button.style.opacity = 1;
                Opacity1 = false;
                Vegan--;
            }else if(Opacity2){
                button.style.opacity = 0.5;
                Opacity1 = true;
                swtichOpacity1();
                Vegan++;
            } else {
                button.style.opacity = 1;
                Opacity1 = false;
                Vegan--;
            }
        }

        if(isOpen != true){
            button.style.visibility = 'hidden';
        }else{
            button.style.visibility = 'visible'
        }
    }
    function toggle2() {

        const button = document
            .getElementById('Opt2');
        const currentOpacity = window
            .getComputedStyle(button).opacity;
        
        if (isOpen){
            if (currentOpacity == 1 && Opacity1 != true) {
                button.style.opacity = 0.5;
                Opacity2 = true;
                Non_Vegan++;
            } else if (Opacity2){
                button.style.opacity = 1;
                Opacity2 = false;
                Non_Vegan--;
            }else if(Opacity1){
                button.style.opacity = 0.5;
                Opacity2 = true;
                swtichOpacity2();
                Non_Vegan++;
                
            } else {
                button.style.opacity = 1;
                Opacity2 = false;
                Non_Vegan--;
            }
        }

        if(isOpen != true){
            button.style.visibility = 'hidden';
        }else{
            button.style.visibility = 'visible'
        }
   
    }

    function swtichOpacity1(){
        if (Opacity1){
            toggle2();
        }
    }
    function swtichOpacity2(){
        if (Opacity2){
            toggle1();
        }
    }

//SECOND BUTTONS
function toggle3() {

    const button = document
        .getElementById('Opt3');
    const currentOpacity = window
        .getComputedStyle(button).opacity;
    
    if (isOpen){
        if (currentOpacity == 1 && Opacity2 != true) {
            button.style.opacity = 0.5;
            Opacity1 = true;
            Now++;
        } else if (Opacity1){
            button.style.opacity = 1;
            Opacity1 = false;
            Now--;
        }else if(Opacity2){
            button.style.opacity = 0.5;
            Opacity1 = true;
            swtichOpacity1();
            Now++;
        } else {
            button.style.opacity = 1;
            Opacity1 = false;
            Now--;
        }
    }

    if(isOpen != true){
        button.style.visibility = 'hidden';
    }else{
        button.style.visibility = 'visible'
    }
}
function toggle4() {

    const button = document
        .getElementById('Opt4');
    const currentOpacity = window
        .getComputedStyle(button).opacity;
    
    if (isOpen){
        if (currentOpacity == 1 && Opacity1 != true) {
            button.style.opacity = 0.5;
            Opacity2 = true;
            Later++;
        } else if (Opacity2){
            button.style.opacity = 1;
            Opacity2 = false;
            Later--;
        }else if(Opacity1){
            button.style.opacity = 0.5;
            Opacity2 = true;
            swtichOpacity2();
            Later++;
            
        } else {
            button.style.opacity = 1;
            Opacity2 = false;
            Later--;
        }
    }

    if(isOpen != true){
        button.style.visibility = 'hidden';
    }else{
        button.style.visibility = 'visible'
    }
}

//-------------------------------------------------------------------------------------------------------------



    // Next set of filters
    function falseVisibility() {
        isOpen = false;
    }
    function trueVisibility() {
        isOpen = true;
    }
    function secondSet(){
        <button className = "Option1" id = "Opt3" onClick={toggle3}>
            Vegan
        </button>;
        <button className = "Option1" id = "Opt4" onClick={toggle4}>
            Non-Vegan
        </button>; 
    }
    function nextOptions(){
        falseVisibility();
        toggle1();
        toggle2();
        isOpen = true;
        secondSet();

    }
    function backOptions(){
        trueVisibility();
        toggle1();
        toggle2();
    }

//OUTPUT---------------------------------------------------------------------------------------------------------

    return (
    <> 

            <div className='buttonContainer'>
                <button className = "Option1" id = "Opt1" onClick = {toggle1}>
                    Now
                </button>        
                
                <button className = "Option1" id = "Opt2" onClick = {toggle2}>
                    Later
                </button> 
                <button className = "Back" onClick = {backOptions}>
                    Back
                </button>
                <button className = "Next" onClick = {nextOptions} >
                    Next
                </button>

            </div> 


    </>

    )
    
        }
export default Filter