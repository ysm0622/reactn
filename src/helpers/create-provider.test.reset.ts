import { expect } from 'chai';
import spyOn from '../utils/test/spy-on-global-state-manager';
import createProvider, { ReactNProvider } from './create-provider';

export default (): void => {

  let Provider: ReactNProvider;
  const spy = spyOn('reset');
  beforeEach((): void => {
    Provider = createProvider();
  });

  it('should be a function with no arguments', (): void => {
    expect(Provider.reset).to.be.a('function');
    expect(Provider.reset.length).to.equal(0);
  });

  it('should call GlobalStateManager.reset', (): void => {
    Provider.reset();
    expect(spy.reset.calledOnce).to.equal(true);
  });

  it('should return undefined', (): void => {
    expect(Provider.reset()).to.be.undefined;
  });
};
