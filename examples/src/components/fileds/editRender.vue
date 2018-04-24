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
          type: 'input'
        },
        sex: {
          label: '性别',
          type: 'select',
          options: [
            { value: '1', label: '男' },
            { value: '2', label: '女' }
          ],
          editRender (h, { data, i }) {
            function edit (val) {
              data[i] = val
            }
            return (<div>
              <el-radio onInput={edit} value={data[i]} label="1">男</el-radio>
              <el-radio onInput={edit} value={data[i]} label="2">女</el-radio>
            </div>)
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