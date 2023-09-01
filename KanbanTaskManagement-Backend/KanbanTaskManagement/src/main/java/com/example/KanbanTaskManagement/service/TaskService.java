package com.example.KanbanTaskManagement.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.KanbanTaskManagement.dto.TaskDTO;
import com.example.KanbanTaskManagement.entites.Task;
import com.example.KanbanTaskManagement.repo.TaskRepo;

@Service
public class TaskService {

	private TaskRepo taskRepo ;

	@Autowired
	public TaskService(TaskRepo taskRepo) {
		this.taskRepo = taskRepo;
	} 
	
	public String addTasks(TaskDTO taskDTO) {
		
		Task task = new Task(
						taskDTO.getTaskName(),
						taskDTO.getTaskDescription(),
						taskDTO.getTaskStatus());
		
		taskRepo.save(task);
		
		return task.getTitle();
	}

	public List<Task> getTasks()
	{
		return taskRepo.findAll();
	}
	
	public Task getTaskDetails(int id)
	{
		return taskRepo.getTaskById(id);
	}

	public String updateData(TaskDTO taskDTO, int id) {
		
		Optional<Task> task1 = taskRepo.findById(id);
		
		Task task = new Task(taskDTO.getTaskName(),
							taskDTO.getTaskDescription(),
							taskDTO.getTaskStatus());
		
		if(task1.isPresent()) {
			Task t1 = task1.get();
			t1.setTitle(task.getTitle());
			t1.setDescription(task.getDescription());
			t1.setStatus(task.getStatus());
			
			taskRepo.save(t1);
			return "Success";
		}
		else {
			return "Failure";
		}
		
	}

	public void deleteData(int id) {
		taskRepo.deleteById(id);
		
	}
	
	
}
