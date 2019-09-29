<template>
    <!-- startDropList -->
    <div class="box">
        <div class="title">
            list title
        </div>
        <ul>
            <li>
                <a href="">
                    item 1
                </a>
            </li>
            <li>
                <a href="">
                    item 2
                </a>
            </li>
            <li>
                <a href="">
                    item 3
                </a>
            </li>
            <li>
                <a href="">
                    item 4
                </a>
            </li>
        </ul>
    </div>
    <!-- endDropList -->
</template>

<script>
export default {
  
}
</script>

<style scoped>
div.box{
    display: flex;
    flex-wrap: wrap;
    width:180px;
}
div.title{
    color:var(--body-color);
    border: 1px solid #000;
}
div.title:hover{
    border:1px solid var(--gray-color);
}
ul,li,a{
    display: flex;
}
ul{
    border:1px solid var(--light-gray-color);
    flex-wrap: wrap;
    padding:10px;
    display: none;
}
li{
    /* justify-content: center; */
    flex-basis: 100%;
}
a{
    color:var(--gray-color);
    padding: 5px 10px;
    text-decoration: none;
}
</style>
