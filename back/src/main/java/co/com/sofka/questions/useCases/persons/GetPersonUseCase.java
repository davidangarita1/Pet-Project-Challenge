package co.com.sofka.questions.useCases.persons;

import co.com.sofka.questions.model.PersonDTO;
import co.com.sofka.questions.repositories.PersonRepository;
import co.com.sofka.questions.utils.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class GetPersonUseCase implements Function<String, Mono<PersonDTO>> {
    private final PersonRepository personRepository;
    private final MapperUtils mapperUtils;

    public GetPersonUseCase(PersonRepository personRepository, MapperUtils mapperUtils) {
        this.personRepository = personRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<PersonDTO> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
        return personRepository.findById(id)
                .map(mapperUtils.mapEntityToPerson());
    }
}
