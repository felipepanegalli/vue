var app = new Vue({
	el: "#app",
	data: {
		test: "",
		title: "Contas a receber",
		menus: [
			{id: 0, name: "Listar contas"}, 
			{id: 1, name: "Criar conta"}
		],
		activedView: 1,
		formType: 'insert',
		bill:{
			date_due: '',
			name: '',
			value: 0,
			done: 0
		},
		names:[
			'Conta de Luz',
			'Conta de água',
			'Conta de telefone',
			'Supermercado',
			'Cartão de crádito',
			'Empréstimo',
			'Gasolina'
		],
		bills: [
			{date_due: '20/08/2016', name: 'Conta de Luz', value: 70, done:0},
			{date_due: '21/08/2016', name: 'Conta de água', value: 50, done:1},
			{date_due: '22/08/2016', name: 'Conta de telefone', value: 55.99, done:0},
			{date_due: '23/08/2016', name: 'Supermercado', value: 603.99, done:1},
			{date_due: '24/08/2016', name: 'Cartão de crádito', value: 1225.99, done:0},
			{date_due: '25/08/2016', name: 'Empréstimo', value: 2000, done:0},
			{date_due: '26/08/2016', name: 'Gasolina', value: 200, done:1}
		]
	},
	computed:{
		status: function(){
			var count = 0;
			for(var i in this.bills){
				if(!this.bills[i].done){
					count++;
				}
			}
			return !count?"Nenhuma conta a pagar" : "Existem " + count + " a serem pagas";
		}
	},
	methods:{
		showView: function (id){
			this.activedView = id;
			if(id == 1){
				this.formType = 'insert';
			}
		},
		submit: function(){
			if(this.formType == 'insert'){
				this.bills.push(this.bill);
			}

			this.bill = {
			date_due: '',
			name: '',
			value: 0,
			done: 0
			};

			this.activedView = 0;
		},
		loadBill: function (id){
			this.bill = id;
			this.activedView = 1;
			this.formType = 'update';
		},
		deleteBill: function (id){
			this.bills.$remove(id);
		}
	}
});

Vue.filter('doneLabel', function(value){
	if(value == 0){
		return "Não Paga"
	}else{
		return "Paga"
	}
});