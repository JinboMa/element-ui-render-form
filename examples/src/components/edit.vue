<template>
<div class="edit-example">

<el-button @click="edit = !edit">{{ btnLabel }}</el-button>

<el-render-form
  :edit="edit"
  :data="data"
  :fileds="fields">
</el-render-form>

</div>
</template>

<script>
export default {
  data () {
    return {
      edit: false,
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
  },
  computed: {
    btnLabel () {
      return this.edit ? '确定' : '编辑'
    }
  }
}
</script>