Ext.onReady(function(){
	var store = new Ext.data.Store({
		fields: ['company', 'price', 'change', 'pctChange', 'lastChange'],
		proxy: {
			type: 'memory',
			reader: {
				type: 'json',
				root: 'items'
			}
		},
		data:{
			"items": [
				{ company: '3m Co',  price: 71.72, change: 0.02, pctChange: 0.03, lastChange: '9/1 12:00am' },
				{ company: 'Alcoa Inc',  price: 29.01, change: 0.42, pctChange: 1.47, lastChange: '9/1 12:00am' },
				{ company: 'Altria Group Inc',  price: 83.81, change: 0.28, pctChange: 0.34, lastChange: '9/1 12:00am' },
				{ company: '3m Co',  price: 71.72, change: 0.02, pctChange: 0.03, lastChange: '9/1 12:00am' },
				{ company: 'Alcoa Inc',  price: 29.01, change: 0.42, pctChange: 1.47, lastChange: '9/1 12:00am' },
				{ company: 'Altria Group Inc',  price: 83.81, change: 0.28, pctChange: 0.34, lastChange: '9/1 12:00am' },
				{ company: '3m Co',  price: 71.72, change: 0.02, pctChange: 0.03, lastChange: '9/1 12:00am' },
				{ company: 'Alcoa Inc',  price: 29.01, change: 0.42, pctChange: 1.47, lastChange: '9/1 12:00am' },
				{ company: 'Altria Group Inc',  price: 83.81, change: 0.28, pctChange: 0.34, lastChange: '9/1 12:00am' },
				{ company: '3m Co',  price: 71.72, change: 0.02, pctChange: 0.03, lastChange: '9/1 12:00am' },
				{ company: 'Alcoa Inc',  price: 29.01, change: 0.42, pctChange: 1.47, lastChange: '9/1 12:00am' },
				{ company: 'Altria Group Inc',  price: 83.81, change: 0.28, pctChange: 0.34, lastChange: '9/1 12:00am' }
			]
		}
	});
	
	var grid1 = Ext.create('Ext.grid.Panel', {
        store: store,
		defaults: {
			width: 100
		},
        columns: [
            {text: "Company", dataIndex: 'company'},
            {text: "Price", dataIndex: 'price'},
            {text: "Change", dataIndex: 'change'},
            {text: "% Change", dataIndex: 'pctChange'},
            {text: "Last Updated", dataIndex: 'lastChange'}
        ],
        width: 600,
        height: 300,
        title: 'Grid with memory type in store',
        renderTo: Ext.getBody()
    });

});