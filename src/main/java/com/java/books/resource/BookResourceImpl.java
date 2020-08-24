package com.java.books.resource;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.books.domain.Book;
import com.java.books.repository.BookRepository;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins="http://localhost:3000")
public class BookResourceImpl implements Resource<Book> {
	
	@Autowired
	private BookRepository bookRepo;
	
	@Override
	public ResponseEntity<Optional<Book>> findById(Long id) {
		return new ResponseEntity<Optional<Book>>((Optional<Book>) bookRepo.findById(id), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Collection<Book>> findAll() {
		return new ResponseEntity<Collection<Book>>((Collection<Book>) bookRepo.findAll(), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Book> save(@RequestBody Book book){
		return new ResponseEntity<>(bookRepo.save(book), HttpStatus.CREATED);
	}
	
	@Override
	public ResponseEntity<Book> update(Book book) {
		return new ResponseEntity<>(bookRepo.save(book), HttpStatus.OK); // only difference is status code
	}
	
	@Override
	public ResponseEntity<Book> deleteById(Long id) {
		if(bookRepo.existsById(id)) {
			bookRepo.deleteById(id);
			return new ResponseEntity<Book>(HttpStatus.OK);
		}
		return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
	}	

}
