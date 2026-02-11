import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Developer } from './schemas/developer.schemas';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schemas';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Developer.name) private developerModel: Model<Developer>,
        @InjectModel(Project.name) private projectModel: Model<Project> 
    ){}

    async createprojectdetial(): Promise<{
        dev1: Developer; 
        dev2: Developer;
    }>{
        const [projectA, projectB] = await Promise.all([
            this.projectModel.create({
                title: 'Nest CRM',

            }),
            this.projectModel.create({
                title: 'Mobile app',
            })
        ]);

        const [dev1, dev2] = await Promise.all([
            this.developerModel.create({
                name: 'Shaharyar',
                // developer is asign to project project_A or project_B
                projects: [projectA._id, projectB._id]
            }),
            this.developerModel.create({
                
                name: 'Sameer',
                // developer is asign to project project_A or project_B
                projects: [projectA._id]

            })
        ])
        // This function is help tu binding the data of developer or Projects
        await Promise.all([
            this.projectModel.findByIdAndUpdate(projectA._id,{
                $set:{developers: [dev1._id, dev2._id]}
            }),
            this.projectModel.findByIdAndUpdate(projectB._id,{
                $set:{developers: [dev1._id]}
            })
        ])
        return {dev1, dev2};
    }

    // fetching the data of developer
    async getDeveloper(): Promise<Developer[]>{

        // lean() is object of Mongo DB ye mongo db ki bohat se feature provide karta ha 
        // lean() is fast, no need the mongo Document, sub se best for Reading the data or ye memory ko kam use karta ha 
        return this.developerModel.find().populate('projects').lean();
    }

    // fetching the data of Project
    async getProject(): Promise<Project[]>{
        return this.projectModel.find().populate('developers').lean();
    }
}
