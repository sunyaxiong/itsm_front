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
          <small class="pull-right">创建时间: {{eventDetail.dt_created}}</small>
        </h2>
      </div>
      <!-- /.col -->
    </div>
    <!-- info row -->
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        变更名称
        <address @click="eventRefHidden($event)">
          <a><strong>{{eventDetail.name}}</strong></a>
        </address>
        <address hidden>
          <input type="text" name="name" v-model="eventDetail.name" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="concelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        状态
        <address @click="eventRefHidden($event)">
          <a><strong>{{eventDetail.state}}</strong></a><br>
        </address>
        <address hidden>
          <input type="text" name="state" v-model="eventDetail.state" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="concelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        位于
        <address @click="eventRefHidden($event)">
          <a><strong>{{eventDetail.located_in}}</strong></a><br>
        </address>
        <address hidden>
          <input type="text" name="located_in" v-model="eventDetail.located_in" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="concelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
    </div>
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        部门
        <address @click="eventRefHidden($event)">
          <a><strong>{{eventDetail.department}}</strong></a>
        </address>
        <address hidden field="department">
          <input type="text" name="department" v-model="eventDetail.department" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="concelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        创建自
        <address @click="eventRefHidden($event)">
          <a><strong>{{eventDetail.create_by}}</strong></a><br>
        </address>
        <address hidden>
          <input type="text" name="create_by" v-model="eventDetail.create_by" />
          <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
          <i class="fa fa-fw fa-close" @click="concelUpdate($event)"></i>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        等级
        <address @click="eventRefHidden($event)">
          <a><strong>{{eventDetail.emergency_degree}}</strong></a><br>
        </address>
        <address hidden>
          <div>
            <input type="text" name="emergency_degree" v-model="eventDetail.emergency_degree" />
            <i class="fa fa-fw fa-check" @click="confirmUpdate($event)"></i>
            <i class="fa fa-fw fa-close" @click="concelUpdate($event)"></i>
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
              <button type="button" class="btn btn-success" @click="submitMyOpinion()"
              data-original-title="Collapse">
                  <i class="fa fa-submit"></i>提交
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
                <tbody v-for="log in eventLogDetail"><tr>
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
                
              </tbody></table>
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
        <img src="../../assets/dist/img/credit/visa.png" alt="Visa">
        <img src="../../assets/dist/img/credit/mastercard.png" alt="Mastercard">
        <img src="../../assets/dist/img/credit/american-express.png" alt="American Express">
        <img src="../../assets/dist/img/credit/paypal2.png" alt="Paypal">

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
  import { getEventDetail, getEventLogs, putEventDetail, postEventLogs } from '../../api/api'
	export default{
		name: "eventDetail",
    data () {
      return {
        eventDetail: '',
        eventLogDetail: '',
        event: '',
        msg: '',
        header: '事件',
        my_opinion: ""
      }
    },
    components: {
      sectionContentHeader,
      noteMessage,
    },
    created () {
      this.userId = this.$store.state.userInfo.user_id;
      this.eventId = this.$route.params.eventId;
      this.getDetails ();
    },
    mounted() {
      console.log("refs: ", this.$refs);
      console.log("mounted: ", this.$refs.tt);
    },
    methods: {
      getDetails () {    // 请求事件详情
        getEventDetail(
          this.eventId
          ).then((response)=> {
            this.eventDetail = response.data;
        }).catch(function (error) {
            console.log(error);
        });
        getEventLogs({   // 事件操作日志
          event_obj: this.eventId,
        }).then((response)=> {
          this.eventLogDetail = response.data.results;
          // this.msg = "Opps , 出错了"
        }).catch(function (error) {
            console.log(error);
            this.msg = error
        });
      },
      eventRefHidden (e) {
        console.log("该事件用来控制标签显隐: ", e);
        e.target.parentNode.parentNode.hidden=true;
        e.target.parentNode.parentNode.parentNode.children[1].hidden=false;
      },
      concelUpdate (e) {
        console.log("执行取消: ", e);
        e.target.parentNode.hidden=true;
        e.target.parentNode.parentNode.children[0].hidden=false;
      },
      confirmUpdate(e) {
        // // 组装params
        // let params = new Object()
        // params[e.target.previousElementSibling.name] = e.target.previousElementSibling.value
        // // 请求事件的更新接口
        
        putEventDetail (
          this.eventId, this.eventDetail
        ).then(function(response) {
          console.log(response)
          console.log("更新成功")
        }).catch(function (error){
          console.log(error);
          this.msg = error
        });
        this.concelUpdate(e)
      },
      submitMyOpinion() {
        console.log("start 提交意见");

        let params = new Object()
        params.user = this.userId
        params.event_obj = this.eventId
        params.content = this.my_opinion
        console.log(params)
        
        postEventLogs (params
          ).then(function (response) {
            console.log("事件记录提交成功")
            console.log(response.data)
            // this.getEventLogs({
            //   event_obj: this.eventId
            // })
            location.reload()
          }).catch(function (error){
            console.log(error)
            console.log(params)
            // this.msg = error.data
          })
      }
    }
  }
</script>
<style>
	
</style>