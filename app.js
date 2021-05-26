// var vue = require('vue');
// var VueRouter = require('vue-router');
// Vue.use(VueRouter);
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3> {{ title }}</h3>'
});

Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
});

var componentA = {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
};

// The root Vue instance
new Vue({
    data: {
        foo: 1
    },
    computed: {
        bar: function() { /* ... */ }
    },
    methods: {
        baz: function() { /* ... */ }
    }
});

new Vue({
    el: '#components-demo',
});

// mixins

var mixin = {
    created: function() {
        this.hello()
    },
    methods: {
        hello: function() {
            console.log('hello from mixin!');
        }
    }
}

new Vue({
    mixins: [mixin],
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'my journey with Vue' },
            { id: 2, title: 'blogging with Vue' },
            { id: 3, title: 'why Vue is so fun' }
        ],
        lovingVue: false,
        message: 'this is a blog writen by Truong',
    },
    filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});