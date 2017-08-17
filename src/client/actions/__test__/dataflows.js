import should from 'should';
import axios from 'axios';
import sinon from 'sinon';
import reducer from '../../reducers';
import { configureStore } from './utils';
import { search, DATAFLOWSLOADED } from '../dataflows';

const { describe, it } = global;

describe('Action:dataflows', () => {
  it('SEARCH', done => {
    const DF = [{}];
    const START = -1;
    const NUMFOUND = 1000;
    const stub = sinon.stub(axios, 'post').callsFake(() => Promise.resolve({ data: { dataflows: DF, numFound: NUMFOUND, start: START } }));
    const hook = {
      DATAFLOWSLOADED: getState =>  {
        const { dataflows, search: { start, numFound } } = getState();
        //should(dataflows).eql(DF);
        should(start).eql(START);
        should(numFound).eql(NUMFOUND);
        stub.restore();
        done();
      }
    };
    const store = configureStore(reducer, {}, hook);
    store.dispatch(search());
  });

});
