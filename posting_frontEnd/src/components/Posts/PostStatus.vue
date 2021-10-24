<template>
    <div class="PostStatus">
        <div class="foto">
            <img :src="status.author.foto" 
            alt="" >
        </div>
        <div class="infoAuthor">
            <span class="alias">
                {{status.author.name}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'PostStatus',
    props:{
        status:{
            type:Object,
            require:true
        }
    }


}
</script>

<style scoped lang="scss">
.PostStatus{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    .foto{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: rgb(131,58,180);
        background: linear-gradient(151deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 56%, rgba(252,176,69,1) 100%); 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:5px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    .infoAuthor{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .alias{
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: normal;
            font-size: 9px;
            overflow-wrap: break-word;
            align-items: center;
        }
    }
}
</style>