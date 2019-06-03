import { h, app } from 'hyperapp';
import { interval } from '@hyperapp/time';
import '../../../index.css';
import { createMountContainer } from '../../../dom-util';

import { Increment, Decrement } from './actions';

import { Incrementer } from './Incrementer.jsx';
import { Decrementer } from './Decrementer.jsx';
import { Progress } from './Progress.jsx';

const Tick = (state) => ({ ...state, count: state.count + 1 })

app({
    init: () => ({ count: 0 }),
    view: state => (
        <div>
            <h1>Counter</h1>
            <output>Global: {state.count}</output>
            <Incrementer
                count={state.count}
                onIncrement={Increment}
            />
            <Decrementer
                count={state.count}
                onDecrement={Decrement}
            />
            <Progress count={state.count} />
        </div>
    ),
    subscriptions: () => [
        interval(Tick, {
            delay: 1000
        })
    ],
    node: createMountContainer('hyperapp')
})