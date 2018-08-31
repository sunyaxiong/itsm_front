<template>
  <section class="invoice">
    <!-- title row -->
    <div class="row">
      <div class="col-xs-12">
        <h2 class="page-header">
          <i class="fa fa-globe"></i> 事件详情
          <small class="pull-right">创建时间: {{eventDetail.dt_created}}</small>
        </h2>
      </div>
      <!-- /.col -->
    </div>
    <!-- info row -->
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        事件名称
        <address>
          <strong>{{eventDetail.name}}</strong>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        状态
        <address>
          <strong>{{eventDetail.state}}</strong><br>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        位于
        <address>
          <strong>{{eventDetail.located_in}}</strong><br>
        </address>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <!-- Table row -->
    <div class="row">
      <div class="col-xs-12 table-responsive">
        <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">处理记录</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <tbody v-for="log in eventLogDetail"><tr>
                  <th style="width: 10px">#</th>
                  <th>执行人</th>
                  <th>动作</th>
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
        <img src="../assets/dist/img/credit/visa.png" alt="Visa">
        <img src="../assets/dist/img/credit/mastercard.png" alt="Mastercard">
        <img src="../assets/dist/img/credit/american-express.png" alt="American Express">
        <img src="../assets/dist/img/credit/paypal2.png" alt="Paypal">

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
</template>
<script>
  import { getEventDetail, getEventLogs } from '../api/api'
	export default{
		name: "Detail",
    data () {
      return {
        eventDetail: '',
        eventLogDetail: '',
        event_obj: '',
      }
    },
    created () {
      this.eventId = this.$route.params.eventId;
      this.getDetails ();
    },
    methods: {
      getDetails () {    // 请求事件详情
        getEventDetail(
          this.eventId
          ).then((response)=> {
            console.log(response.data)
            this.eventDetail = response.data;
        }).catch(function (error) {
            console.log(error);
        });
        getEventLogs({   // 事件操作日志
          event_obj: this.eventId,
        }).then((response)=> {
          console.log(response.data.results);
          this.eventLogDetail = response.data.results;
        }).catch(function (error) {
            console.log(error);
        });
      },
    },
	}
</script>
<style>
	
</style>