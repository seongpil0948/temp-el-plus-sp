import type { PropType } from 'vue'
import { defineComponent, defineExpose } from 'vue'
export interface IList {
  id: string
  name: string
}

export const List = defineComponent({
  name: 'List',
  props: {
    data: {
      required: true,
      type: Array as PropType<IList[]>,
      validation: (d: any) => d.length > 0,
    },
  },
  methods: {
    dataLen() {
      return this.data.length
    },
  },
  expose: ['dataLen'],
  setup(props) {
    return () => (
      <div>
        <strong>List</strong>
        <ul>
          {vFor(props.data, (v) => {
            return <li key={v.id}>{v.name}</li>
          })}
        </ul>
      </div>
    )
  },
})

function vFor<T>(arr: T[], callback: (children: T, index: number) => any) {
  return arr.map((v, index) => {
    return callback(v, index)
  })
}
