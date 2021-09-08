package com.common.Object;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;


@Entity @Table(name="standardmst")
public class StandardObject implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "stdid", updatable = false, nullable = false)
	private  Integer stdid ;
	
	@Column(name= "standard")
	private String standard;

	public Integer getStdid() {
		return stdid;
	}

	public void setStdid(Integer stdid) {
		this.stdid = stdid;
	}

	public String getStandard() {
		return standard;
	}

	public void setStandard(String standard) {
		this.standard = standard;
	}

	public StandardObject(Integer stdid, String standard) {
		super();
		this.stdid = stdid;
		this.standard = standard;
	}

	public StandardObject() {
		super();
		
	}
	
	
	
	
	
	
	

}
