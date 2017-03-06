'use strict';

import 'babel-polyfill';
import 'whatwg-fetch';
import 'es6-promise/auto';

import 'jquery';
import 'bootstrap-loader';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

ReactDOM.render(Root, document.getElementById('app'));
