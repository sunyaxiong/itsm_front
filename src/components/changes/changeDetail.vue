<template>
  <div class="content-wrapper">
    <sectionContentHeader :header="header"></sectionContentHeader>
    <noteMessage v-if=msg :msg=msg></noteMessage>
    <section class="invoice">
    <!-- title row -->
    <div class="row">
      <div class="col-xs-12">
        <h2 class="page-header">
          <i class="fa fa-globe"></i> 变更详情
          <small class="pull-right">创建时间: {{changeDetail.dt_created}}</small>
        </h2>
      </div>
      <!-- /.col -->
    </div>
    <!-- info row -->
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        变更名称
        <address @click="eventRefHidden($event)">
          <a><strong>{{changeDetail.name}}</strong></a>
        </address>
        <address hidden>
          <input type="text" name="name" v-model="changeDetail.name" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="cancelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        状态
        <address>
          <a><strong>{{changeDetail.state}}</strong></a><br>
        </address>
        <address hidden>
          <input type="text" name="state" v-model="changeDetail.state" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="cancelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        位于
        <address @click="eventRefHidden($event)">
          <a><strong>{{changeDetail.located_in}}</strong></a><br>
        </address>
        <address hidden>
          <input type="text" name="located_in" v-model="changeDetail.located_in" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="cancelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
    </div>
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        部门
        <address @click="eventRefHidden($event)">
          <a><strong>{{changeDetail.department}}</strong></a>
        </address>
        <address hidden>
          <input type="text" name="department" v-model="changeDetail.department" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="cancelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        创建自
        <address>
          <a><strong>{{changeDetail.create_by}}</strong></a><br>
        </address>
        <address hidden>
          <input type="text" name="create_by" v-model="changeDetail.create_by" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="cancelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        等级
        <address @click="eventRefHidden($event)">
          <a><strong>{{changeDetail.flow_module}}</strong></a><br>
        </address>
        <address hidden>
          <div>
            <input type="text" name="flow_module" v-model="changeDetail.flow_module" />
            <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
            <i class="fa fa-fw fa-close" @click="cancelUpdate($event)"></i>
          </div>
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
              <button type="button" class="btn btn-success" @click="submitMyOpinion()">
                  <i class="fa fa-submit"></i>提交或同意
              </button>
              <button type="button" class="btn btn-cancel" style="color:red">
                  <i class="fa fa-submit"></i>拒绝
              </button>
            </div>
          </div>
          <div class="box-body pad">
            <textarea class="textarea" style="width: 100%; height: 175px" placeholder="此处填写意见" v-model="my_opinion"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 table-responsive">
        <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">变更审批意见</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <tbody v-for="log in changeLogs">
                  <tr>
                    <th style="width: 10px">#</th>
                    <th>审批人</th>
                    <th>处理意见</th>
                    <th style="width: 40px">时间</th>
                  </tr>
                  <tr>
                    <td>{{log.id}}</td>
                    <td>{{log.username}}</td>
                    <td>{{log.content}}</td>
                    <td><span class="badge bg-red">{{log.dt_created}}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
              </ul>
            </div>
          </div>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="row">
      <!-- accepted payments column -->
      <div class="col-xs-6">
        <p class="lead">Payment Methods:</p>
        <img src="../../../static/dist/img/credit/visa.png" alt="Visa">
        <img src="../../../static/dist/img/credit/mastercard.png" alt="Mastercard">
        <img src="../../../static/dist/img/credit/american-express.png" alt="American Express">
        <img src="../../../static/dist/img/credit/paypal2.png" alt="Paypal">

        <p class="text-muted well well-sm no-shadow" style="margin-top: 10px;">
          Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg
          dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
        </p>
      </div>
      <!-- /.col -->
      <div class="col-xs-6">
        <p class="lead">Amount Due 2/22/2014</p>

        <div class="table-responsive">
          <table class="table">
            <tbody><tr>
              <th style="width:50%">Subtotal:</th>
              <td>$250.30</td>
            </tr>
            <tr>
              <th>Tax (9.3%)</th>
              <td>$10.34</td>
            </tr>
            <tr>
              <th>Shipping:</th>
              <td>$5.80</td>
            </tr>
            <tr>
              <th>Total:</th>
              <td>$265.24</td>
            </tr>
          </tbody></table>
        </div>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <!-- this row will not appear when printing -->
    <div class="row no-print">
      <div class="col-xs-12">
        <a href="invoice-print.html" target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Print</a>
        <button type="button" class="btn btn-success pull-right"><i class="fa fa-credit-card"></i> Submit Payment
        </button>
        <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px;">
          <i class="fa fa-download"></i> Generate PDF
        </button>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
  import sectionContentHeader from '../sectionContentHeader'
  import noteMessage from '../noteMessage'
  // import sectionContentDetail from '../sectionContentDetail'
  import { getChangeDetail, getChangeLogs, putChangeDetail, postChangeLogs } from '../../api/api'
	export default{
		name: "changeDetail",
    data () {
      return {
        changeDetail: '',
        changeLogs: '',
        change: '',
        msg: '',
        header: '变更',
        my_opinion: ""
      }
    },
    components: {
      sectionContentHeader,
      noteMessage,
    },
    created () {
      this.userId = this.$store.state.userInfo.user_id;
      this.changeId = this.$route.params.changeId;
      this.getDetails ();
    },
    mounted() {
      console.log("refs: ", this.$route);
    },
    methods: {
      getDetails () {    // 请求事件详情
        getChangeDetail(
          this.changeId
          ).then((response)=> {
            this.changeDetail = response.data;
        }).catch(function (error) {
            console.log(error);
        });
        getChangeLogs({   // 事件操作日志
          change: this.changeId,
        }).then((response)=> {
          this.changeLogs = response.data.results;
          // this.msg = "Opps , 出错了"
        }).catch(function (error) {
            console.log(error);
            this.msg = error
        });
      },
      // 触发编辑框
      eventRefHidden (e) {
        console.log("该事件用来控制标签显隐: ", e);
        e.target.parentNode.parentNode.hidden=true;
        e.target.parentNode.parentNode.parentNode.children[1].hidden=false;
      },
      cancelUpdate (e) {
        console.log("执行取消: ", e);
        e.target.parentNode.hidden=true;
        e.target.parentNode.parentNode.children[0].hidden=false;
      },

      // 确认更新变更属性
      confirmUpdate(e) {
        // 组装params
        let params = new Object();
        params[e.target.previousElementSibling.name] = e.target.previousElementSibling.value;

        // 请求变更的更新接口
        putChangeDetail (
          this.changeId, params
        ).then(function(response) {
          console.log(response);
          console.msg = "更新成功"
        }).catch(function (error){
          console.log(error);
          this.msg = error
        });
        this.cancelUpdate(e)
      },

      flowNext() {
        console.log("下一步")
      },

      // 提交操作记录
      submitMyOpinion() {
        let that = this;
        console.log("变更管理开始提交意见");

        let params = new Object();
        params.user = this.userId;
        params.change = this.changeId;
        params.content = this.my_opinion;
        console.log(params);

        postChangeLogs (params
          ).then(function (response) {
            console.log("变更记录提交成功", that.changeId);
            console.log(response);
            // 记录提交成功，流程跳转，即修改变更记录的stage和status
            that.flowNext();
            // location.reload()
          }).catch(function (error){
            console.log(error);
            console.log(params);
            // this.msg = error.data
          });
//        this.flowNext();
      },
    }
  }
</script>
<style>

</style>
