import should from 'should';
import axios from 'axios';
import sinon from 'sinon';
import reducer from '../../reducers';
import { configureStore } from './utils';
import { alert,  ALERT } from '../message';

const { describe, it } = global;

describe('Action:message', () => {
  it('ALERT', function(done) {
    const [LABEL, STATUS] = ['label', 'status'];
    const hook = {
      ALERT: getState =>  {
        const { message } = getState();
        should(message.label).eql(LABEL);
        should(message.status).eql(STATUS);
        done();
      }
    };
    const store = configureStore(reducer, {}, hook);
    store.dispatch(alert(LABEL, STATUS));
  });
});
