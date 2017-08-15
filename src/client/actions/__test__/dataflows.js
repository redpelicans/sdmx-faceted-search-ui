import should from 'should';
import axios from 'axios';
import sinon from 'sinon';
import reducer from '../../reducers';
import { configureStore } from './utils';
import { search, DATAFLOWSLOADED } from '../dataflows';

const { describe, it } = global;

describe('Action:dataflows', () => {
  it('SEARCH', function(done) {
    const DF = [{}];
    const stub = sinon.stub(axios, 'post').callsFake(() => Promise.resolve({ data: { dataflows: DF } }));
    const hook = {
      DATAFLOWSLOADED: getState =>  {
        const { dataflows } = getState();
        should(dataflows).eql(DF);
        stub.restore();
        done();
      }
    };
    const store = configureStore(reducer, {}, hook);
    store.dispatch(search());
  });

});
