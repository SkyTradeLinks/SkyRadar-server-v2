import { AuthSignatureMiddleware } from './authSignature.middleware';

describe('AuthsignatureMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthSignatureMiddleware()).toBeDefined();
  });
});
