package com.example.KanbanTaskManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.KanbanTaskManagement.entites.Task;

@EnableJpaRepositories
@Repository
public interface TaskRepo extends JpaRepository<Task , Integer> {
	
	Task getTaskById(int id);
	
}
