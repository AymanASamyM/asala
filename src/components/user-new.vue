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
                    <span>Create New</span>
                    <!-- endList -->
                </article>
                <article class="search hyd">
                        <input type="text" placeholder="search..." >
                </article>
                <article class="buttons">
                    <!-- startList -->
                    <ul>
                        <li>
                            <a class="defult" href="">Save</a>
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
    <section class="user-info grand">
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
                                    <input class="name" type="text" placeholder="FULL NAME" value="">
                                </div>
                            </div>
                            <div class="ryt hyd">
                                <input class="image" type="image" alt="user image" width="70px" height="70px" src="url(../../images/001.svg)">
                            </div>
                        </article>
                        <article class="down">
                            <div class="field3">
                                <p>Branch:</p>
                                <input type="text" placeholder="Branch" value="">
                            </div>
                            <div class="field3">
                                <p>user:</p>
                                <input type="text" placeholder="User" value="">
                            </div>
                            <div class="field3">
                                <p>Password:</p>
                                <input type="text" placeholder="Password" value="">
                            </div>
                            <div class="field3">
                                <p>Confirm Password :</p>
                                <input type="text" placeholder="Confirm Password" value="">
                            </div>
                            <div class="field3">
                                <p>Email:</p>
                                <input type="text" placeholder="Email" value="">
                            </div>
                            <div class="field3">
                                <p>User Type:</p>
                                <input type="text" placeholder="User Type" value="">
                            </div>
                            <div class="field3">
                                <p>Notes:</p>
                                <input type="text" placeholder="Notes" value="">
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    </section>
</div></template>

<script>
export default {
props:['userData'],
data(){
  return{
    maName:"mohab"
  }
},
}
</script>

<style scoped>

</style>
