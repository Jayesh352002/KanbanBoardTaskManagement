package com.example.KanbanTaskManagement.dto;

public class TaskDTO {

	private int taskId ; 
	private String taskName ; 
	private String taskDescription ; 
	private String taskStatus ;
	
	public TaskDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TaskDTO(int taskId, String taskName, String taskDescription, String taskStatus) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.taskDescription = taskDescription;
		this.taskStatus = taskStatus;
	}

	public TaskDTO(String taskName, String taskDescription, String taskStatus) {
		super();
		this.taskName = taskName;
		this.taskDescription = taskDescription;
		this.taskStatus = taskStatus;
	}

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}

	public String getTaskStatus() {
		return taskStatus;
	}

	public void setTaskStatus(String taskStatus) {
		this.taskStatus = taskStatus;
	}

	@Override
	public String toString() {
		return "TaskDTO [taskId=" + taskId + ", taskName=" + taskName + ", taskDescription=" + taskDescription
				+ ", taskStatus=" + taskStatus + "]";
	} 
	
}
