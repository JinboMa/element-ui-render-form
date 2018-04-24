<script>
/**
 * el-render-form 组件
 *
 * 必须接受的 props
 *
 * data (要绑定的对象)
 * fileds (各表单配置)
 * orders (表单顺序)
 * edit (是否编辑，默认false)
 * 其他
 */
export default {
  name: 'el-render-form',
  functional: true,
  render (h, context) {
    /**
     * 获取计算后的options
     */
    function computedOptions (attrs) {
      let options = attrs.options
      let { value = 'value', label = 'label', type = String } = attrs.optionKey || {}
      let results = []
      if (Array.isArray(options)) {
        results = options.map(item => {
          return {
            value: type(item[value]),
            label: item[label]
          }
        })
      } else {
        for (let key in options) {
          results.push({
            value: type(key),
            label: options[key]
          })
        }
      }
      return results
    }

    /**
     * 返回slot的render
     */
    function slotRender (name, i) {
      let data = context.props.data
      let value = context.props.data[i]
      let edit = context.props.edit

      let slots = context.data.scopedSlots
      if (slots && slots[name]) {
        let vnode = slots[name]({ edit, data, value, i })
        return vnode
      }
      let children = context.children
      if (!children) return null
      for (let item of children) {
        if (item.data && item.data.slot === name) {
          return item
        }
      }
      return null
    }

    /**
     * 渲染 el-form-item
     */
    function itemsRender () {
      let fileds = context.props.fileds
      let orders = context.props.orders
      let res = []
      if (orders && Array.isArray(orders)) {
        for (let i of orders) {
          res.push(
            h('el-form-item',
              {
                props: {
                  prop: i,
                  label: fileds[i] ? fileds[i].label : ''
                }
              },
              fileds[i] ? componentUse(fileds[i], i) : []
            )
          )
        }
      } else {
        for (let i in fileds) {
          res.push(
            h('el-form-item',
              {
                props: {
                  prop: i,
                  label: fileds[i].label
                }
              },
              componentUse(fileds[i], i)
            )
          )
        }
      }
      return res
    }

    /**
     * 判断 使用什么组件
     */
    function componentUse (attrs = {}, i) {
      let slot = attrs.slot
      if (slot) return [slotRender(slot, i)]

      let edit = context.props.edit
      if (!edit) return [spanRender(attrs, i)]

      let data = context.props.data
      let value = context.props.data[i]
      let editRender = attrs.editRender
      if (editRender) return [editRender(h, { data, value, i })]

      let type = attrs.type || 'input'
      let typeMap = {
        'input': inputRender,
        'select': selectRender,
        'date-picker': datePickerRender
      }
      let component = typeMap[type](attrs, i)
      let res = [component]
      return res
    }

    /**
     * element组件的双向绑定
     */
    function elModel (key, attrs = {}, type = 'input') {
      return {
        ...attrs,
        attrs: {
          ...attrs.props,
          ...attrs.attrs
        },
        props: {
          ...attrs.props,
          value: context.props.data[key]
        },
        // el-selct 触发原生的change事件
        // el-date-picker 触发原生的input事件
        on: {
          ...attrs.on,
          [type] (e) {
            context.props.data[key] = e
          }
        },
        // el-input 触发组件的input事件
        nativeOn: {
          ...attrs.nativeOn,
          [type] (e) {
            context.props.data[key] = e.target.value
          }
        }
      }
    }

    /**
     * span 的渲染
     */
    function spanRender (attrs, i) {
      let type = attrs.type
      let data = context.props.data
      let value = context.props.data[i]
      let render = attrs.render
      if (render) {
        return render(h, { data, value, i })
      } else if (type === 'select') {
        let options = computedOptions(attrs)
        for (let opt of options) {
          if (value === opt.value) return h('span', opt.label)
        }
      } else {
        return h('span', value)
      }
    }

    /**
     * el-input 的渲染
     */
    function inputRender (attrs, i) {
      return h(
        'el-input',
        elModel(i, attrs, 'input')
      )
    }

    /**
     * el-select 的渲染
     */
    function selectRender (attrs, i) {
      let options = computedOptions(attrs)
      return h(
        'el-select',
        elModel(i, attrs, 'change'),
        options.map(optionRender)
      )
    }

    /**
     * el-option 的渲染
     */
    function optionRender (attrs = {}) {
      return h(
        'el-option',
        {
          props: {
            label: attrs.label,
            value: attrs.value,
            disabled: attrs.disabled || false
          }
        },
        attrs.render ? attrs.render(h) : []
      )
    }

    /**
     * el-date-picker 的渲染
     */
    function datePickerRender (attrs, i) {
      return h(
        'el-date-picker',
        elModel(i, attrs, 'input')
      )
    }

    try {
      let items = itemsRender(h)
      return h(
        'el-form',
        {
          class: context.data.staticClass,
          style: context.data.staticStyle,
          ref: context.data.ref,
          props: context.props
        },
        items
      )
    } catch (err) {
      console.error('el-render-form error', err)
    }
  }
}
</script>

<style>
.el-form .el-form-item .el-form-item__label {
  color: #ccc;
}
</style>
