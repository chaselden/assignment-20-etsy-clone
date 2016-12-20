var Backbone = require('backbone')
var $ = require('jquery')
const NavBar = require('./nav-bar.js')

// const UserCollection = require('./models-collection.js')
import UserCollection from './models-collection.js';
import theViews from './views.js';

const AppRouter = Backbone.Router.extend({
    routes: {
        "": "showHomePage",
        "details/:modelId": "showSingleItemView",
    },

    showHomePage: function() {
        var etsyColl = new UserCollection()

        etsyColl.fetch().then(function() {

         var view = new theViews.ViewTemplateConstructor()
        //  console.log(etsyColl)
         view.render(etsyColl)
       })
    },

    showSingleItemView: function(modelId) {

        var etsyItem  = new UserCollection()

        etsyItem.fetch().then(function() {

            var singleItemView = new theViews.SingleViewConstructor()

            var modelMatch = etsyItem.find(function(model){
              return Number(modelId) === model.get('listing_id')
            })

            console.log('model match', modelMatch);
            singleItemView.render(modelMatch, etsyItem)

        })

    },


    initialize: function() {
        // console.log('backbone ROUTING')
         console.log()
         var navBar = new NavBar()
         navBar.render()
        Backbone.history.start()

    }
})
const app = new AppRouter()
