import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const publicNavbar = [
    {
        title: 'Inicio',
        url: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        url: '/Login',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    }
];

export const privateNavbar = [
    {
        title: 'Inicio',
        url: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Preguntas',
        url: '/QuestionsPage',
        icon: <FaIcons.FaQuestionCircle />,
        cName: 'nav-text'
    }
];
