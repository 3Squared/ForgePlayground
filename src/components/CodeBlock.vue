<template>
  <div class='position-relative mt-2'>
    <b-button class='copy-code position-absolute text-white' variant='link' @click='copyToClipboard'>Copy
      <b-icon-files />
    </b-button>
    <pre class='position-relative p-3 pt-4 rounded-lg code-block'><code v-html='formattedCode' class="text-white" /></pre>
  </div>
</template>

<script setup lang="ts">
import { BIconFiles, BButton } from "bootstrap-vue";

defineProps({
  formattedCode: {
    type: String,
    required: true
  },
  copyToClipboard: {
    type: Function,
    required: true
  }
})

</script>