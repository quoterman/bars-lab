Ext.define('Lib.model.Genre', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'first_name',
    type: 'string'
  }, {
    name: 'id'
  },
  {
    name: 'middle_name',
    type: 'string'
  },
  {
    name: 'last_name',
    type: 'string'
  }
  ],
  proxy: {
    type: 'rest',
    url: '/library/authors/',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});