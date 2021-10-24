<template>
  <div class="actionList">
        <ul>
            <li>
                <router-link to="CreatePosts"  class="link">
                    <AddIcon/>
                    <h3>Create New Post</h3>
                </router-link>
            </li>

            <li>
                <router-link to="DeletePosts" class="link">
                    <DeleteIcon/>
                    <h3>Delete Posts</h3>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import AddIcon from "@/components/Icons/AddIcon"
import DeleteIcon from "@/components/Icons/DeleteIcon"

export default {
    name:'ListActions',
    components:{
        AddIcon,
        DeleteIcon,
    },
    methods:{
    }
}
</script>

<style scoped lang="scss">  
h3{
    margin: 0;
}
.actionList{
    padding-left: 0;
    ul{
        text-align: left;
        display: grid;
        grid-template-columns: auto;
        grid-row-gap: 0.5rem;
        border-right:1px solid rgba(34, 34, 34, 0.384) ;

        li{
            margin-left:1rem ;
            .link{
                display: flex;
                font-size: 0.8rem;
                justify-content: start;
                align-items: center;
                cursor: pointer;
                color: #2c3e50;
                text-decoration: none;
                h3{
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>