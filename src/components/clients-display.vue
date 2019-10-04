<template>
  <div class="body en">
    <header class="grand">
        <div class="container">
            <div class="parent">
                <article class="tree">
                    <!-- startList -->
                    <ul>
                      <li>
                        <a href="/users">Clients</a><span>/</span>
                      </li>
                    </ul>&nbsp;
                    <span>{{userData.name}}</span>
                    <!-- endList -->
                </article>
                <article class="search">
                  <input type="text" placeholder="search..." v-model="search">
                </article>
                <article class="buttons">
                  <base href="/clients/">

                    <!-- startList -->

                    <ul>
                      <li>
                        <a class="defult" href="new" >New</a>
                      </li>
                    </ul>
                    <!-- endList -->
                </article>
                <article class="filters">
                    <p></p>
                    <div>
                      <input type="radio" name="filters" value="username" checked>username
                      <input type="radio" name="filters" value="email">email
                    </div>
                </article>
            </div>
        </div>
    </header>
    <section class="data-display grand">
        <div class="container">
            <div class="sub-container">
              <a class="border" v-for="usr in filteredData" :href="usr.id" > <!--mohab added class allusers to differentiate between this anchor and the header anchors -->
                  <div>
                      <h3>الاسم:  {{usr.username}}</h3>
                      <p>عدد الوحدات:   {{usr.numbOfUnits}}</p>
                      <p>الدخل:   {{usr.income}}</p>
                      <p>مصاريف:  {{usr.fees}}</p>
                      <p>إجمالي النقدية:  {{usr.money}}</p>
                      <p>رقم العميل:   {{usr.id}}</p>
                      <p>ملاحظات:    {{usr.notes}}</p>
                  </div>
              </a>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  data(){
    return{
        link:"",
        headerPath: [
          {
            name:"Users",
            link:"/clients",
          }
        ],
        btn1:"New",
        btn1Link:"new",
        btn2:"",
        search:"",
        userData:[],
        beginning: true,
    }
  },
  computed:{
    filteredData:function(){
      var radios = document.getElementsByName('filters');
      for (var i = 0, length = radios.length; i < length; i++)
      {
       if (radios[i].checked )
       {
         if (radios[i].value === 'username')
       {
         return this.userData.filter((usr)=>{
           return usr.username.match(this.search);
         })
       }}
       else {
         return this.userData.filter((usr)=>{
           return usr.email.toLowerCase().match(this.search);
         })
       }
      }
      if(this.beginning){
        this.beginning =false;
        return this.userData.filter((usr)=>{
          return usr.username.match(this.search);
        })
            }
    }
  },
  created(){
    // this.$http.get('http://jsonplaceholder.typicode.com/users/').then(function(data){
    //   console.log(data);
    //   this.userData=data.body;
    // })

    this.userData=[
      {
        id : 1,
        username : "مهاب كحلة",
        numbOfUnits : 3,
        income : 13212,
        fees: 563,
        money:86451,
        notes: "رخم"
        },
      {
        id : 2,
        username : "عميل 2",
        numbOfUnits : 1,
        income : 864,
        fees: 54,
        money:89431,
        notes: ""
        },
      {
        id : 3,
        username : "عميل 3",
        numbOfUnits : 5,
        income : 8974,
        fees: 316,
        money:64631,
        notes:""
        },
      {
        id : 5,
        username : "عميل5",
        numbOfUnits : 2,
        income : 13212,
        fees: 563,
        money:86451,
        notes: "يتأخر في السداد"
      }
    ]
  },
}
</script>

<style scoped>

</style>
