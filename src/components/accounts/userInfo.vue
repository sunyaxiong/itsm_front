<template>
  <div class="content-wrapper">
    <sectionContentHeader :header=header></sectionContentHeader>
    <noteMessage v-if=msg :msg=msg></noteMessage>
    <section class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="box box-primary">
            <div class="box-body box-profile">
              <img class="profile-user-img img-responsive img-circle" alt="UserProfile picture" src="http://192.168.37.139:9999/media/avatar/index.jpeg">

              <h3 class="profile-username text-center">{{user.username}}</h3>

              <p class="text-muted text-center">{{job.name}}</p>

              <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                  <b>部门</b> <a class="pull-right">{{department.name}}</a>
                </li>
                <li class="list-group-item">
                  <b>电话</b> <a class="pull-right">{{userProfile.phone}}</a>
                </li>
                <li class="list-group-item">
                  <b>邮箱</b> <a class="pull-right">{{userProfile.email}}</a>
                </li>
              </ul>

              <a href="#" class="btn btn-primary btn-block"><b>确认修改</b></a>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import sectionContentHeader from '../sectionContentHeader'
  import noteMessage from '../noteMessage'
  import { getUserDetail } from '../../api/api'
	export default{
		name: "userInfo",
    data () {
      return {
        eventDetail: '',
        eventLogDetail: '',
        event_obj: '',
        msg: '',
        header: '个人信息',
        userDetail: '',
        user: '',
        userProfile: '',
        job: '',
        department: '',
        avatar: '',
      }
    },
    components: {
      noteMessage,
      sectionContentHeader,
    },
    created () {
      this.userId = this.$store.state.userInfo.user_id;
      this.getDetails();
      },
    methods: {
      getDetails () {    // 请求事件详情
        getUserDetail(
          this.userId
          ).then((response)=> {
            console.log(response.data.profile.avatar_url)
            this.user = response.data;
            this.userProfile = response.data.profile
            this.job = response.data.profile.job_title
            this.department = this.job.department
            this.avatar = "http://192.168.37.139:9999/media/" + response.data.profile.avatar_url
            console.log(this.avatar)
        }).catch(function (error) {
            console.log(error);
        });
      },
    },
	}
</script>
<style>
	
</style>