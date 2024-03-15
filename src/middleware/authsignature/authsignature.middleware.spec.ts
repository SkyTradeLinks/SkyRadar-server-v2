import { AuthsignatureMiddleware } from './authsignature.middleware';

describe('AuthsignatureMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthsignatureMiddleware()).toBeDefined();
  });
});
