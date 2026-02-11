import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, developerSchema } from './schemas/developer.schemas';
import { Project, projectSchema } from './schemas/project.schemas';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          name: Developer.name,
          schema: developerSchema
        }, {
          name: Project.name,
          schema: projectSchema,
        }
      ])
    ],
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule {}
