import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
        constructor (private readonly projectService: ProjectService){}

        @Post('projectdetial')
        addtheprojectdetial(){
            return this.projectService.createprojectdetial();
        }

        @Get('developers')
        getthedeveloperdetial(){
            return this.projectService.getDeveloper();
        }

         @Get()
        getProjectdetial(){
            return this.projectService.getProject();
        }
    
}
