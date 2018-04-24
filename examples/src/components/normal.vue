<template>
<el-render-form
  :edit="true"
  :data="data"
  :fileds="fields">
</el-render-form>
</template>

<script>
export default {
  data () {
    return {
      data: {
        name: '',
        sex: '1',
        birthday: '2018-01-01'
      },
      fields: {
        name: {
          label: '姓名',
          type: 'input'
        },
        sex: {
          label: '性别',
          type: 'select',
          options: [
            { value: '1', label: '男' },
            { value: '2', label: '女' }
          ]
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