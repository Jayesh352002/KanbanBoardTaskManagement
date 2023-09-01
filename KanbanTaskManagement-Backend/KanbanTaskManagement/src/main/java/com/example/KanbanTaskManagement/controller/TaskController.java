package com.example.KanbanTaskManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.KanbanTaskManagement.dto.TaskDTO;
import com.example.KanbanTaskManagement.entites.Task;
import com.example.KanbanTaskManagement.service.TaskService;

@RestController
@RequestMapping("api/v1/task")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {
	
	@Autowired
	private TaskService taskService ; 

	@PostMapping(path = "/addtask")
	public String addTask(@RequestBody TaskDTO taskDTO )
	{
		return taskService.addTasks(taskDTO);
	}
	
	@GetMapping(path = "/gettask")
	public List<Task> getAllTasks()
	{
		return taskService.getTasks();
	}
	
	@GetMapping(path = "/gettaskdetail/{id}")
	public Task getAllTasksDetails(@PathVariable int id)
	{
		return taskService.getTaskDetails(id);
	}
	
	@PostMapping(path = "/updatetask/{id}")
	public String updateData(@RequestBody TaskDTO taskDTO , @PathVariable int id)
	{
		return taskService.updateData(taskDTO,id);
	}
	
	@DeleteMapping(path = "/updatetask/{id}")
	public String deleteData(@PathVariable int id)
	{
		taskService.deleteData(id);
		return "Success";
	}
}
