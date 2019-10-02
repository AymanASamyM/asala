<template>
<div class="">
  <header class="grand">
    <div class="container">
      <div class="parent">
        <article class="tree">
            <!-- startList -->
            <ul>
              <li v-for="item in list1">
                  <a :href="item.link">{{item.name}}</a>/
              </li>
            </ul>&nbsp;
            <span id="last">new</span>
            <!-- endList -->
        </article>
        <article class="search">
                <input type="text" placeholder="search..." v-model="search">
        </article>
        <article class="buttons">
            <!-- startList -->
            <ul>
                <li>
                    <a class="defult" href="">{{btn1}}</a>
                </li>
                <li v-if="btn2">
                    <a class="not-defult" href="">{{btn2}}</a>
                </li>
            </ul>
            <!-- endList -->
        </article>
        <article class="filters">
            filters
        </article>
      </div>
    </div>
  </header>
</div>

</template>

<script>
export default {
    props:['list1','btn1','btn2','search']

}
</script>

<style scoped>

header.grand{
    background-color:var(--pure-white-color);
    padding: 5px 0;
}
header.grand .container .parent{
    display: flex;
    flex-wrap: wrap;
}
header.grand .container .parent article{
    width:50%;
    display: flex;
    align-items: center;
}
ul,li,a{
    display: flex;
}
/*-----------------------------------------*/
/*Tree*/
header.grand .container .parent article.tree{
    margin-bottom:10px;
}
header.grand .container .parent article.tree ul{
    flex-wrap: wrap;
    align-items: center;
}
header.grand .container .parent article.tree a{
    color:var(--gray-color);
    padding: 5px 10px;
    text-decoration: none;
    color:var(--action-color);
}
header.grand .container .parent article.tree span{
    color: var(--gray-color);
}
/*Tree*/
/*----------------------------------------------*/

/*----------------------------------------------*/
/*Search*/
header.grand .container .parent article.search{
    margin-bottom:10px;
}
header.grand .container .parent article.search input{
    width: 100%;
    border: none;
    background-color:transparent;
    padding:5px;
    border-bottom: 2px solid var(--body-color);
    font-size: 15px;
}
header.grand .container .parent article.search input::placeholder{
    color: var(--middle-gray-color);
}

/*search*/
/*----------------------------------------------*/

/*----------------------------------------------*/
/*button*/
header.grand .container .parent article.buttons ul{
    flex-wrap: wrap;
    flex-basis: 100%;
    align-items: center;
}
header.grand .container .parent article.buttons a{
    padding: 5px 10px;
    text-decoration: none;
}
header.grand .container .parent article.buttons a.defult{
    color:var(--pure-white-color);
    background-color:var(--action-color);
}
header.grand .container .parent article.buttons a.not-defult{
    color:var(--action-color);
}
header.grand .container .parent article.buttons a.defult:hover{
    color: #777;
    background-color:var(--dark-action-color);
}
header.grand .container .parent article.buttons a.not-defult:hover{
    color:var(--headings-color);
    background-color:var(--middle-gray-color);
}
/*button*/
/*----------------------------------------------*/
</style>
