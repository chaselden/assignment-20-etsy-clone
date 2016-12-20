var Backbone = require('backbone')
var $ = require('jquery')
const UserModel = Backbone.Model.extend({
    // idAttribute: 'active'
});


const UserCollection = Backbone.Collection.extend({

    model: UserModel,
    url: "",

    parse: function(jsonCollection){
        // console.log(jsonCollection.results)
        return jsonCollection.results

    },

    initialize: function(someValue){
      // console.log(someValue)
      this.url = "https://openapi.etsy.com/v2/listings/active.js?includes=Images&api_key=ch7ygoipub0go45n3r9n3buv&callback=?"

  },

})

module.exports = UserCollection













//
