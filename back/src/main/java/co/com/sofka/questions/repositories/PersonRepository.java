package co.com.sofka.questions.repositories;

import co.com.sofka.questions.collections.Person;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface PersonRepository extends ReactiveCrudRepository<Person, String> {
}
