<template>
  <div class="body en">
      <header class="grand">
          <div class="container">
              <div class="parent">
                  <article class="tree">
                    <!-- startList -->
                <ul>
                  <li>
                    <a href="/users">Users</a><span>/</span>
                  </li>
                </ul>&nbsp;
                <span>{{userData.name}}</span>
                    <!-- endList -->
                  </article>
                  <article class="search">
                          <input type="text" placeholder="search..." v-model="search">
                  </article>
                  <article class="buttons">
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

                        <input type="radio" name="filters" value="username" checked>
                        username
                        <input type="radio" name="filters" value="email">
                        email
                      </div>
                  </article>
              </div>
          </div>
      </header>
      <section class="data-display grand">
          <div class="container">
              <div class="sub-container">
                <base href="/users/">

                <!-- startList -->
                <a class="border" v-for="usr in filteredData" :href="usr.id" > <!--mohab added class allusers to differentiate between this anchor and the header anchors -->
                    <div>
                        <h3>{{usr.username}}</h3>
                        <p>{{usr.name}}</p>
                        <p>{{usr.email}}</p>
                        <p>{{usr.branch}}</p>
                        <p>{{usr.type}}</p>
                    </div>
                </a>

                <!-- endList -->
              </div>
          </div>
      </section>
  </div>

</template>

<script>
export default {
  components:{
  },
  // props:['userData'],
  data(){
    return{
        userData:[],
        link:"",
        headerPath: [
          {
            name:"Users",
            link:"/users",
          }
        ],
        btn1:"New",
        btn1Link:'new',
        beginning:true,
        search:""
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
        })      }
    }
  },
  created(){
    this.userData=[
      {
        id : 1,
        username : "مهاب كحلة",
        name : "مهاب",
        email : "mohab@mohab.com",
        branch: "الإسكندرية",
        type: "موظف"
      },
      {
        id : 2,
        username : "أيمن سامي",
        name : "أيمن",
        email : "ayman@samy.com",
        branch: "الإسكندرية",
        type: "موظف"
      },
      {
        id : 3,
        username : "عمو مصطفى :)",
        name : "الباشمهندس مصطفى",
        email : "eng.mostafa@samy.com",
        branch: "الإسكندرية",
        type: "المدير"
      },
      {
        id : 4,
        username : "مهند سامي",
        name : "مهند",
        email : "mohanad@samy.com",
        branch: "كوالالمبور",
        type: "موظف"
      },
      {
        id : 5,
        username : "خالد أبو العزم",
        name : "خالد",
        email : "khaled@asala.com",
        branch: "الإسكندرية",
        type: "مدير"
      }
    ]
  }
}
</script>

<style scoped>
</style>
