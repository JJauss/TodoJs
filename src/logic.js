var app = window.app ||  {};
app.logic = app.logic || {}

app.logic.Item = function (id, title){
  this._id = id;
  this._title = title;
}

app.logic.Item.prototype = {
  get title(){
    return this._title;
  },

  get id(){ return this._id;}
}

app.logic.Repository = function (){
  this._items = []
}
app.logic.Repository.prototype = {
  load: function(){
    this.items.push({id: 1, title:"Item 1", description: "A simple task, should be done in less time."});
    this.items.push({id: 2,title:"Item 2", description: "More complex work takes more time."});
    this.items.push({id: 3,title:"Item 3", description: "Have workload wil take the whole life."});
    this.items.push({id: 4,title:"Item 4", description: "All other work should be done by other people."});
  },
  save: function(){},
 
  add: function(item){
    var maxId = 0;
    this._items.forEach(function(elem){
      maxId = Math.max(elem.id, maxId);
    } );
    item.id = maxId +1;
    this._items.push(item);
    return item;
  },
 
  remove: function(id){
    const index = this._items.findIndex(item => item.id === id);
    if (index >= 0){
      this._items.splice(index, 1);
    }
  },

  removeItem: function(item){
    const index = this._items.indexOf(item);
    if (index >= 0){
      this._items.splice(index, 1);
    }
  },

  get items() {return  this._items}
}