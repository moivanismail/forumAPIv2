const AddThread = require('../AddThread');

describe('a AddThread entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
        title: 'judul',
        };
    
        // Action and Assert
        expect(() => new AddThread(payload)).toThrowError('NEW_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
    });
    
    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
        title: 123,
        body: 123,
        };
    
        // Action and Assert
        expect(() => new AddThread(payload)).toThrowError('NEW_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });
    
    it('should create addThread object correctly', () => {
        // Arrange
        const payload = {
        title: 'judul',
        body: 'body',
        };
    
        // Action
        const addThread = new AddThread(payload);
    
        // Assert
        expect(addThread).toBeInstanceOf(AddThread);
        expect(addThread.title).toEqual(payload.title);
        expect(addThread.body).toEqual(payload.body);
    });
});