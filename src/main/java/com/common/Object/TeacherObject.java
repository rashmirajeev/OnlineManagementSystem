package com.common.Object;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
@Entity @Table(name="teachermst")
public class TeacherObject implements Serializable {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "teacherid", updatable = false, nullable = false)
	private  Integer teacherid ;
	
	@Column(name="teachername")
	private String teachername;
	
	@JoinColumn(name="stdid", referencedColumnName="stdid")
	private long stdid;
	
	@Column(name="status")
	private String status;

	public Integer getTeacherid() {
		return teacherid;
	}

	public void setTeacherid(Integer teacherid) {
		this.teacherid = teacherid;
	}

	public String getTeachername() {
		return teachername;
	}

	public void setTeachername(String teachername) {
		this.teachername = teachername;
	}

	public long getStdid() {
		return stdid;
	}

	public void setStdid(long stdid) {
		this.stdid = stdid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public TeacherObject(Integer teacherid, String teachername, long stdid, String status) {
		super();
		this.teacherid = teacherid;
		this.teachername = teachername;
		this.stdid = stdid;
		this.status = status;
	}

	public TeacherObject() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
