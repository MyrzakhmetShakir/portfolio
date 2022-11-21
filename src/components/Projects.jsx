import React from 'react';


function Project(props) {

    function clickHandler(e) {
        e.preventDefault();
        window.open(props.data.url, "_blank");
    }


    return <div className='project-container'>
        <span className='project-img' onClick={clickHandler}>
            <div className='pp'>
                <img className = "project-img" src={props.data.img} title = "click to open the project" alt="pic" />
            </div>
        </span> 
        <p onClick={clickHandler} className='project-descr'>{props.data.description}</p>
    </div>
}


export default Project