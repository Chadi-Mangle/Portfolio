import React from "react";
import { useState } from "react";

import ProjectItem from "../componets/projectItem";
import { ProjectList } from "../helper/ProjectsList"

import SkillItem from "../componets/skillItem";
import { SkillList } from "../helper/SkillList";

import Contact from "../componets/contact";

import cv from "../assets/Chadi_Mangle_CV_Apprentissage.pdf"

import "../styles/Home.css"

import LInkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from '@material-ui/icons/GitHub'


function Home(){

    const [currentDescription, setCurrentDescription] = useState('');

    return(
        <div className="home" id="home">
            <div className="about">
                <h2>Bonjour, je suis</h2>
                <h1><span>Chadi</span> Manglé.</h1>
                <div className="prompt"> 
                        <p>Apprenti en Bachelor Universitaire de Technologie en Réseaux et 
                            Télécommunications à l'Université Sorbonne Paris Nord, je recherche 
                            un nouveau contrat d'apprentissage pour une durée de trois ans pour la 
                            rentrée prochaine. En effet je suis admis l'année prochaine à Télécoms Sud Paris 
                            et j'ai besion d'une entreprise pour m'accompagné dans mon Cycle 
                            d'Ingénieur.</p>

                        <p>J'espère développé durant ma formation des compétences afin de pouvoir devenir Architecte 
                            Réseau dès la fin de mon parcours universitaire.</p>
                        
                        <p>J'apprécie aussi le <a href="https://www.behance.net/Dachy" target="_blank" rel="noreferrer">design</a> que 
                            se soit la création de logo, l'animation et la modélisation 3D.</p>

                        <p>Je suis prêt à relever de nouveaux défis en tant qu'apprenti. En plus des 
                            compétences techniques, je possède également de bonnes capacités d'analyse 
                            et de résolution de problèmes téchniques et relationels. J'aime travailler
                            et je suis capable de communiquer efficacement.</p>
                </div>

                <div className="contain-button"><a href={cv} target="_blank" rel="noreferrer"><div className="button"> <p><span>Mon CV</span></p></div></a></div>
            </div>
            
            <div className="skills" id="skills">
                <h1>Compétences</h1>

                <div className="list">
                {SkillList.map((skill) => {
                    return <SkillItem name={skill.name} image={skill.image} description={skill.description} skills={skill.skills} setCurrentDescription={setCurrentDescription}/>
                })}

                    <div id="skill-area">{currentDescription}</div>  
                </div>
              
                {/* <ol className="list">
                    <li className="item"> 
                        <h2>Administrer les réseaux et l’Internet</h2> 
                        <span>Je maîtrise DHCP pour gérer des IP dynamiques et statiques, SSH pour les  connexions sécurisées à distance. J'ai expérimenté Apache2 pour faire des sites web dynamiques, FTP/SFTP pour le transfert de fichiers. Je connais le modèle TCP/IP et Iptables pour la sécurité réseau. J’utilise GitLab CI/CD, et AWS pour le déploiement continu. J’ai créé des réseaux virtuels avec VirtualBox, GNS3. J'ai administré la téléphonie via HyperTerminal.</span> 
                    </li>
                    <li className="item"> 
                        <h2>Connecter les entreprises et les usagers</h2> 
                        <span>J’utilise Arduino et TinkerCad pour faire de l’éléctronique. J’ai des connaissances en fibre optiques et en transmition de signaux.</span>
                    </li>
                    <li className="item"> 
                        <h2>Créer des outils et applications informatiques</h2> 
                        <span>Je maîtrise Python pour la création de programmes et l'automatisation de tâches. J'utilise Bash pour l'automatisation des processus. Mes compétences en Javascript et React me permettent de développer des interfaces pour les applications web. J'ai une expérience en gestion et manipulation de bases de données grâce à SQL. Je conçois des solutions et mets en œuvre des algorithmes en utilisant C ou C++.</span> 
                    </li>
                </ol> */}
            </div>
            
        <div className="projects" id="projects">
            <h1>Projets personnels</h1>
            <div className="projectList">
                {ProjectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} image={project.image} />
                })}
            </div>
        </div>
                <div className="contact" id="contact"> 
                <h1>Contact</h1>

                <div className="container">
                    <div className="form">
                        <h3>Me contacter </h3>
                        <Contact/>
                    </div>
                    <div className="more">
                        <h3>En savoir plus</h3>
                        <p>Pour toute demande, n'hésitez pas à me contacter grâce à l'un de ces moyens.</p>
                        <ul className="contact-link">
                            <li> <EmailIcon/> <a href="mailto:chadimangled@gmail.com" target="_blank" rel="noreferrer">chadimangled@gmail.com</a></li>
                            <li> <LInkedInIcon/> <a href="https://www.linkedin.com/in/chadi-md-362b08265/" target="_blank" rel="noreferrer">Chadi MD</a></li>
                            <li> <GitHubIcon/> <a href="https://github.com/Chadi-Mangle" target="_blank" rel="noreferrer" >Chadi-Mangle</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home