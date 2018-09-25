<template>
  <div class="content-wrapper">
    <sectionContentHeader :header="header"></sectionContentHeader>
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
        <address @click="eventRefHidden($event)">
          <input type="text">
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        状态
        <address @click="eventRefHidden($event)">
          <a><strong>2</strong></a><br>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        位于
        <address @click="eventRefHidden($event)">
          <a><strong>2</strong></a><br>
        </address>
      </div>
      <!-- /.col -->
    </div>
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        部门
        <address @click="eventRefHidden($event)">
          <a><strong>2</strong></a>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        创建自
        <address>
          <a><strong>2</strong></a><br>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        等级
        <address @click="eventRefHidden($event)">
          <a><strong>2</strong></a><br>
        </address>
      </div>
      <!-- /.col -->
    </div>
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        上次更新
        <address>
          <a><strong>2</strong></a>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        服务等级
        <address @click="eventRefHidden($event)">
          <a><strong>2</strong></a><br>
        </address>
      </div>
      <!-- /.col -->
      <div class="col-sm-4 invoice-col">
        分类
        <address @click="eventRefHidden($event)">
          <a><strong>2</strong></a><br>
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
            <textarea class="textarea" style="width: 100%; height: 175px" placeholder="此处填写意见" v-model="my_opinion"></textarea>
          </div>
        </div>
      </div>
    </div>
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
  export default {
    name: "eventCreate",
    data () {
      return {
        header: "创建事件",
        msg: "",
      }
    },
    components: {
      sectionContentHeader,
      noteMessage,
    },
  }
</script>
<style>
</style>
