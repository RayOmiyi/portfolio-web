import "./WorkCard.css"
import React from 'react'
import WorkCard from "./WorkCard"
import WorkData from "./WorkData"
const Work = () => {
return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkData.map((value, index)=>{
                return(
                    <WorkCard 
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text ={value.text}
                    view={value.view}
                    />
                )
            })}
        </div>
    </div>
)
}

export default Work