<template>
    <!-- startList -->
    <a href="#">
        <img src="" alt="">
        <div>
            <h3>name</h3>
            <p>emailaddress@domain.com</p>
        </div>
    </a>
    <!-- endList -->
</template>

<script>
export default {
  
}
</script>

<style scoped>
a,img,div{
    display: flex;
}
a{
    /* background-color: #b19dd1; */
    border: 1px solid #c2c4c5;

    width: 24%;
    justify-content: space-between;
    margin-bottom: 10px;
    
    text-decoration: none;
}
img{
    background: #dad8dd url('../../images/001.svg') no-repeat 0px/100%;

    width: 30%;
    height: 100px;

}
div{
    width: 60%;
    flex-wrap: wrap;
    padding: 10px;

    overflow:auto;
}
h3{
    color:var(--headings-color);

    flex-basis: 100%;

    font-weight:100;
    font-size: var(--action-font);
}
p{
    color:var(--muted-color);
}
</style>
