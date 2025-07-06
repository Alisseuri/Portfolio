import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techLogos, techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import BallCanvas from '../components/Models/Ball Canvas/Ball'

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
               title="My Preferred Tech"
               sub="Skills I Bring to the Table"
               
            />

            {/* <div className="tech-grid">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon></TechIcon>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}

            <div className="mt-5 flex flex-row flex-wrap justify-center gap-10">
                {techLogos.map((techLogos) => (
                    <div className="w-28 h-28" key={techLogos.name}>
                        <BallCanvas icon={techLogos.icon}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack