import { h, app } from 'hyperapp';
import * as Time from '@hyperapp/time';
import '../../../index.css';
import { createMountContainer } from '../../../dom-util';

import { Increment, Decrement } from './actions';

import { Incrementer } from './Incrementer.jsx';
import { Decrementer } from './Decrementer.jsx';

const Tick = (state, count) => ({ ...state, count: count + 1 })

app({
    init: () => ({ count: 0 }),
    view: state => (
        <div>
            <h1>Counter</h1>
            <output>Global: {state.count}</output>
            <Incrementer onIncrement={Increment}/>
            <Decrementer onDecrement={Decrement}/>
        </div>
    ),
    subscriptions : () => {
        Time.interval(Tick, {
            delay: 1000
        })
    },
    node: createMountContainer('hyperapp')
})