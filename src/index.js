import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';
import Routes from './routes.js';
import 'highlight.js/styles/atelier-seaside-dark.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


render(<Routes />,document.getElementById('root'));
