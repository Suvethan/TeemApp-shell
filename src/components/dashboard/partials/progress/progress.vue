<template>
    <div class="pos-rel h-full w-full">
        <!--<div class="user-msg" v-show="!showView">Select a project for details</div>-->
        <div class="progress-wrap">
            <div class="progress-header">
                <div class="row">
                    <div class="col-md-2 project-icon">
                        <span>{{projectIcon}}</span>
                    </div>
                    <div class="col-md-10 p-0">
                        <div class="project-name">
                            {{projectName}}
                        </div>
                        <div class="clearfix proj-overall-bar">
                            <div class="col-md-4 p-0 overall-piece">
                                <span>{{daysLeft}} D</span> left
                            </div>
                            <div class="col-md-4 p-0 overall-piece">
                                <span>{{completed}}%</span> completed
                            </div>
                            <div class="col-md-4 p-0 overall-piece">
                                <span>{{timeSpent}} h</span> spent
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix progress-body">
                <ul class="nav nav-tabs progress-tab-wrap">
                    <li class="active progress-tab"><a data-toggle="tab" href="#feed">Feed</a></li>
                    <li class="progress-tab"><a data-toggle="tab" href="#team">Team</a></li>
                    <li class="progress-tab"><a data-toggle="tab" href="#action">Action</a></li>
                </ul>

                <div class="tab-content">
                    <div id="feed" class="tab-pane fade in active">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div id="team" class="tab-pane fade">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="action" class="tab-pane fade">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//    var projectIcon="";
//    (function (){
//		if(this.projectName != undefined){
//			return this.projectName.charAt(0);
//		}else{
//			return 'P';
//		}
//	})();
    export default {
		name: 'ProjectProgress',
		showView: true,
		props: {
			projectName:{
				default: 'Project name',
				type: String
            },
            daysLeft:{
				default: 0,
				type: Number
            },
            completed:{
				default: 0,
				type: Number
            },
            timeSpent:{
				default: 0,
				type: Number
            }
		},
		data: function() {
			return {
				projectIcon:'P'
			}
		},
        methods:{
			getSelectedProjectDetails(){
				this.$on('load-project-details', data => console.log(data));
            },
            setProjectIcon(){
				this.projectIcon = this.projectName.charAt(0)
			}
        }
	}
</script>

<style lang="css">
    .p-0{
        padding: 0!important;
    }
    .w-full{
        width: 100%;
        height:100%;
    }
    .pos-rel{
        position: relative;
    }
    .progress-header{
        padding-bottom: 10px;
        border-bottom: solid 1px #ddd;
    }
    .progress-header .project-icon{
        padding: 6px 10px;
    }
    .progress-header .project-icon span{
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #eee;
        text-align: center;
        padding-top: 10px;
        font-weight: bold;
        font-size: 20px;
        margin-right: 10px;
    }
    .progress-header .project-name{
        padding: 6px 0;
        font-size: 20px;
    }
    .progress-header .proj-overall-bar{
        font-size: 13px;
    }
    .progress-header .overall-piece span:first-child{
        color: #e20f00;
    }
    /*.progress-body{*/
        /*margin-top: 10px;*/
    /*}*/
    .user-msg{
        color: #ccc;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        height: 20px;
        width: 180px;
        margin: auto;
        text-align: center;
    }
    .nav-tabs>li>a{
        border-radius: 0;
    }
    .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover{
        border:none;
        border-bottom:solid 2px #bbb;
    }
    .progress-tab-wrap{
        margin:0;
    }
    .progress-tab{
        width:33.33%;
        text-align:center;
    }
</style>

