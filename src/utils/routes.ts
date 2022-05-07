import SingleStory from 'pages/SingleStory';
import About from '../pages/About';
import Events from "../pages/Events";
import Home from '../pages/Home';
import Stories from "../pages/Stories";
import Vibes from "../pages/Vibes";


const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/events",
        component: Events,
    },
    {
        path: "/stories",
        component: Stories,
    },
    {
        path: "/stories/:id",
        component: SingleStory
    },
    {
        path: "/vibes",
        component: Vibes,
    }
];

export default routes;