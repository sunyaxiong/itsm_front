<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{username}}</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header"></li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active"><a href="#">
          <i class="fa fa-dashboard"></i> <span>首页</span></a>
        </li>
        <li><router-link to="/event/list" name='side'>
          <i class="fa fa-circle"></i> <span>事件管理</span></router-link>
        </li>
        <li><router-link to='/list'>
          <i class="fa fa-flag-o"></i> <span>问题管理</span></router-link>
        </li>
        <li><router-link to="/change/list">
          <i class="fa fa-exchange"></i> <span>变更管理</span></router-link>
        </li>
        <li><router-link to="/release//list">
          <i class="fa fa-map"></i> <span>发布管理</span></router-link>
        </li>
        <li><router-link to="/config/list">
          <i class="fa fa-map"></i> <span>配置管理</span></router-link>
        </li>
        <li><router-link to="/CMDB/list">
          <i class="fa fa-map"></i> <span>CMDB</span></router-link>
        </li>
        <li><router-link to="/knowledge/list">
          <i class="fa fa-map"></i> <span>知识库</span></router-link>
        </li>
        <li><router-link to="/sla/list">
          <i class="fa fa-map"></i> <span>SLA分析</span></router-link>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#">Link in level 2</a></li>
            <li><a href="#">Link in level 2</a></li>
          </ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      username: '',
    }
  },
  created () {
    this.username = this.$store.state.userInfo.name;
  }
}
</script>

<style>

</style>
