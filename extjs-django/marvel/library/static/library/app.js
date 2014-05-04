Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
<<<<<<< HEAD
  controllers: ['authors'],

  launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'authorgrid'
            }
        });
    }
=======
  controllers: ['Main', 'Genre'],
  views: ['Main'],
  models: ['Genre'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: {
        xtype: 'mainview'
      }
    });
  }
>>>>>>> 1ae00b6d23fcecb3a4192aa05dd4515f70e4b97f
});