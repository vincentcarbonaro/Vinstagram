Vinstagram.Views.Feed = Backbone.View.extend({

  template: JST['posts/feed'],

  initialize: function () {
    this.bindScroll();
    this.listenTo(this.collection, 'sync', this.render);
    this.pageNum = 1;
  },

  events: {
    "click .next-page": "nextPage"
  },

  render: function () {
    var content = this.template({
      posts: this.collection
    });
    this.$el.html(content)

    if (this.collection.length != 0) {
      this.collection.each( function (post) {
        var view = new Vinstagram.Views.FeedItem({
          model: post
        })
        this.$el.find('.feed').append(view.render().$el)
      }.bind(this));
    }

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
