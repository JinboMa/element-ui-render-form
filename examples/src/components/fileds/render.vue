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
        sexLabel: '男',
        birthday: '2018-01-01'
      },
      fields: {
        name: {
          label: '姓名',
          type: 'input',
          render (h, { data, value, i }) {
            return h('span', `姓名：${value},字段key：${i}`)
          }
        },
        sex: {
          label: '性别',
          type: 'select',
          options: [
            { value: '1', label: '男' },
            { value: '2', label: '女' }
          ],
          render (h, { data, value, i }) {
            return (<span>{data.sexLabel}</span>)
          }
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