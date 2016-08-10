import * as React from 'react';
import { ExampleCard } from '../../components/index';

import { MarqueeSelectionBasicExample } from './examples/MarqueeSelection.Basic.Example';

const MarqueeSelectionBasicExampleCode = require('./examples/MarqueeSelection.Basic.Example.tsx');

export class MarqueeSelectionPage extends React.Component<any, any> {

  public render() {
    return (
      <div className='ms-MarqueeSelectionPage'>
        <h1 className='ms-font-xxl'>MarqueeSelection</h1>
        <p>
          The MarqueeSelection component provides a service which allows the user to drag a rectangle to be drawn around
          items to select them. This works in conjunction with a selection object, which can be used to generically store selection state, separate from a component that consumes the state.
        </p>
        <p>
          MarqueeSelection also works in conjunction with the AutoScroll utility to automatically scroll the container when we drag a rectangle within the vicinity of the edges.
        </p>
        <p>
          When a selection rectangle is dragged, we look for elements with the <b>data-selection-index</b> attribute populated. We get these elements' boundingClientRects and compare them with the root's rect to determine selection state. We update the selection state appropriately.
        </p>
        <p>
          In virtualization cases where items that were once selected are dematerialized, we will keep the item in its
          previous state until we know definitively if it's on/off. (In other words, this works with List.)
        </p>
        <h2 className='ms-font-xl'>Examples</h2>
        <ExampleCard title='Basic Selection Example' code={ MarqueeSelectionBasicExampleCode }>
          <MarqueeSelectionBasicExample />
        </ExampleCard>
      </div>
    );
  }

}