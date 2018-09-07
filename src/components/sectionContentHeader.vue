<template>
	<section class="content-header">
      <h1>
        {{ header }}管理
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>
</template>
<script>
export default {
  props: ["header"],
  name: 'sectionContentHeader',
}
</script>
<style></style>