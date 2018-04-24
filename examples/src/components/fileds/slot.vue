<template>
<el-render-form
  :edit="true"
  :data="data"
  :fileds="fields">
  <div slot="sex" slot-scope="{ edit, data, value, i }">
    <span v-if="!edit"></span>
    <div v-else>
      <el-radio v-model="data[i]" label="1">男</el-radio>
      <el-radio v-model="data[i]" label="2">女</el-radio>
    </div>
  </div>
</el-render-form>
</template>

<script>
export default {
  data () {
    return {
      data: {
        name: '',
        sex: '1',
        sexLabel: '男',
        birthday: '2018-01-01'
      },
      fields: {
        name: {
          label: '姓名',
          type: 'input'
        },
        sex: {
          slot: 'sex',
          label: '性别'
        },
        birthday: {
          label: '生日',
          type: 'date-picker'
        }
      }
    }
  }
}
</script>