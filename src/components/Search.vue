<template>
    <form class="search-bar" @submit.prevent>
        <div class="space-btw">
            <div class="item">
                <img src="@/assets/search-icon.svg" alt="Search">
                <input type="text" class="input" v-model="query" placeholder="Search Github username...">
            </div>
            <div class="item">
                <div class="search">
                    <button @click="userSearch(this.query)">Search</button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'SearchBar',
    data(){
        return{
            query: '',
            showErrorMsg: false
        }
    },
    methods: {
        ...mapMutations(['setUser']),
        ...mapActions(['userSearch'])
    }
}
</script>
<style scoped>
    .search-bar{
    width: 100%;
    height: 70px;
    border-radius: 10px;
    background: var(--card-bg);
}

.space-btw{
    width: 95%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item{
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item:nth-child(1){
    width: 65%;
    height: 100%;
}

.item img{
    pointer-events: none;
    user-select: none;
}

.input{
    width: 100%;
    height: 100%;
    margin: 0 15px;
    padding: 0 5px;
    border: none;
    outline: none;
    font-size: 20px;
}

.input::placeholder{
    color: var(--gray);
}

.search{
    width: 100px;
    height: 70%;
    margin: 0 5px;
}

.search button{
    width: 100%;
    height: 100%;
    background: var(--dark-blue);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

</style>