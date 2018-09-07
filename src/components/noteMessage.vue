<template>
  <div class="pad margin no-print">
    <div class="callout callout-info" style="margin-bottom: 0!important;">
      <h4><i class="fa fa-info"></i> :</h4>
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'noteMessage',
  props: ["msg"],
  data () {
  	return {
       
  	}
  }
}
</script>

<style>

</style>
