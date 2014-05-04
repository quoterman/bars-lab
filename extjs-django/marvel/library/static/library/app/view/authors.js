Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    config: {
        alias: 'widget.authorgrid'
    },

    views: [
        'author.List'
    ],

    initComponent: function() {
        this.store = {
            fields: ['first_name', 'middle_name', 'last_name'],
            data  : [
                {name: 'Ed',    email: 'ed@sencha.com'},
                {name: 'Tommy', email: 'tommy@sencha.com'}
            ]
        };

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});