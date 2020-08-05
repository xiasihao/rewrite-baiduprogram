<template>
    <div class="nav-list">
        <div class="nav-item active" v-for="item in navList" :key="item.Typeid">
            {{item.Typename}}
            <div class="line"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'commonNav',
    props: {
        dataA: String
    },
    data () {
        return{
            navList: [
                {Typeid: "6000", Typename: "光伏"},
                {Typeid: "898800", Typename: "机器人"},
                {Typeid: "4000", Typename: "激光"},
                {Typeid: "16000", Typename: "锂电"},
                {Typeid: "2000", Typename: "光通讯"}
            ]
        }
    },
}
</script>
<style lang="stylus">
    .nav-item
        position relative
        display inline-block
        font-size .32rem
        height .8rem
        line-height .8rem
        margin 0 .2rem
        &.active
            font-weight bold
        .line
            position absolute
            bottom 0
            left 50%
            transform translateX(-50%)
            width .3rem;
            height .05rem;
            background-color:#C80813;

        
</style>