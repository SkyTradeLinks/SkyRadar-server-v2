import { AuthSignatureMiddleware } from './authentication.middleware';

describe('AuthsignatureMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthSignatureMiddleware()).toBeDefined();
  });
});
