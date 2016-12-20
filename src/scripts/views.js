var Backbone = require('backbone')
var $ = require('jquery')

let SingleViewConstructor = Backbone.View.extend({
      el: '#etsy-images',

      render: function(modl, coll){

        console.log("my model", modl);
      this.el.innerHTML = `<div class="col-xs-4 thumbnail single-item-card" id="${modl.get('listing_id')}">
                             <img src="${modl.get('Images')[0].url_170x135}">
                             <p>${modl.get('title').slice(0, 40)}${modl.get('title').length > 40 ? '...' : ''}</p>
                           </div>`

      }

});


// TODO: use Backbone's view and add render method
let ViewTemplateConstructor = Backbone.View.extend({
      el:'#etsy-images',

      events: {
		    "click .thumbnail" : 'routeToSingleItemView'
	    },

      routeToSingleItemView: function(evt){

      window.location.hash = "details/" + evt.currentTarget.id

      console.log(evt);

      },

      render: function(etsyColl){
        let largeHTMLStr = ''

        largeHTMLStr += etsyColl.models.map(function(modl){

           return `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail multi-item-card" id="${modl.get('listing_id')}">
                         <img src ="${modl.get('Images')[0].url_75x75}"/>
                         <p>${modl.get('title').slice(0, 40)}${modl.get('title').length > 40 ? '...' : ''}</p>
                   </div>`;
        }).join('')

        console.log(largeHTMLStr);
        this.el.innerHTML = largeHTMLStr
      }
});
// <p>${modl.get('listing_id')} ${modl.get('title')}</p>

    module.exports = {
      'SingleViewConstructor' : SingleViewConstructor,
      'ViewTemplateConstructor' : ViewTemplateConstructor
    }
