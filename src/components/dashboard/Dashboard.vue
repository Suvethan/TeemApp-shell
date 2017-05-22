<template>
    <!--<div class="medium-8 medium-offset-2 columns">-->
    <!--<h1>Congratulations your app is working!</h1>-->
    <!--<h4>Now navigate around to find out more</h4>-->
    <!--</div>-->
    <!--<div class="panel-body">-->
    <!--<table class="table table-striped">-->
    <!--<thead>-->
    <!--<tr>-->
    <!--<th>Title</th>-->
    <!--<th>Author</th>-->
    <!--</tr>-->
    <!--</thead>-->
    <!--<tbody>-->
    <!--<tr v-for="book in books">-->
    <!--<td><a v-bind:href="book.url">{{book.title}}</a></td>-->
    <!--<td>{{book.author}}</td>-->
    <!--</tr>-->
    <!--</tbody>-->
    <!--</table>-->
    <!--</div>-->
    <div class="dashboard-wrap">
        <div class="clearfix navbar">
            <navbar></navbar>
        </div>
        <div class="clearfix">
            <div class="col-md-4 h-full">
                <!--<projects></projects>-->
                <div class="projects-wrap">
                    <ul class="projects-list">
                        <li class="project" v-for="project in projects" v-on:click="getSelectedProject(project.projectId)">
                            <span class="project-icon">{{project.projectIcon}}</span>
                            <span>{{project.projectName}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 dashboard-feed h-full">
                <project-progress v-bind:project-name="selectedProject.projectName" v-bind:days-left="selectedProject.daysLeft" v-bind:completed="selectedProject.completed" v-bind:time-spent="selectedProject.timeSpent"></project-progress>
            </div>
            <div class="col-md-4 h-full">
                <h4>Chat</h4>
            </div>
        </div>
    </div>
</template>

<script>
	import DatabaseHandler from '../data/DatabaseHandler.vue';
//	import Projects from './partials/projects/projects.vue'
    import Navbar from '../common/Navbar.vue';
	import ProjectProgress from './partials/progress/progress.vue';

	//let membersRef = DatabaseHandler.db.ref('books')
	var projects = [{
		projectId: 'proj#1',
		projectName: 'First project',
		projectIcon: 'P',
		projectAdmin: 'John Doe',
		completed: 45,
		daysLeft:24,
		timeSpent: 14.5
	},{
		projectId: 'proj#2',
		projectName: 'Second project',
		projectIcon: 'P',
		projectAdmin: 'John Doe',
		completed: 65,
		daysLeft:27,
		timeSpent: 34.5
	}];
	var selectedProject = {};

	export default {
		components: { DatabaseHandler, ProjectProgress, Navbar},
		data(){
			return {
				projects:projects,
                selectedProject:selectedProject
			}
		},
		methods:{
			getAllProjects(){},
			getSelectedProject(projectId){
				console.log(projectId);
				//this.$emit('load-project-details', projectName);
                for(var i=0;i<this.projects.length;i++){
                	if(this.projects[i].projectId == projectId){
                		this.selectedProject = this.projects[i];
                		console.log(selectedProject);
                    }
                }
			}
		}
	}
</script>

<style lang="css">
    .navbar{
        margin-bottom: 10px;
    }
    .h-full{
        height:100%;
    }
    .dashboard-wrap{
        width: 100%;
        overflow: hidden;
    }
    .dashboard-wrap .dashboard-feed{
        border-right: solid 1px #ddd;
        border-left: solid 1px #ddd;
    }

    .projects-list{
        list-style: none;
        margin: 0;
    }
    .projects-list .project{
        padding: 10px;
        background: #fafafa;
        border-bottom: solid 1px #eee;
        cursor: pointer;
    }
    .projects-list .project:hover{
        background: #f5f5f5;
    }
    .projects-list .project span:first-child{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #eee;
        text-align: center;
        padding-top: 4px;
        font-weight: bold;
        margin-right: 10px;
    }
    .projects-list .project span:last-child{
        display: inline-block;
    }
</style>