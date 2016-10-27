import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Routes from './routes.js';
import 'highlight.js/styles/atelier-seaside-dark.css';


render(<Routes />,document.getElementById('root'));
