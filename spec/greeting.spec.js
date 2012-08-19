require([
  'greeting'
], function(
  greeting
) {

  describe('greeting', function() {

    describe('message', function() {

      it('should be defined', function() {
        expect(greeting.message).toBeDefined();
      });

      it('should greet the world', function() {
        expect(greeting.message).toBe('Hello world!');
      });

    });
  });

});
