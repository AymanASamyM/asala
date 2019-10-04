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
            <span>{{userData.username}}</span>
            <!-- endList -->
          </article>
          <article class="search">
            <input type="text" placeholder="search..." v-model="search">
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
    <section id="userInfoGrand" class="user-info grand view">
      <div class="container">
        <div class="parent border shadow-place-holder">
          <header class="mini rmv">
            <article class="">
              <img class="rmv" src="" alt="">
              <div class="ryt">
                <h3>2000</h3>
                <h4>Salary</h4>
              </div>
            </article>
              </header>
              <section class="mini">
                <div class="sub-container shadow-place-holder border padding10">
                  <article class="up">
                    <div class="lft">
                        <div class="down">
                            <input id="fullName" class="name" type="text" placeholder="FULL NAME" :value="userData.name" disabled>
                        </div>
                    </div>
                    <div class="ryt hyd">
                        <input class="image" type="image" alt="user image" width="70px" height="70px" src="url(../../images/001.svg)">
                    </div>
                </article>
                <article class="down">
                  <div  class="field3">
                    <p>Branch:</p>
                    <input id="branch" type="text" placeholder="Branch" :value="userData.branch" disabled>
                  </div>
                  <div  class="field3">
                    <p>user:</p>
                    <input id="user" type="text" placeholder="User" :value="userData.username" disabled>
                  </div>
                  <div id="password" class="field3 rmv">
                    <p>Password:</p>
                    <input type="password" placeholder="Password" :value="userData.password">
                  </div>
                  <div id="confirmPassword" class="field3 rmv">
                    <p>Confirm Password :</p>
                    <input type="text" placeholder="Confirm Password" value="">
                  </div>
                  <div class="field3">
                    <p>Email:</p>
                    <input id="email" type="text" placeholder="Email" :value="userData.email" disabled>
                  </div>
                  <div class="field3">
                    <p>User Type:</p>
                    <input id="userType" type="text" placeholder="User Type" :value="userData.usertype" disabled>
                  </div>
                  <div  class="field3">
                    <p>Notes:</p>
                    <input id="notes" type="text" placeholder="Notes" :value="userData.notes" disabled>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
    </section>
</div>

</template>

<script>
export default {
props:['header1'],
data(){
  return{
    userData:{},
    maName:"mohab",
    link:"",
    headerPath: [
      {
        name:"Users",
        link:"/users",
      }
    ],
    btn1:"Edit",
    search:"",
    editable: false,
    id:this.$route.params.id,
  }
},
methods:{
  edit:function(){
    if(this.editable){
      // this.editable = false;
      // this.btn1="Edit";
      // document.getElementById("notes").disabled = true;
      // document.getElementById("userInfoGrand").classList.add("view");
      // document.getElementById("password").classList.add("rmv");
      // document.getElementById("confirmPassword").classList.add("rmv");
      // document.getElementById("fullName").disabled = true;
      // document.getElementById("branch").disabled = true;
      // document.getElementById("user").disabled = true;
      // document.getElementById("email").disabled = true;
      // document.getElementById("userType").disabled = true;
      //
          window.location.href = '/users'
    }
    else{
      this.editable = true;
      this.btn1="Save";
      document.getElementById("fullName").disabled = false;
      document.getElementById("branch").disabled = false;
      document.getElementById("user").disabled = false;
      document.getElementById("email").disabled = false;
      document.getElementById("userType").disabled = false;
      document.getElementById("notes").disabled = false;
      document.getElementById("userInfoGrand").classList.remove("view");
      document.getElementById("password").classList.remove("rmv");
      document.getElementById("confirmPassword").classList.remove("rmv");
    }
  }
},
created(){
    this.userData=
      {
        id : 1,
        username : "عمو مصطفى :)",
        name : "الباشمهندس مصطفى",
        email : "eng.mostafa@samy.com",
        branch: "الإسكندرية",
        type: "المدير"
      }
},
}
</script>

<style scoped>

</style>
