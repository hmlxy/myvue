<template>
    <div class="radio">
        <h1>use el-radio</h1>
        <el-radio v-model="radio" label="1">选项</el-radio>
        <el-radio v-model="radio" label="2">选项</el-radio>
        <el-radio v-model="radio" label="" disabled>选项</el-radio>
        <p>use el-radio-group</p>
        <el-radio-group v-model="itemRadio">
            <el-radio v-for="item in items" :key="item.key" :label="item.label">
                {{item.title}}
            </el-radio>
        </el-radio-group>
        <p>use el-radio-button</p>
        <el-radio-group v-model="buttonRadio" size="normal">
            <el-radio-button v-for="item in items" :key="item.key" :label="item.label">
                {{item.title}}
            </el-radio-button>
        </el-radio-group>
        
        
        
        
        
        


    </div>
    
</template>

<script>
export default {
    name: 'RadioElement',
    data() {
        return {
            radio: '1',
            itemRadio: '2',
            items: [
                {title: 'hml', label: '1', key: '1'},
                {title: 'xxx', label: '2', key: '2'},
                {title: 'sss', label: '3', key: '3'},
            ],
            buttonRadio: '3',
        }
        
    }
}
</script>

<style scoped>

</style>