import pythonImg from '../assets/python_logo.png'
import programmationImg from '../assets/programmation_logo.png'
import javascriptImg from '../assets/javascript_logo.png'
import sqlImg from '../assets/sql_logo.png'
import serviceReseauImg from '../assets/service_reseau.png'
import securiteReseauImg from '../assets/securite_reseau.png'
import asteriskImg from '../assets/asterisk_logo.png'
import postfixImg from '../assets/postfix_logo.png'
import apacheImg from '../assets/apache_logo.png'
import openVpnImg from '../assets/openvpn_logo.png' 
import iptablesImg from '../assets/iptables_logo.png'
import nmapImg from '../assets/nmap_logo.png'
import metasploitImg from '../assets/metasploit_logo.png'

export const SkillList = [
    {
        name: "Programmation", 
        description: "J'ai commencé à apprendre la programmation en autodidacte dès le collège, en utilisant des langages tels que JavaScript et Python. Au lycée, j'ai choisi la spécialité Sciences du numérique et de l'informatique, ce qui m'a permis d'approfondir mes connaissances dans ce domaine. Actuellement, je suis principalement impliqué dans le développement web en alternance, ainsi que dans l'automatisation dans le cadre de ma formation.", 
        image: programmationImg, 
        skills: [
            {
                name: "Python",
                description: "Python est certainement le langage avec lequel je suis le plus à l'aise. J'ai réalisé de nombreux projets en Python, notamment dans des domaines tels que la programmation réseau avec les sockets, l'automatisation système, le développement web avec Flask, et la création d'interfaces graphiques avec Kivy.", 
                image: pythonImg,
            },
            {
                name: "Javascript",
                description: "J'ai utilisé JavaScript pour la création de sites web dynamiques, que ce soit en natif ou bien avec des frameworks comme React. De plus, j'ai utilisé WebRTC pour gérer des communications en temps réel entre les utilisateurs. Pour le côté serveur, j'ai acquis des compétences en utilisant Node.js pour développer des backends et effectuer des manipulations de base de données avec des ORM comme Sequelize.", 
                image: javascriptImg
            },
            {
                name: "SQL",
                description: "J'ai utilié SQL pour gérer des bases de données relationnelles, d'écrire des requêtes pour extraire et manipuler des données, et de concevoir des schémas de base de données optimisés pour répondre à des besoins spécifiques. J'ai utilisé de nombreux SGBD  comme PostgreSQL, SQLite et SQL Server, ce qui m'a permis d'acquérir une expérience diversifiée dans la manipulation de différentes plateformes de bases de données. ", 
                image: sqlImg,
            },
        ]
    }, 
    {
        name: "Services Réseau", 
        description: "Un service réseau fait référence à toute fonctionnalité ou application qui est accessible à travers un réseau informatique. Ces services peuvent être de nature très diverse, allant des simples transferts de fichiers aux communications en temps réel, en passant par le stockage de données et l'accès à des ressources partagées.", 
        image: serviceReseauImg, 
        skills: [
            {
                name: "Asterisk",
                description: "J'ai utilisé Asterisk pour configurer des téléphones SIP, permettant ainsi de passer des appels via Internet. De plus, j'ai mis en place des solutions de VoIP en utilisant PJSIP. Grâce à cette combinaison, j'ai pu développé un service Télélphonie Web.", 
                image: asteriskImg,
            },
            {
                name: "Postfix",
                description: "J'ai utilisé Postfix pour configurer des serveurs de messagerie électronique, gérant l'envoi et la réception d'e-mails sur des réseaux. Pour renforcer la sécurité, j'ai intégré Dovecot, assurant la sécurisée et l'utilisation d'IMAP ou POP3. De plus, j'ai automatisé l'envoi de mails en utilisant Cron.", 
                image: postfixImg,
            },            
            {
                name: "Apache",
                description: "J'ai utilisé Apache pour configurer des serveurs web, mettant en place des virtual hosts pour héberger plusieurs sites web sur une même machine. En plus de cela, j'ai géré les logs d'accès et d'erreurs, assurant ainsi un suivi précis de l'activité du serveur. J'ai mis en place des configurations de droits d'accès pour protéger les données et restreindre l'accès aux ressources du serveur.", 
                image: apacheImg,
            },            
            {
                name: "Open VPN",
                description: "J'ai utilisé OpenVPN pour configurer des tunnels VPN de niveau 2 et 3, permettant ainsi de créer des connexions sécurisées entre différents réseaux. En configurant des tunnels de niveau 2, j'ai facilité la liaison entre des réseaux locaux distants, tandis que les tunnels de niveau 3 ont permis aux utilisateurs distants de se connecter de manière sécurisée à un réseau privé via Internet.", 
                image: openVpnImg,
            },
        ]
    }, 
    {
        name: "Securité Réseau", 
        description: "La sécurisation réseau consiste en un ensemble de mesures et de pratiques visant à protéger les réseaux informatiques contre les menaces potentielles et à garantir la confidentialité, l'intégrité et la disponibilité des données qui y circulent.", 
        image: securiteReseauImg, 
        skills: [
            {
                name: "Iptables",
                description: "Avec iptables, j'ai mis en place des règles de pare-feu  pour contrôler le trafic réseau entrant et sortant. J'ai pu configurer des politiques de sécurité pour autoriser ou bloquer le trafic en fonction de critères. J'ai également utilisé iptables pour configurer des NAT afin de permettre la redirection du trafic vers des services internes et de masquer les adresses IP privées.", 
                image: iptablesImg,
            },
            {
                name: "Nmap",
                description: "Avec Nmap, j'ai effectué des analyses de sécurité sur des réseaux informatiques pour identifier les hôtes actifs, les services ouverts, ainsi que les vulnérabilités potentielles. En utilisant ses fonctionnalités avancées, j'ai réalisé des audits complets de sécurité, aidant ainsi à renforcer la protection des réseaux contre les menaces potentielles.", 
                image: nmapImg,
            },
            {
                name: "Metasploit",
                description: "Avec Metasploit, j'ai mené des tests d'intrusion sur des systèmes informatiques pour évaluer leur sécurité et découvrir des failles et simuler des attaques et identifier les points faibles des systèmes cibles.", 
                image: metasploitImg,
            }, 
        ]
    }

]

