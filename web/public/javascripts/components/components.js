App.DatasetFavoriteComponent = Ember.Component.extend({
  actions: {
    favorites: function(dataset) {
      var url = '/api/v1/datasets/' + dataset.id + '/favorite'
      var method = !dataset.isFavorite ? 'POST' : 'DELETE'
      var token = $("#csrfToken").val().replace('/', '')
      var _this = this
      $.ajax({
        url: url,
        method: method,
        headers: {
          'Csrf-Token': token
        },
        dataType: 'json',
        data: {
          csrfToken: token
        }
      }).done(function(data, txt, xhr){
        _this.set('dataset.isFavorite', !dataset.isFavorite)
      }).fail(function(xhr, txt, err){
        console.log('Error: Could not update dataset favorite.')
      })
    }
  }
})

App.DatasetOwnerComponent = Ember.Component.extend({
  actions: {
    owned: function(dataset) {
      var url = '/api/v1/datasets/' + dataset.id + '/own';
      var method = !dataset.isOwned ? 'POST' : 'DELETE';
      var token = $("#csrfToken").val().replace('/', '');
      var _this = this;
      $.ajax({
        url: url,
        method: method,
        headers: {
          'Csrf-Token': token
        },
        dataType: 'json',
        data: {
          csrfToken: token
        }
      }).done(function(data, txt, xhr){
        if (data.status == 'success')
        {
          _this.set('dataset.isOwned', !dataset.isOwned);
          _this.set('dataset.owners', data.owners);
        }
      }).fail(function(xhr, txt, err){
        console.log('Error: Could not update dataset owner.')
      })
    }
  }
})

var datasetCommentsComponent = null;
App.DatasetCommentsComponent = Ember.Component.extend({
  totalPages: null,
  commentsLoading: true,
  itemsPerPage: 3,
  page: 1,
  count: null,
  comments: [],
  comment: {},
  isEdit: false,
  commentTypes: [
    'Comment',
    'Question',
    'Description',
    'Partition',
    'ETL Schedule',
    'Grain',
    'DQ Issue'
  ],
  getComments: function(params){
    if (this.isDestroyed || this.isDestroying)
    {
      return;
    }
    var _this = this;
    datasetCommentsComponent = this;
    var datasetId = this.get('dataset.model.id')
    var url = '/api/v1/datasets/' + datasetId + '/comments'
    params =
    { size: (params || {}).size || this.get('itemsPerPage')
    , page: (params || {}).page || this.get('page')
    }
    url += '?' + $.param(params)
    $.get
    ( url
    , function(data) {
        if (_this.isDestroyed || _this.isDestroying)
        {
          return;
        }
        _this.set('totalPages', data.data.totalPages)
        _this.set('page', data.data.page)
        _this.set('count', data.data.count)
        _this.set('itemsPerPage', data.data.itemsPerPage)
        _this.set('commentsLoading', false)
        var comments = data.data.comments
        comments.forEach(function(cmnt){
          cmnt.isAuthor = false
          cmnt.html = marked(cmnt.text).htmlSafe()
          if(cmnt.authorUserName === $("#username").text().trim()) {
            cmnt.isAuthor = true
          }
        })
        _this.set('comments', comments)
      }
    )
    .fail(function(){
      _this.set('comments', [])
      _this.set('commentsLoading', false)
    })
  }.on('init'),
  defaultCommentText: function(){
    return "#We Support Markdown ([GitHub Flavored][gh])! \n##Secondary Header \n* bullet \n* bullet\n\n\n| Col 1 | Col 2 | Col 3|\n|:--|:--:|--:|\n|Left|Center|Right|\n```sql\nSELECT * FROM ABOOK_DATA WHERE modified_date > 1436830358700;\n```\n[ABOOK_DATA](/#/dataset/1/ABOOK_DATA) All links will open in a new tab\n\n[gh]: https://help.github.com/articles/github-flavored-markdown/"

  },
  setDefaultCommentText: function(){
    this.set('comment', {type: 'Comment'});
    this.set('comment.text', this.defaultCommentText());
  },
  actions: {
    remove: function(comment) {
      var url = '/api/v1/datasets/' + comment.datasetId + '/comments/' + comment.id
      var token = $("#csrfToken").val().replace('/', '')
      var _this = this
      $.ajax({
        url: url,
        method: 'DELETE',
        headers: {
          'Csrf-Token': token
        },
        dataType: 'json',
        data: {
          csrfToken: token
        }
      }).done(function(data, txt, xhr){
        _this.getComments()
      }).fail(function(xhr, txt, err){
        console.log('Error: Could not remove comment.')
      })
    },
    updatePreview: function(){
      var text = $("#datasetComment-write > textarea").val()
      $("#datasetComment-preview").html(marked(text))
    },
    update: function() {
      var token = $("#csrfToken").val().replace('/', '')
      var _this = this;
      comment.datasetId = this.get('dataset.id')
      var cmnt = {}
      cmnt.text = comment.text
      cmnt.type = comment.type
      var url = '/api/v1/datasets/' + comment.datasetId + '/comments/' + comment.id
      cmnt.csrfToken = token
      $.ajax({
        url: url,
        method: 'PUT',
        headers: {
          'Csrf-Token': token
        },
        dataType: 'json',
        data: {
          csrfToken: token
        }
      }).done(function(data, txt, xhr){
        _this.getComments()
      }).fail(function(xhr, txt, err){
        console.log('Error: Could not update comment.')
      })

    },
    create: function(comment) {
      var token = $("#csrfToken").val().replace('/', '')
      var _this = this;
      var cmnt = {}
      var isEdit = this.get('isEdit')
      cmnt.datasetId = this.get('dataset.model.id')
      cmnt.text = comment.text
      cmnt.type = comment.type
      cmnt.id = comment.id
      var url = '/api/v1/datasets/' + cmnt.datasetId + '/comments'
      cmnt.csrfToken = token
      console.log('comment data: ', cmnt)
      $.ajax({
        url: url,
        method: 'POST',
        headers: {
          'Csrf-Token': token
        },
        dataType: 'json',
        data: cmnt
      }).done(function(data, txt, xhr){
        _this.getComments()
        _this.send('hideModal')
      }).fail(function(xhr, txt, err){
        console.log('Error: Could not create comment.')
      })
    },
    showModal: function(comment) {
      if(comment) {
        this.set('comment', comment)
        this.set('isEdit', true)
        this.set('isEdit', false)
      } else {
        //this.set('comment', {type: 'Comment'})
        this.setDefaultCommentText();
        $("#datasetComment-preview").html(marked(this.defaultCommentText()));
      }
      $("#datasetCommentModal").modal('show')
    },
    hideModal: function(){
      this.set('isEdit', false)
      this.set('comment', {})
      $("#datasetCommentModal").modal('hide')
    },
    pageForward: function() {
      var totalPages = this.get('totalPages');
      var currentPage = this.get('page');
      if (currentPage < totalPages)
      {
        this.getComments({page: this.get('page') + 1});
      }

    },
    pageBack: function() {
      var currentPage = this.get('page');
      if (currentPage > 1)
      {
        this.getComments({page: this.get('page') - 1});
      }
    }
  }
})

App.DatasetWatchComponent = Ember.Component.extend({
  actions: {
    watch: function(dataset) {
      var url = '/api/v1/datasets/' + dataset.id + '/watch'
      var method = !dataset.watchId ? 'POST' : 'DELETE'
      if(method.toLowerCase() === 'delete')
        url += '/' + dataset.watchId
      var token = $("#csrfToken").val().replace('/', '')
      var _this = this
      $.ajax({
        url: url,
        method: method,
        headers: {
          'Csrf-Token': token
        },
        dataType: 'json',
        data: {
          csrfToken: token,
          item_type: 'dataset',
          notification_type: 'weekly'
        }
      }).done(function(data, txt, xhr){
        _this.set('dataset.isWatched', !dataset.isWatched)
        _this.sendAction('getDatasets')
      }).fail(function(xhr, txt, err){
        console.log('Error: Could not watch dataset.')
      })
    }
  }
})
