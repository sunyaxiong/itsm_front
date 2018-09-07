<template>
  <section class="content container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">{{header}}列表</h3>

            <div class="box-tools">
              <div class="input-group input-group-sm" style="width: 150px;">
                <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                <div class="input-group-btn">
                  <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>名称</th>
                  <th>创建时间</th>
                  <th>状态</th>
                  <th>描述</th>
                </tr>
                <tr v-for="item in listData">
                  <td>{{item.id}}</td>
                  <td><router-link :to="'/rest/event/' + item.id">{{item.name}}</router-link></td>
                  <td>{{item.dt_created}}</td>
                  <td><span class="label label-warning">{{item.state}}</span></td>
                  <td>{{item.description}}</td>
                </tr>
              <!-- <tr>
                <td>183</td>
                <td><router-link to="/events/detail">网络中断</router-link></td>
                <td>11-7-2014</td>
                <td><span class="label label-warning">处理中</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
              <tr>
                <td>219</td>
                <td><router-link to='eventdetail'>nginx服务不可用</router-link></td>
                <td>11-7-2014</td>
                <td><span class="label label-success">结束</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr> -->
              
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
    </div>
  </section>  
</template>
<script>
export default {
  props: ["listData", "header"],
  name: 'sectionContentList',
  data () {
    return {
      
    }
  },
  created() {
    console.log(11)
  }
}
</script>
<style></style>