package com.java.books.repository;

import org.springframework.data.repository.CrudRepository;

import com.java.books.domain.Book;

public interface BookRepository extends CrudRepository<Book, Long>{

}
