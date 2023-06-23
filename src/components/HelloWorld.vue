<script setup lang="ts">
import { ref, h } from 'vue'
import { ElMsgReturnBox, ElButton, ElSwitch } from "el-plus-sp"
import MsgForm from './MsgForm.vue';
import { List } from './MsgList'

defineProps<{ msg: string }>()

// const clickBtn = () => {
//   console.log("ElMsgReturnBox: ", ElMsgReturnBox)
//   ElMsgReturnBox()
// }

async function openTsxTextList() {
  const returnVal = await ElMsgReturnBox({
    vmReturnKey: 'dataLen',
    title: 'Message',
    message: h(List, {
      data: [
        { id: '1', name: 'sp' },
        { id: '2', name: 'hi' },
        { id: '3', name: 'bye' },
        { id: '4', name: 'zeze' },
      ],
    })
    ,
  })
  console.log('returnVal: ', returnVal)
}
const checked = ref<boolean | string | number>(false)
const hi = h(ElSwitch, {
  'modelValue': checked.value,
  'onUpdate:modelValue': (val: boolean | string | number) => {
    checked.value = val
  },
})
async function openElElement() {

  const returnVal = await ElMsgReturnBox({
    vmReturnKey: 'dataLen',
    title: 'El Element Renderer',
    showInput: false,
    message: hi,
  })
  console.log('returnVal: ', returnVal)
}
async function openVueFile() {
  const returnVal = await ElMsgReturnBox({
    title: 'El Element Renderer',
    message: h(MsgForm),
    // message: h(MsgForm),
  })
  console.log('returnVal: ', returnVal, retruenVal.resData)
}

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <el-button plain @click="openTsxTextList">
      openTsxTextList
    </el-button>
    <el-button plain @click="openElElement">
      open with ElElement
    </el-button>
    <el-button plain @click="openVueFile">
      open with Vue Form File
    </el-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
