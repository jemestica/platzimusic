<template>
  <option :value="country.name">{{ country.name }}</option>
</template>

<script>
export default {
  name: 'country',
  props: [ 'country' ]
}
</script>

<style scoped>

</style>