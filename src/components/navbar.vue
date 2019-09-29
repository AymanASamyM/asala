<template>
  <nav class="grand">
    <div class="container">
      <article class="">
        <ul>
                  <li>
                      <a href="">Board</a>
                  </li>
                  <li>
                      <a href="">Customers</a>
                  </li>
                  <li>
                      <a href="">Clients</a>
                  </li>
                  <li>
                      <a href="">Units</a>
                  </li>
              </ul>
      </article>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
  nav.grand{
                 color: var(--pure-white-color);
                 background-color: var(--light-odoo-color);
  }
  article{
                /* background-color:blue; */

                display: flex;
                width:80%;
                margin: auto;
            }


            ul,li,a{
                display: flex;
                background-color:var(--light-odoo-color);
            }
            ul{
                flex-wrap: wrap;
                flex-basis: 100%;
                align-items: center;
            }
            a{
                color:var(--pure-white-color);
                padding: 5px 10px;
                text-decoration: none;
            }
            a:hover{
                background-color:var(--dark-odoo-color);

            }
</style>
