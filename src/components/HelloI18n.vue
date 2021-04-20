<template>
  <p>{{ t('hello') }}</p>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HelloI18n',
  setup() {
    const { t } = useI18n({
      locale: 'es',
      inheritLocale: false,
      useScope: 'local'
    })

    return { t }
  }
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello everyone!"
  },
  "es": {
    "hello": "Hola a todos!"
  },
  "ca": {
    "hello": "Hola a tots!"
  }
}
</i18n>
