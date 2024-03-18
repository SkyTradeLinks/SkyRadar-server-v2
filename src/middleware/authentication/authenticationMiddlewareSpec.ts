import { AuthSignatureMiddleware } from './authenticationMiddleware';

describe('AuthsignatureMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthSignatureMiddleware()).toBeDefined();
  });
});
