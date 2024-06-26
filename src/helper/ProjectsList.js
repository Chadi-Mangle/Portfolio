import backdoorImg from '../assets/backdoor.jpg'
import youtubeImg from  '../assets/playlist_dowloader.jpg'
import morpionImg from '../assets/morpion.png'
import bibliodbImg from '../assets/bibliodb.png'
import mitmImg from '../assets/MiMT.png'
import microprocesseurImg from '../assets/microprocesseur.png'
import microprocesseurCr from '../assets/CR_SAE_13-Chadi_Mangle_Groupe3.pdf'

import GithubItem from '@material-ui/icons/GitHub'
import PDFIcon from '@material-ui/icons/Description'

export const ProjectList = [
    {
     name: "Backdoor client et serveur en Python",
     explain: "Ce projet permet de pouvoir se connecter et exécuter des commandes systèmes sur un hôte distant dans un même réseau.", 
     image: backdoorImg,
     skills: ["Python", "Python Socket Library"],
     link: "https://github.com/Chadi-Mangle/backdoor_python",
     linktype: GithubItem, 
    },
    {
    name: "Youtube Playlist Downloader en Python",
    explain: "Ce projet permet de télécharger des vidéos ainsi que des playlists grace au lien de la vidéo depuis un fichier executable. On retrouve ce fichier dans le projet github.", 
    image: youtubeImg,
    skills: ["Python", "Flask", "API Request"],
    link: "https://github.com/Chadi-Mangle/dlplaylist", 
    linktype: GithubItem, 
    },
    {
    name: "Morpion avec interface graphique en C",
    explain: "Ce projet m'a permis d'apprendre comment faire des interfaces graphiques avec le langagues C. Le code source du projet ce trouve sur github.", 
    image: morpionImg,
    skills: ["C", "GCC"],
    link: "https://github.com/Chadi-Mangle/morpion-game",
    linktype: GithubItem, 
    },
    {
    name: "Gestion de bibliothéque en Python",
    explain: "Ce projet réalisé en programation orienté objet nous a permis d'en apprendre d'avantage sur les classes et les paquets en Python. Il nous a aussi permis de gerer des bases de donnés avec JSON.",
    image: bibliodbImg, 
    skills: ["Python", "POO", "JSON"], 
    link: "https://github.com/Chadi-Mangle/R208",
    linktype: GithubItem, 
    },
    {
    name: "Attaque MiTM avec Scapy",
    explain: "Projet effectué à deux qui nous a permis de réaliser une attaque de l'homme du millieu (MiTM) dans un réseaux privé en Python grâce à Scapy. Rapport disponible dans le README du Github",
    image: mitmImg, 
    skills: ["Python", "Oracle Virtual Box", "Scapy"], 
    link: "https://github.com/Chadi-Mangle/mitm-atk",
    linktype: GithubItem, 
    }, 
    {
    name: "Microprocesseur en Arduino",
    explain: "Projet effectué seul dans lequel on devait réaliser un microprocesseur contrôlable depuis un site web.",
    image: microprocesseurImg, 
    skills: ["Adruino", "C++", "HTML", "Électronique"], 
    link: microprocesseurCr,
    linktype: PDFIcon,
    }
]