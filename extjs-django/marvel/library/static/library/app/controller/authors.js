Ext.define('Lib.controller.Genre', {
  extend: 'Ext.app.Controller',
  models: ['authors'],
  stores: ['Genre'],
  views: ['authors']
});