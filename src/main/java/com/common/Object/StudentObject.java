package com.common.Object;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity @Table(name="studentmst")
public class StudentObject implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "studentid", updatable = false, nullable = false)
	private  Integer studentid ;
	
	@Column(name="studentname")
	private String studentname;
	
	@JoinColumn(name="stdid", referencedColumnName="stdid")
	private long stdid;

	public Integer getStudentid() {
		return studentid;
	}

	public void setStudentid(Integer studentid) {
		this.studentid = studentid;
	}

	public String getStudentname() {
		return studentname;
	}

	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}

	public long getStdid() {
		return stdid;
	}

	public void setStdid(long stdid) {
		this.stdid = stdid;
	}

	public StudentObject(Integer studentid, String studentname, long stdid) {
		super();
		this.studentid = studentid;
		this.studentname = studentname;
		this.stdid = stdid;
	}

	public StudentObject() {
		super();
		// TODO Auto-generated constructor stub
	}

}
