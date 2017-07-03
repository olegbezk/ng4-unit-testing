import { ReversePipe } from './reverse.pipe';

describe('Reverse pipe', () => {
    it('should be created', () => {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    });
});