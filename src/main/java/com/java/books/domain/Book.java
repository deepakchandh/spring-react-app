package com.java.books.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String title;
	private String author;
	private String coverPhotoURL;
	private Long isbnNumber;
	private Double price;
	private String language;
	
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getCoverPhotoURL() {
		return coverPhotoURL;
	}
	public void setCoverPhotoURL(String coverPhotoURL) {
		this.coverPhotoURL = coverPhotoURL;
	}
	public Long getIsbnNumber() {
		return isbnNumber;
	}
	public void setIsbnNumber(Long isbnNumber) {
		this.isbnNumber = isbnNumber;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	
}
