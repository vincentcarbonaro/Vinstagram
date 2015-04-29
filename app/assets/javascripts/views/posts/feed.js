Vinstagram.Views.Feed = Backbone.CompositeView.extend({

  template: JST['posts/feed'],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addFeedItem);

    //this is for guest modal
    this.count = 0;

    this.bindScroll();
    this.pageNum = 1;

    if (this.collection.length != 0) {
      this.collection.each( function (post) {
        var feedItem = new Vinstagram.Views.FeedItem({
          model: post
        })
      this.addSubview(".feed", feedItem)
      }.bind(this));
    }

    this.first_time = true;

  },

  addFeedItem: function (post) {

    var feedItem = new Vinstagram.Views.FeedItem({
      model: post
    });
    this.addSubview('.feed', feedItem)
    this.render();

    this.count++;

    if(this.count === 4 && this.first_time === true){
      $('.guest-modal').modal();
      this.first_time = false;
    }
  },

  render: function () {
    var content = this.template({
      posts: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  bindScroll: function () {
    $(window).on("scroll", this.handleScroll.bind(this));
  },

  handleScroll: function (event){
    var $doc = $(document);
		var scrolledDist = $doc.height() - window.innerHeight - $doc.scrollTop();

		if (scrolledDist < 300) {
			this.nextPageInfiniteScroll();
		}
  },

  nextPageInfiniteScroll: function () {
    if (this.requestingNextPage) return;

    this.requestingNextPage = true;

    this.collection.fetch({
      remove: false,
      data: {
        page: this.pageNum + 1
      },
      success: function () {
        this.requestingNextPage = false;
        this.pageNum++;
      }.bind(this)
    });
  },


});
