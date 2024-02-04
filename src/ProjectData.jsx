import dev_detective from './images/dev_detective.png';
import tailwind from './images/tailwind.png';
import css from './images/CSS3_logo.png';
import javascript from './images/JavaScript.png'
import reactIcon from './images/React-icon.png';
import html from './images/html.png';

import blogpage from './images/blogpage.png';

import topcourses from './images/topcourses.png';
import planjourney from './images/planjourney.png';
const ProjectData=[
    {
        id:1,
        title:"Weather App" ,
        description: "Implements github API with light/dark mode to switch. It uses local storage to save previous light and dark mode.",
        skill:[html,css,javascript],
        image:dev_detective,
        link:'https://github.com/Namrata52/dev_detective_app',
        live:'https://namrata52.github.io/dev_detective_app/'
    },
    {
        id:2,
        title:"Top Courses" ,
        description: "Fetches data from API and displays courses according to selected category. Displays Toast when the course is liked or like is removed. echnologies used: ReactJS, Tailwind CSS.",
        skill:[reactIcon,css],
        image:topcourses,
        link:'https://github.com/Namrata52/TopCourses',
        live:'https://namrata52.github.io/TopCourses/'
    }, 
    {
        id:3,
        title:"Plan your Journey" ,
        description: "Filters out cards in which user is not interested and shows journey description with a toggle ofshow more option. Technologies used: ReactJS, CSS",
        skill:[reactIcon,tailwind],
        image:planjourney,
        link:'https://github.com/Namrata52/PlanYourJourney',
        live:'https://namrata52.github.io/PlanYourJourney/'
    },
    {
        id:4,
        title:"Blog website template" ,
        description: "This website will provide a platform for providing latest updates on books and technology. Also serve as self-help guide.Technologies used: HTML, JavaScript, TailwindCSS.",
        skill:[reactIcon,tailwind],
        image:blogpage,
        link:'https://github.com/Namrata52/TopCourses',
        live:'https://namrata52.github.io/PlanYourJourney/'
    }
];
export default ProjectData