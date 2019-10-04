<template lang="html">
  <div class="body en">
    <header class="grand">
    <div class="container">
        <div class="parent">
            <article class="tree">
                <!-- startList -->
                <ul>
                    <li>
                        <a href="/clients">Clients</a><span>/</span>
                    </li>
                </ul>&nbsp;
                <span>{{userData.name}}</span>
                <!-- endList -->
            </article>
            <article class="search hyd">
                    <input type="text" placeholder="search...">
            </article>
            <article class="buttons">
                <!-- startList -->
                <ul>
                    <li>
                        <a class="defult" v-on:click="edit">{{btn1}}</a>
                    </li>
                </ul>
                <!-- endList -->
            </article>
            <article class="filters rmv">
                filters
            </article>
        </div>
    </div>
</header>
<section class="clint-info grand">
    <div class="container">
        <div id="clientInfoGrand" class="parent border shadow-place-holder">
            <header class="mini rmv">
                <article class="">
                    <img class="rmv" src="" alt="">
                    <div class="ryt">
                        <h3>2</h3>
                        <h4>Unit(s)</h4>
                    </div>
                </article>
                <article>
                    <img class="rmv" src="" alt="">
                    <div class="ryt">
                        <h3>2</h3>
                        <h4>Unit(s)</h4>
                    </div>
                </article>
                <article>
                    <img class="rmv" src="" alt="">
                    <div class="ryt">
                        <h3>2</h3>
                        <h4>Unit(s)Unit(s)</h4>
                    </div>
                </article>
                <article>
                    <img class="rmv" src="" alt="">
                    <div class="ryt">
                        <h3>2</h3>
                        <h4>Unit(s)</h4>
                    </div>
                </article>
            </header>
            <section class="mini">
                <div class="sub-container shadow-place-holder border padding10">
                    <article class="up">
                        <div class="lft">
                            <div class="up rmv">
                                <input type="radio" checked>
                                &nbsp;
                                <label>individual</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio">
                                &nbsp;
                                <label>company</label>
                            </div>
                            <div class="down">
                                <input id="name" class="name" type="text" placeholder="NAME" :value="userData.name" disabled>
                            </div>
                        </div>
                        <div class="ryt rmv">
                            <input class="image" type="image" alt="user image" width="70px" height="70px" src="url(../../images/001.svg)">
                        </div>
                    </article>
                    <article class="down">
                        <div class="field3">
                            <p>ID:</p>
                            <input id="id" type="text" placeholder="ID" :value="userData.id" disabled>
                        </div>
                        <div class="field3">
                            <p>Phone:</p>
                            <input id="phone" type="text" placeholder="Phone" :value="userData.phone" disabled>
                        </div>
                        <div class="field3">
                            <p>Email:</p>
                            <input id="email" type="text" placeholder="Email" :value="userData.email" disabled>
                        </div>
                        <div class="field3">
                            <p>Address:</p>
                            <input id="address" type="text" placeholder="Address" :value="userData.address" disabled>
                        </div>
                        <div class="field3">
                            <p>City:</p>
                            <input id="city" type="text" placeholder="City" :value="userData.city" disabled>
                        </div>
                        <div class="field3">
                            <p>National ID:</p>
                            <input id="nationalID" type="text" placeholder="National ID" :value="userData.nationalID" disabled>
                        </div>
                        <div class="field3">
                            <p>Notes:</p>
                            <input id="notes" type="text" placeholder="Notes" :value="userData.notes" disabled>
                        </div>
                    </article>
                </div>
            </section>
            <footer class="mini">
                <div class="sub-container">
                    <article class="shadow-place-holder border padding10" v-for="unit in userData.units">
                        <h3>{{unit.id}}</h3>
                        <div class="check-box">
                            <input disabled checked class="check" type="checkbox">
                            <p class="">Rentable</p>
                        </div>
                        <div class="check-box">
                            <input class="check rmv" type="checkbox">
                            <p>Rented</p>
                        </div>
                        <div class="field1">
                            <p>Unit Type:</p>
                            <input class="text" type="text" placeholder="Unit Type" :value="unit.type" disabled>
                        </div>
                        <div class="field1">
                            <p>Unit No.:</p>
                            <input class="text" type="text" placeholder="Unit No." :value="unit.number" disabled>
                        </div>
                        <div class="field1">
                            <p>Unit Building:</p>
                            <input class="text" type="text" placeholder="   _________" :value="unit.building" disabled>
                        </div>
                        <div class="field1">
                            <p>Unit Project:</p>
                            <input class="text" type="text" placeholder="Unit Project" :value="unit.project" disabled>
                        </div>
                        <div class="field1">
                            <p>Total Income:</p>
                            <input class="text" type="text" placeholder="Total Income" :value="unit.income" disabled>
                        </div>
                        <div class="field1">
                            <p>Total Fees:</p>
                            <input class="text" type="text" placeholder="Total Fees" :value="unit.fees" disabled>
                        </div>
                        <div class="field1">
                            <p>Total Money:</p>
                            <input class="text" type="text" placeholder="Total Money" :value="unit.money" disabled>
                        </div>
                    </article>

                </div>
            </footer>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  props:[],
  data(){
    return{
      userData:{},
      id:this.$route.params.id,
      btn1:"Edit",
      editable: false,
    }},
    methods:{
      edit:function(){
        if(this.editable){ //clicked Save button
          this.editable = false;
          this.btn1="Edit";
          /*id phone email address city nationalID notes*/
          document.getElementById("clint")
          document.getElementById("clientInfoGrand").classList.add("view");
          document.getElementById("notes").disabled = true;
          document.getElementById("id").disabled = true;
          document.getElementById("phone").disabled = true;
          document.getElementById("address").disabled = true;
          document.getElementById("email").disabled = true;
          document.getElementById("nationalID").disabled = true;
          document.getElementById("city").disabled = true;

        }
        else{ //clicked Edit button
          this.editable = true;
          this.btn1="Save";
          document.getElementById("clientInfoGrand").classList.remove("view");
          document.getElementById("notes").disabled = false;
          document.getElementById("id").disabled = false;
          document.getElementById("phone").disabled = false;
          document.getElementById("address").disabled = false;
          document.getElementById("email").disabled = false;
          document.getElementById("nationalID").disabled = false;
          document.getElementById("city").disabled = false;
        }
      },
  }
}
</script>

<style lang="css" scoped>

</style>
