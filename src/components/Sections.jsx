import React, {useEffect, useState } from 'react';
import Project from './Projects';
import {projects} from './Data';
import {certicates} from "./Certificates";


function Section1() {

    const [text, setText] = useState("Hi, ")
    const [index, setIndex] = useState(0)
    const [secText, setSecText] = useState("")
    const [secIndex, setSecIndex] = useState(0) 
    
    const text3 = " My name is Myrzakhmet";
    const text4 = " I'm a Full Stack Web Developer";



useEffect(()=>{
    console.log("useEffect 1");
    let interval = setInterval(()=>{
            if (index >= text3.length-1) {
                clearInterval(interval)
            } else { setIndex(prev => prev+=1)  }
        }, 150)
        
        setText(prev=> prev += text3[index])
        return () => clearInterval(interval)

    }, [index])
  

    useEffect(()=>{
        console.log("odnakos");
        if(index === 21) {
            console.log("useEffect 2");
            let interval2 = setInterval(()=>{
                if (secIndex >= text4.length-1) {
                    clearInterval(interval2)
                } else { setSecIndex(prev => prev+=1); }
            }, 40)
            
            setSecText(prev => prev += text4[secIndex])
            return () => {
        
                clearInterval(interval2)}
        }
         
    
        }, [secIndex, index])

 
  

    console.log("basic", index);

    return <section className='section section1' id = "section1">
                <div className='dark'></div>
                <nav>
                    <a className='navi bar1' href="#section1">Home</a>
                    <a className='navi bar2' href="#section2">Certificates</a>
                    <a className='navi bar3' href="#section3">Projects</a>
                    <a className='navi bar4' href="#section4">Contacts</a>   
                </nav>
                <h1 className='header text1'>{text}</h1>
                <p className='header parag1'>{secText}</p>
           </section>
}





function Section2() {

    const [certiciate, setCertificate] = useState(0)
    

    function handleClickNext(){
        setCertificate(prev=>{
         if( prev < certicates.length-1) {return prev+1; }  else { return 0; }   })
    }

    function handleClickPrev() {
        setCertificate(prev=>{
            if(prev === 0) {return certicates.length-1;} else {return prev - 1}   })
    }

    function goUrl() {
        window.open(certicates[certiciate].url, "_blank")
    }


    return <section className='section section2' id = "section2">
                <h1 className='titles2'>My certificates</h1>
                <div className='certificate-main-container'>
                    <i onClick = {handleClickPrev} className="arrow fa-solid fa-chevron-left"></i>
                    <div className='certif-container'>
                        <img id="certificate" src={certicates[certiciate].img} alt={certicates[certiciate].alt} />
                        <p className='full-cert-descrip'>{certicates[certiciate].description} 
                            <strong className='certicate-check' onClick={goUrl}>{certicates[certiciate].url && "check certificate here"}</strong>
                        </p>
                    </div>
                <i onClick = {handleClickNext} className="arrow fa-solid fa-chevron-right"></i>
                </div>
           </section>
}

function Section3() {

    


    return <section className='section section3' id = "section3">
                <h1 className='titles3'>My projects</h1>
                <div className='project-main-container'>
                    {projects.map((elem)=>{
                        return <Project key = {elem.key} data = {elem} />
                    })}
                </div>
                <em className='titles4' style={{color:"white"}}>working on next projects...</em>
           </section>
}



function Section4() {




    return <section className='section section4' id = "section4">
                <div className='contact-container'>
                    <h1 className='header text4'>Contact me</h1>
                     <form  id = "contact" action="mailto:creativeprolife@gmail.com">
                        <label htmlFor="name">Your name<span className='star'>*</span>: </label>
                        <input type="text" name="" id="name"  required/>
                        <label htmlFor="email">Your email<span className='star'>*</span>: </label>
                        <input type="email" name="" id="email" required/>
                        <label htmlFor="texarea">Your message<span className='star'>*</span>: </label>
                        <textarea name="" id="textarea" cols="40" rows="10"  required></textarea>
                        <input type="submit"  value="send" />
                    </form>
                </div>
                <div className='contact-container2'>
                    <div className='contacts'>
                        <h3>My contacts</h3>
                        <p>mobile phone: +7 707 203 99 30</p>
                        <p>email(preferred): creativeprolife@gmail.com</p>
                        <address>address: Astana city, Kazakhstan</address>
                        <p className='copyright'>made in React &#169; Myrzakhmet Shakir</p>
                    </div>
                </div>
           </section>
}



export {Section1, Section2, Section3, Section4}