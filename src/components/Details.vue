<template>
    <div class="details" v-if="user.login">
        <div class="image-container">
            <img :src="user.avatar_url" class="avatar" alt="User-avatar">
        </div>
        <div class="info">
            <div class="space-btw">
                <div class="item">
                    <h2 class="username" v-if="user.name">
                        {{user.name}}
                    </h2>
                    <h2 v-else>
                        Not available
                    </h2>
                    <a :href="user.html_url" target="_blank" class="url">
                        @{{user.login}}
                    </a>
                </div>
            </div>
            <div class="status">
                <p v-if="user.bio">
                    {{user.bio}}
                </p>
                <p v-else>
                    Not available
                </p>
            </div>
            <div class="row">
                <div class="wrapper">
                    <div class="row-item">
                        <div class="col">
                            <p>Repos</p>
                            <h2>
                                {{user.public_repos}}
                            </h2>
                        </div>
                    </div>
                    <div class="row-item">
                        <div class="col">
                            <p>Followers</p>
                            <h2>
                                {{user.followers}}
                            </h2>
                        </div>
                    </div>
                    <div class="row-item">
                        <div class="col">
                            <p>Following</p>
                            <h2>
                                {{user.following}}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap">
                <div class="inline">
                    <img src="@/assets/location.svg" alt="Location">
                    <h4 v-if="user.location">
                        {{user.location}}
                    </h4>
                    <h4 v-else>
                        Not available
                    </h4>
                </div>
                <div class="inline">
                    <img src="@/assets/twitter.svg" alt="Twitter">
                    <h4 v-if="user.twitter_uername">
                        {{user.twitter_uername}}
                    </h4>
                    <h4 v-else>
                        Not available
                    </h4>
                </div>
                <div class="inline">
                    <img src="@/assets/website.svg" alt="Website">
                    <h4 v-if="user.blog">
                        {{user.blog}}
                    </h4>
                    <h4 v-else>
                        Not available
                    </h4>
                </div>
                <div class="inline">
                    <img src="@/assets/company.svg" alt="Company">
                    <h4 v-if="user.company">
                        {{user.company}}
                    </h4>
                    <h4 v-else>
                        Not available
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
name: "UserDetails",
data(){
    return{}
},
computed:{
    ...mapState(['user'])
}
}
</script>
<style scoped>
.details{
    width: 100%;
    padding: 1rem;
    background: var(--card-bg);
    border-radius: 10px;
    margin: 15px 0;
    display: inline-flex;
}

.image-container{
    width: 25%;
    height: 100%;
    padding: 1.5rem;
}

.avatar{
    width: 150px;
    border-radius: 50%;
}

.info{
    width: 90%;
    margin: 10px 15px;
}

.space-btw{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}

.info .item:nth-child(1){
    transform: translate(0, 10px);
}

.url{
    color: var(--dark-blue);
}

.date{
    color: var(--gray);
}

.status{
    width: 100%;
    height: auto;
    margin: 25px 0;
    color: var(--gray);
}

.row{
    width: 100%;
    padding: 20px;
    margin: 35px 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--main-bg);
}

.wrapper{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.wrap{
    width: 100%;
    min-height: 100px;
    margin: auto;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
}

.inline{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8vw;
}

.inline h4{
    margin: 0 10px;
}

@media (max-width: 768px){
    .details{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .image-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .avatar{
        width: 150px;
    }
    .username{
        font-size: 15px;
    }
    .col h2{
        font-size: 18px;
    }
    .info .space-btw{
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    .inline{
        width: 100%;
        justify-content: left;
        font-size: 10px;
        text-align: left;
    }
    .status{
        text-align: center;
    }
}

@media (max-width: 500px){
    .wrap{
        width: 100%;
        flex-wrap: nowrap;
        flex-direction: column;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>