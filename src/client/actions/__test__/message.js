import should from 'should';
import axios from 'axios';
import sinon from 'sinon';
import reducer from '../../reducers';
import { configureStore } from './utils';
import { alert,  ALERT } from '../message';

const { describe, it } = global;

describe('Action:message', () => {
  it('ALERT Once', function(done) {
    const [HEADER, LABEL, STATUS] = ['header', 'label', 'status'];
    const hook = {
      ALERT: getState =>  {
        const { message } = getState();
        should(message.label).eql(LABEL);
        should(message.status).eql(STATUS);
        should(message.header).eql(HEADER);
        done();
      }
    };
    const store = configureStore(reducer, {}, hook);
    store.dispatch(alert(HEADER, LABEL, STATUS));
  });
  // it('ALERT Many', function(done) {
  //   const [LABEL1, LABEL2, STATUS] = ['label1', 'label2', 'status'];
  //   const hook = {
  //     ALERT: getState =>  {
  //       const { message } = getState();
  //       if (message.id === 2) {
  //         should(message.label).eql(LABEL2);
  //         should(message.status).eql(STATUS);
  //         done();
  //       }
  //     }
  //   };
  //   const store = configureStore(reducer, {}, hook);
  //   store.dispatch(alert(LABEL1, STATUS));
  //   store.dispatch(alert(LABEL2, STATUS));
  // });

});
