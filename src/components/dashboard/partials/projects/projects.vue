<!--<template>-->
    <!--<div class="projects-wrap">-->
        <!--<ul class="projects-list">-->
            <!--<li class="project" v-for="project in projects" v-on:click="getSelectedProject(project.projectId)">-->
                <!--<span class="project-icon">{{project.projectIcon}}</span>-->
                <!--<span>{{project.projectName}}</span>-->
            <!--</li>-->
        <!--</ul>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
	<!--import DatabaseHandler from '../../../data/DatabaseHandler.vue'-->

	<!--//let membersRef = DatabaseHandler.db.ref('books')-->

    <!--let projects = [{-->
        <!--projectId: 'proj#1',-->
        <!--projectName: 'Project 1',-->
        <!--projectIcon: 'P',-->
        <!--projectAdmin: 'John Doe',-->
        <!--completed: 45,-->
        <!--daysLeft:24,-->
        <!--timeSpent: 14.5,-->
    <!--}];-->

	<!--export default {-->
		<!--name:'Projects',-->
		<!--components: { DatabaseHandler },-->
        <!--data(){-->
			<!--return {-->
				<!--projects:projects-->
			<!--}-->
        <!--},-->
        <!--methods:{-->
        	<!--getAllProjects(){},-->
			<!--getSelectedProject(projectName){-->
				<!--this.$emit('load-project-details', projectName);-->
				<!--console.log(projectName);-->
            <!--}-->
        <!--}-->
	<!--}-->
<!--</script>-->

<!--<style lang="css">-->
    <!--.projects-list{-->
        <!--list-style: none;-->
        <!--margin: 0;-->
    <!--}-->
    <!--.projects-list .project{-->
        <!--padding: 10px;-->
        <!--background: #fafafa;-->
        <!--border-bottom: solid 1px #eee;-->
        <!--cursor: pointer;-->
    <!--}-->
    <!--.projects-list .project:hover{-->
        <!--background: #f5f5f5;-->
    <!--}-->
    <!--.projects-list .project span:first-child{-->
        <!--display: inline-block;-->
        <!--width: 30px;-->
        <!--height: 30px;-->
        <!--border-radius: 50%;-->
        <!--background: #eee;-->
        <!--text-align: center;-->
        <!--padding-top: 4px;-->
        <!--font-weight: bold;-->
        <!--margin-right: 10px;-->
    <!--}-->
    <!--.projects-list .project span:last-child{-->
        <!--display: inline-block;-->
    <!--}-->
<!--</style>-->