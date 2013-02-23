if (Meteor.isClient) {

  Template.hello.events({
    'mousemove #container' : function () {
    }
  });

  $(document).on('mouseenter', '#container', function (event) {
    $('#container').append($('#insert-me'));
  });

}
