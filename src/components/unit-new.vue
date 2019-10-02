<template>
  <section class="grand">
      <div class="container">
          <div class="parent">
              <header class="mini">
                  <article>
                      <img src="" alt="">
                      <div class="ryt">
                          <h3>3000</h3>
                          <h3>salary</h3>
                      </div>
                  </article>
                  <article>
                      <img src="" alt="">
                      <div class="ryt">
                          <h3>8</h3>
                          <h3>Attendance Hrs</h3>
                      </div>
                  </article>
                  <article>
                      <img src="" alt="">
                      <div class="ryt">
                          <h3>3</h3>
                          <h3>remaining vacations</h3>
                      </div>
                  </article>
              </header>
              <section class="mini">
                  <div class="sub-container">
                      <article class="up">
                          <div class="lft">
                              <div class="up hyd">
                                  <input type="radio" checked>
                                  &nbsp;
                                  <label>individual</label>
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                  <input type="radio">
                                  &nbsp;
                                  <label>company</label>
                              </div>
                              <div class="down">
                                  <input class="name" type="text" placeholder="FULL NAME" :value="userData.name">
                              </div>
                          </div>
                          <div class="ryt rmv">
                              <input class="image" type="image" alt="user image" width="70px" height="70px" src="url(../../images/001.svg)">
                          </div>
                      </article>
                      <article class="down">
                              <input type="text" placeholder="Branch" :value="userData.username">
                              <input type="text" placeholder="user":value="userData.id">
                              <input type="text" placeholder="Password">
                              <input type="text" placeholder="Conferm Password">
                              <input type="text" placeholder="Email" :value="userData.email">
                              <input type="text" placeholder="User Type">
                              <input type="text" placeholder="phone number" :value="userData.phone">
                              <input type="text" placeholder="Notes">

                      </article>
                  </div>
              </section>
              <footer class="mini rmv">
                  <div class="sub-container">
                      <article>
                          <h3>Sales</h3>
                          <p>is a custumer</p>
                          <input class="check" type="checkbox" placeholder="Address">
                          <input class="text" type="text" placeholder="Sales Person">
                          <input class="text" type="text" placeholder="Payment Terms">
                      </article>
                      <article>
                          <h3>Purchase</h3>
                          <p>is a vendor</p>
                          <input class="check" type="checkbox" placeholder="Address">
                          <input class="text" type="text" placeholder="Sales Person">
                          <input class="text" type="text" placeholder="Payment Terms">
                      </article>
                      <article>
                          <h3>Fiscal info</h3>
                          <input class="text" type="text" placeholder="Fiscal Position">
                          <input class="text" type="text" placeholder="Any Thing">
                      </article>
                      <article>
                          <h3>Misc</h3>
                          <input class="text" type="text" placeholder="Referance">
                          <input class="text" type="text" placeholder="Industry">
                      </article>
                  </div>
              </footer>
          </div>
      </div>
  </section>

</template>

<script>
export default {
props:['header1','btn1','userData'],
data(){
  return{
    maName:"mohab"
  }
},
beforecreate(){
  this.$http.get('http://jsonplaceholder.typicode.com/users/'+this.id).then(function(data){
    console.log(data);
    this.userData=data.body;
  })
},
}
</script>

<style scoped>

section.grand .container{
    width:99%;
    margin:auto;
}
section.grand .container .parent{
    border: 1px solid var(--middle-gray-color);
    box-shadow: 0 0 5px 1px rgb(200, 200, 200);
    background-color: var(--pure-white-color);

    /* display: flex; */
    margin: 10px auto;
    width:80%;
}
section.grand .container .parent header.mini{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}
section.grand .container .parent header.mini{
    border-bottom: 1px solid var(--middle-gray-color);
}
section.grand .container .parent header.mini article{
    border-left: 1px solid var(--middle-gray-color);

    display: flex;
    /* width:12%; */
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
}
section.grand .container .parent header.mini article img{
    width:30px;
    height:30px;
    background-color:gray;
    display: flex;
}
section.grand .container .parent header.mini article div.ryt{
    width:70%;
    display: flex;
    flex-wrap: wrap;
}
section.grand .container .parent header.mini article div.ryt h3:first-of-type{
    flex-basis: 100%;
}
section.grand .container .parent header.mini article div.ryt h3:nth-of-type(2){
    text-align: center;
}

/*------------------------------------------------ */

section.grand .container .parent section.mini{
    padding: 20px 0;
}
section.grand .container .parent section.mini .sub-container{
    width: 94%;
    margin:auto;
}
section.grand .container .parent section.mini .sub-container article.up{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
section.grand .container .parent section.mini .sub-container article.up > *{
    display: flex;
}
section.grand .container .parent section.mini .sub-container article.up div.lft{
    flex-basis: 60%;
    flex-wrap: wrap;
}
section.grand .container .parent section.mini .sub-container article.up div.lft > *{
    display: flex;
    width:95%;
}
section.grand .container .parent section.mini .sub-container article.up div.lft div.up{
    align-items: center;
}
section.grand .container .parent section.mini .sub-container article.up div.lft div.down input.name{
    width: 100%;
    border: none;
    background-color:transparent;
    padding:20px;
    border-bottom: 2px solid var(--body-color);
    font-size: 30px;
}
section.grand .container .parent section.mini .sub-container article.up div.lft div.down input.name::placeholder{
    color: var(--middle-gray-color);
}
section.grand .container .parent section.mini .sub-container article.up div.ryt input.image{
    width: 70px;
    height:70px;
    /* border: none;
    background-color:transparent;
    padding:20px;
    border-bottom: 2px solid var(--body-color);
    font-size: 30px; */
}
section.grand .container .parent section.mini .sub-container article.up div.ryt{
    flex-basis: 40%;
    justify-content: flex-end;
}
section.grand .container .parent section.mini .sub-container article.down{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
section.grand .container .parent section.mini .sub-container article.down input{
    width: 32%;
    border: none;
    background-color:transparent;
    padding: 2px;
    border-bottom: 2px solid var(--middle-gray-color);
    font-size: 15px;
    margin-bottom: 7px;
}
section.grand .container .parent section.mini .sub-container article.down input::placeholder{
    color: var(--middle-gray-color);
}

/*-------------------------------------------------------------------- */

section.grand .container .parent footer.mini{
    padding: 20px 0;

}
section.grand .container .parent footer.mini .sub-container{
    width: 94%;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
}
section.grand .container .parent footer.mini .sub-container article{
    width:50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
}
section.grand .container .parent footer.mini .sub-container article h3{
    width:100%;
}
section.grand .container .parent footer.mini .sub-container article p{
    display: inline-block;
    width:130px;
    margin-bottom: 5px;
}
section.grand .container .parent footer.mini .sub-container article input.check{
    margin-bottom: 5px;
}
section.grand .container .parent footer.mini .sub-container article input.text{
    width: 90%;
    border: none;
    background-color:transparent;
    padding: 2px;
    border-bottom: 2px solid var(--middle-gray-color);
    font-size: 15px;
    margin-bottom: 7px;
}
section.grand .container .parent footer.mini .sub-container article input.text::placeholder{
    color: var(--middle-gray-color);
}
</style>
