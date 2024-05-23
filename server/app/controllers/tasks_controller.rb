class TasksController < ApplicationController
    def create
        @task = Task.new(task_params)
        if @task.save
            render json: @task, status: :created
        else
            render json: @task.errors, status: :unprocesseable_entity
        end
    end

    def index
        @tasks = Task.all
        render json: @tasks
    end
    
    private

    def task_params
        params.require(:task).permit(:title, :description, :completed)
    end

end
