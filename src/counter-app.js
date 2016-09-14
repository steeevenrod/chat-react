import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting.react.js';
import ClickCounter from './click-counter.react';
import TextInput from './text-input.react';

ReactDOM.render(
    <div>
        <Greeting name="Fernando" likeTo="play basketball" />
        <ClickCounter initialCount={11} offset={3} />
		<TextInput />
    </div>,
    document.getElementById('my-react-container')
);