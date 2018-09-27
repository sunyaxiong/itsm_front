<template>
  <div class="content-wrapper">
    <sectionContentHeader :header="header" headerIsShow="headerIsShow"></sectionContentHeader>
    <noteMessage v-if=msg :msg=msg></noteMessage>
    <sectionContentList :listData=listData :header=header></sectionContentList>
  </div>
</template>
<script>
  import sectionContentHeader from '../sectionContentHeader'
  import noteMessage from '../noteMessage'
  import sectionContentList from '../sectionContentList'
  import { queryEventList } from '../../api/api'
  export default {
    name: 'eventList',
    data(){
    	return {
    		header: "事件",
        headerIsShow: "ok",
        next: '',
        previous: '',
        listData: '',
        msg: '',
    	}
    },
    components: {
      noteMessage,
      sectionContentHeader,
      sectionContentList
    },
    created () {
      this.getData();
    },
    methods: {
    getData() {
      queryEventList({
        // 参数
      }).then((response)=> {
        console.log(this)
        this.listData = response.data.results;
        console.log(this.listData)
      }).catch(function (error) {
        console.log(error);
        self.msg = error;
      });
    }
  },
  }
</script>

<style>

</style>
