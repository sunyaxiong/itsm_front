<template>
	<section class="content-header">
      <h1>
        {{ header }}管理
        <small><a href="/event/create/" v-show="headerIsShow">创建{{header}}</a> </small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>
</template>
<script>
export default {
  props: ["header", "headerIsShow"],
  name: 'sectionContentHeader',
}
</script>
<style></style>
