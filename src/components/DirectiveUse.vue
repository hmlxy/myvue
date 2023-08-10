<template>
    <div>
        <h1>use directive</h1>
        <p v-text="msg"></p>

        <div v-pre>
            {{ msg }}
            {{ content }}
        </div>

        <p v-once>{{ msg }}</p>

        <el-button type="primary" size="default" @click="msg = 'msg change'">change msg</el-button>
        <el-button type="primary" size="default" @click="msg = oldmsg">back msg</el-button>
        
        
    </div>
</template>

<script>


export default {
    data() {
        return {
            msg: 'this is v-text',
            oldmsg: 'this is v-text',
            content: 'this is a content text',
        }
    }
}
</script>