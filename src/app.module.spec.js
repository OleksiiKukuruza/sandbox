import AppModule from './app.module';

describe('Test', () => {
    it('should be defined', () => {
        AppModule.should.equal('foo');
    });
});
