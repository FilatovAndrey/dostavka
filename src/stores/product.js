import { defineStore } from "pinia";

import products from "./product.json";

export const useProductsStore = defineStore({
  id: "productsStore",
  state: () => ({
    products: products,
    filterIdInCatalog: [], // для каталога
    arrForWaresView: [],   // массив конкатенированный для Wares
    finihFilter:[],         
    id: null,
    basketProduct:[],
    totalSumProduct:null,
    basketProductElem:[],
    priceProd:null,
    showModal:false
  }),

  actions: {
    async closeModal(){
      this.showModal = await false
    },
    async openModal(){
      this.showModal = await true
      console.log(" this.showModal", this.showModal);
    },
    async filterWare(id) {
      this.id = id
      console.log("id pinia",id);
      this.filterIdInCatalog = await this.products.filter((el) => {
        return el.id === id;
      });
      console.log("  this.filterIdInCatalog",  this.filterIdInCatalog);
        this.arrForWaresView = await this.filterIdInCatalog[0].product[0].which.concat(
        this.filterIdInCatalog[0].product[1].which)
    },
    async click(id){
      this.finihFilter = await this.filterIdInCatalog[0].product[id -1]
    },
    //корзина
    async setBasketProduct(obj){
      await this.basketProduct.push(obj)
      console.log("pinia",this.basketProduct)
    },
    // добавляем totalPrice
    async addTotalPrice(){
      this.basketProduct = await this.basketProduct.map((item)=>{
        return {...item,totalPrice : item.price * item.quantity}
      }) 
      this.sumOneProduct = this.basketProduct[0].totalPrice
      await this.price()
    },
    // считаем общую сумму totalPrice
    async price(){
      this.totalSumProduct = await this.basketProduct.reduce((acc, nEl)=>{
        return acc + nEl.totalPrice
      },0)
    },
    // добавляем счетчик в корзине
    async countPlus(type){
      this.basketProductElem = await this.basketProduct.filter((el) => {
        return el.type === type
      });

      console.log("корзина",this.basketProduct);
      console.log("элем которому добавляем счетчик", this.basketProductElem);
      this.basketProductElem[0].quantity++
      this.basketProductElem = this.basketProductElem.map((el)=>{
        return {...el, totalPrice : el.price * el.quantity}
      })
      // console.log("у эл посчитали totalPrice",this.basketProductElem[0].totalPrice);
      this.totalSumProduct = this.totalSumProduct + this.basketProductElem[0].price
      // console.log("sum",this.totalSumProduct);
      // ----
      
      const idx = this.basketProduct.findIndex((el)=>{
        return el.type === type
      })
      console.log("idx",idx);
       this.basketProduct.splice(idx,1,this.basketProductElem[0])
      console.log("========================",this.basketProduct);

    },

    async countMinus(type){
      this.basketProductElem = await this.basketProduct.filter((el) => {
       
        return el.type === type
      });
      console.log("элем которому добавляем счетчик", this.basketProductElem);
      this.basketProductElem[0].quantity--
      this.basketProductElem = this.basketProductElem.map((el)=>{
        return {...el, totalPrice : el.price * el.quantity}
      })
      console.log("у эл посчитали totalPrice",this.basketProductElem[0].totalPrice);
      this.totalSumProduct = this.totalSumProduct - this.basketProductElem[0].price
      console.log("sum",this.totalSumProduct);  
    
      const idx = this.basketProduct.findIndex((el)=>{
        return el.type === type
      })
      console.log("idx",idx);
       this.basketProduct.splice(idx,1,this.basketProductElem[0])
      console.log("========================",this.basketProduct);

    }
    
  },
  getters: {
    getAllProducts() {
      return this.products;
    },
    // для каталога
    getFilterIdInCatalog() {
      return this.filterIdInCatalog;
    },
    //  массив конкатенированный для Wares
    getarrForWaresView(){
        return this.arrForWaresView
    },
    // конечный продукт
    getFinihFilter(){
      return this.finihFilter
    },
    getId(){
      return this.id
    },

    // корзина
    // длина массива
    getBasketLenght(){
      return this.basketProduct.length
    },
    // все продукты в корзине
    getBasket(){
      return this.basketProduct
    },
    getTotalSumProduct(){
      return this.totalSumProduct
    },

    

  },
});
