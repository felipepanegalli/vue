/*Vue.filter('doneLabel', function (value) {
 if (value == 0) {
 return "Não Paga"
 } else {
 return "Paga"
 }
 });

 Vue.filter('statusGeneral', function (value) {
 if (value === false) {
 return "Nenhuma conta cadastrada";
 }
 if (!value) {
 return "Nenhuma conta a pagar";
 } else {
 return "Existem " + value + " contas a serem pagas";
 }
 });

 var menuComponent = Vue.extend({
 template: `
 <!-- MENU -->
 <nav>
 <ul>
 <li v-for="o in menus">
 <a href="#" @click.prevent="showView(o.id)">{{ o.name}}</a>
 </li>
 </ul>
 </nav>
 <!-- FIM DO MENU -->
 `,
 data: function () {
 return {
 menus: [
 {id: 0, name: "Listar contas"},
 {id: 1, name: "Criar conta"}
 ],
 };
 },
 methods: {
 showView: function (id) {
 this.$parent.activedView = id;
 if (id == 1) {
 this.$parent.formType = 'insert';
 }
 },
 }
 });

 var billListComponent = Vue.extend({
 template: `
 <table border="1" cellpadding="10">
 <thead>
 <tr>
 <td>#</td>
 <th>Vencimento</th>
 <th>Nome</th>
 <th>Valor</th>
 <th>Status</th>
 <th>Ações</th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="(id, o) in bills">
 <td>{{ id+1 }}</td>
 <td>{{ o.date_due }}</td>
 <td>{{ o.name }}</td>
 <td>{{ o.value | currency 'R$ ' 2 }}</td>
 <td :class="{'pago': o.done, 'nao-pago' : !o.done}">
 {{ o.done | doneLabel }}
 </td>
 <td>
 <a href="" @click.prevent="loadBill(o)">Editar</a>
 <a href="" @click.prevent="deleteBill(o)">Excluir</a>
 </td>
 </tr>
 </tbody>
 </table>
 `,
 data: function () {
 return {
 bills: [
 {date_due: '20/08/2016', name: 'Conta de Luz', value: 70, done: false},
 {date_due: '21/08/2016', name: 'Conta de água', value: 50, done: true},
 {date_due: '22/08/2016', name: 'Conta de telefone', value: 55.99, done: false},
 {date_due: '23/08/2016', name: 'Supermercado', value: 603.99, done: true},
 {date_due: '24/08/2016', name: 'Cartão de crádito', value: 1225.99, done: false},
 {date_due: '25/08/2016', name: 'Empréstimo', value: 2000, done: false},
 {date_due: '26/08/2016', name: 'Gasolina', value: 200, done: true}
 ]
 };
 }
 ,
 methods: {
 loadBill: function (id) {
 this.$parent.bill = id;
 this.$parent.activedView = 1;
 this.$parent.formType = 'update';
 },
 deleteBill: function (id) {
 if (confirm('Deseja excluir esta conta?')) {
 this.bills.$remove(id);
 }
 }
 }
 });

 var billCreateComponent = Vue.extend({
 template: `
 <form name="form">

 <label for="vencimento">Vencimento:</label>
 <input type="text" v-model="bill.date_due"><br><br>

 <label for="conta">Conta:</label>
 <select v-model="bill.name">
 <option v-for="o in names" value="{{ o }}">{{ o }}</option>
 </select><br><br>

 <label for="valor">Valor:</label>
 <input type="text" v-model="bill.value"><br><br>

 <label for="valor">Pago?</label>
 <input type="checkbox" v-model="bill.done"><br><br>

 <input type="button" @click="submit" value="Enviar">

 </form>
 `,
 props: ['bill', 'formType'],
 data: function () {
 return {
 names: [
 'Conta de Luz',
 'Conta de água',
 'Conta de telefone',
 'Supermercado',
 'Cartão de crádito',
 'Empréstimo',
 'Gasolina'
 ]
 };
 },
 methods: {
 submit: function () {
 if (this.formType == 'insert') {
 this.$parent.$refs.billListComponent.bills.push(this.bill);
 }

 this.bill = {
 date_due: '',
 name: '',
 value: 0,
 done: false
 };

 this.$parent.activedView = 0;
 }
 }
 });

 var appComponent = Vue.extend({
 components: {
 'menuComponent': menuComponent,
 'bill-list-component': billListComponent,
 'bill-create-component': billCreateComponent
 },
 template: `
 <h1>{{ title }}</h1>
 <h3 :class="{'n-conta' : status === false, 'pago' : status === 0, 'nao-pago' : status > 0}">
 {{ status | statusGeneral }}
 </h3>
 <menu-Component></menu-Component>
 <!-- LISTAGEM DOS DADOS -->
 <div v-show="activedView == 0">
 <bill-list-component v-ref:bill-list-component></bill-list-component>
 </div>
 <!-- FIM DAS LISTAGEM -->
 <br>
 <!--FORM DE EDIÇÃO DOS DADOS-->
 <div v-show="activedView == 1">
 <bill-create-component :bill.sync="bill" :form-type="formType"></bill-create-component>
 </div>
 <!--FIM DO FORM-->
 `,
 data: function () {
 return {
 showModal: false,
 test: "",
 title: "Contas a receber",

 activedView: 1,
 formType: 'insert',
 bill: {
 date_due: '',
 name: '',
 value: 0,
 done: false
 },
 payment: [
 {id: 0, name: "Não Paga"},
 {id: 1, name: "Paga"}
 ]
 };
 },
 computed: {
 status: function () {
 var billListComponent = this.$refs.billListComponent.bills;
 if (!billListComponent.length) {
 return false;
 }
 var count = 0;
 for (var i in billListComponent) {
 if (!billListComponent[i].done) {
 count++;
 }
 }
 return count;
 }
 },
 methods: {}
 });

 Vue.component('app-component', appComponent);

 var app = new Vue({
 el: "#app",
 }); */

var pagina1 = Vue.extend({
    template: 'pagina 1'
});

var pagina2 = Vue.extend({
    template: 'pagina 2'
});

var app = Vue.extend({});

var router = new VueRouter();

router.map({
    '/pagina1': {
        component: pagina1
    },
    '/pagina2': {
        component: pagina2
    }
});

router.start(app, '#app')