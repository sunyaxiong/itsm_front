<template>
  <div class="content-wrapper">
    <sectionContentHeader :header="header"></sectionContentHeader>
    <noteMessage v-if=msg :msg=msg></noteMessage>
    <sectionContentList :listData=listData :header=header></sectionContentList>
  </div>   
</template>
<script>
  import sectionContentHeader from '../sectionContentHeader'
  import noteMessage from '../noteMessage'
  import sectionContentList from '../sectionContentList'
  import { queryChangeList } from '../../api/api'
  export default {
    name: 'changeList',
    data(){
    	return {
    		header: "变更",
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
      queryChangeList({
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
