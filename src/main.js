const store = Vue.reactive(new app.logic.Repository())

const TodoApp = {
  data ()  {
    return {
      items: store.items,
      newTitle:null,
      newDescription:null
    }
  },
  methods:{
    remove(id){
      console.log('Remove item ' + id);
      store.remove(id);
    },
    removeItem(item){
      console.log('Remove item ' + item.id);
      store.removeItem(item);
    },
    add(){
      console.log(this);
      const item = store.add({title:this.newTitle, description: this.newDescription});
      console.log('added new Item: ' + item.id);
      this.newDescription = this.newTitle = null;
    }
  },
  mounted(){
    store.load();
  }

};

Vue.createApp(TodoApp).mount('#app');