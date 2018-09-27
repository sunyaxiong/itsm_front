<template>
  <div class="content-wrapper">
    <sectionContentHeader :header="header" :headerIsShow="headerIsShow"></sectionContentHeader>
    <noteMessage v-if=msg :msg=msg></noteMessage>
    <section class="invoice">
    <!-- title row -->
    <div class="row">
      <div class="col-xs-12">
        <h2 class="page-header">
          <i class="fa fa-globe"></i> 创建事件
        </h2>
      </div>
      <!-- /.col -->
    </div>
    <!-- info row -->
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        事件名称
        <address>
          <input type="text" v-model="name">
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        关联资产
        <address>
          <select>
            <option>cnbjser01</option>
            <option>...</option>
          </select>
        </address>
      </div>
      <!-- /.col -->
    </div>
    <div class="row">
      <div class="col-xs-6">
        <p class="lead">详细属性</p>
        <div class="table-responsive">
          <table class="table">
            <tbody><tr>
              <th style="width:50%">请求类型:</th>
              <td><select v-model="create_by">
                <option disabled value="">--选择请求类型--</option>
                <option value="itsm">ITSM</option>
              </select></td>
            </tr>
            <tr>
              <th>状态:</th>
              <td><select v-model="state">
                <option disabled value="">--选择状态--</option>
                <option value="draft">草稿</option>
                <option value="processing">处理中</option>
                <option value="issued">转入问题</option>
                <option value="changed">转入变更</option>
                <option value="checked">审批完成</option>
                <option value="ended">结束</option>

              </select></td>
            </tr>
            <tr>
              <th>SLA:</th>
              <td><select v-model="service_level">
                <option value="">--选择SLA级别--</option>
                <option value="1">S1</option>
                <option value="2">S2</option>
                <option value="3">S3</option>
              </select></td>
            </tr>
            <tr>
              <th>位于:</th>
              <td>
                <select v-model="location">
                  <option value="">--选择位置--</option>
                  <option>北京IDC</option>
                  <option>

                  </option>
                </select>
                <label data-toggle="modal" data-target="#modal-default">
                  <i class="fa fa-fw fa-plus"></i>新增地址
                </label>
              </td>
            </tr>
          </tbody></table>
        </div>
      </div>
      <div class="col-xs-6">
        <p class="lead"><label></label></p>
        <div class="table-responsive">
          <table class="table">
            <tbody><tr>
              <th style="width:50%"></th>
              <td></td>
            </tr>
            <tr>
              <th>影响:</th>
              <td><select v-model="influence_scope">
                <option value="">--选择影响范围--</option>
                <option value="3">组织</option>
                <option value="2">部门</option>
                <option value="1">个人</option>
              </select></td>
            </tr>
            <tr>
              <th>紧急度:</th>
              <td><select v-model="emergency_degree">
                <option value="">--选择紧急度--</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
              </select></td>
            </tr>
            <tr>
              <th>优先级:</th>
              <td><select v-model="priority">
                <option value="">--选择优先级--</option>
                <option value="0">低</option>
                <option value="1">普通</option>
                <option value="2">中</option>
                <option value="3">高</option>
              </select></td>
            </tr>
          </tbody></table>
        </div>
      </div>
    </div>
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        处理人
        <address>
          <td><select v-model="handler">
            <option value="">--选择处理人--</option>
            <option v-for="user in userList" v-bind:value="user.id">{{user.username}}</option>
          </select></td>
        </address>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <!-- 处理记录 row -->
    <div class="row">
      <div class="col-xs-8">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title"><i class="fa fa-edit"></i>填写处理意见</h3>
            <div class="pull-right box-tools">
              <button type="button" class="btn btn-success"
              data-original-title="Collapse">
                  <i class="fa fa-submit"></i>提交
              </button>
            </div>
          </div>
          <div class="box-body pad">
            <textarea class="textarea" style="width: 100%; height: 175px" placeholder="此处填写意见"></textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- this row will not appear when printing -->
    <div class="row no-print">
      <div class="col-xs-12">
        <a href="invoice-print.html" target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Print</a>
        <button type="button" class="btn btn-success pull-right" @click="clickEventCreate()">
          <i class="fa fa-credit-card"></i> 事件提交
        </button>

      </div>
    </div>
    <div class="modal fade" id="modal-default" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span></button>
            <h4 class="modal-title">新增地址</h4>
          </div>
          <div class="modal-body">
            <p><input type="text"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">保存</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </section>
  </div>
</template>
<script>
  import sectionContentHeader from '../sectionContentHeader'
  import noteMessage from '../noteMessage'
  import {createEvent, getUserList} from '../../api/api'
  export default {
    name: "eventCreate",
    data () {
      return {
        header: "事件",
        headerIsShow: "",
        msg: "",
        name: "",
        state: "",
        influence_scope: "",
        service_level: "",
        location: "",
        priority: "",
        emergency_degree: "",
        create_by: "",
        userList: "",
        handler: "",
      }
    },
    components: {
      sectionContentHeader,
      noteMessage,
    },
    created: function() {
      var that = this;
      getUserList(
        ).then(function (response) {
          that.userList = response.data.results
        }).catch(function (error) {
          console.log(error.response.data)
        })
    },
    methods: {
      clickEventCreate () {
        let that = this;
        var params = {
          name: this.name,
          state: this.state,
          influence_scope: this.influence_scope,
          service_level: this.service_level,
          location: this.location,
          priority: this.priority,
          emergency_degree: this.emergency_degree,
          create_by: this.create_by,
          handler: this.handler,
        };
        console.log("----> params: ", params);
        createEvent(
          params
        ).then(function (response) {
          that.msg = "创建成功";
          that.$router.push({name:'eventlist'})
        }).catch(function (error) {
          that.msg = error.response.data
        });
      },
    }
  }
</script>
<style>
</style>
