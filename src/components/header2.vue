<template>
  <header class="grand">
    <div class="container">
      <article>
          <!-- startList -->
        <ul>
          <li v-for="item in list1">
              <a :href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <p>new</p>
          <!-- endList -->
      </article>
    </div>
  </header>

</template>

<script>
export default {
  props:['list1']
}
</script>

<style scoped>
header.grand{
            background-color: var(--pure-white-color);
            border-bottom: 1px solid #c2c4c5;
        }
article{
               /* background-color:blue; */

               display: flex;
               width:80%;
               margin: auto;
           }


           ul,li,a{
               display: flex;
           }
           ul{
               flex-wrap: wrap;
               /* flex-basis: 100%; */
               align-items: center;
           }
           a{
               color:var(--gray-color);
               padding: 5px 10px;
               text-decoration: none;
           }
           /* li:last-of-type a{
               cursor: text;
           } */
           li a{
               color:var(--action-color);
           }

</style>
