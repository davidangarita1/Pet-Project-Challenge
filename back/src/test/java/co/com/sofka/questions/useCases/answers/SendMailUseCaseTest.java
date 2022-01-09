package co.com.sofka.questions.useCases.answers;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import reactor.core.publisher.Mono;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

@SpringBootTest
class SendMailUseCaseTest {
    @SpyBean
    SendMailUseCase mailUseCase;

    @MockBean
    JavaMailSender javaMailSender;

    @MockBean
    private MimeMessage mimeMessage;

    @Before
    public void before() {
        mimeMessage = new MimeMessage((Session)null);
        javaMailSender = mock(JavaMailSender.class);
        Mockito.when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);
        mailUseCase = new SendMailUseCase();
    }

    @Test
    void sendMailUseCaseTest() throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        String FROM = "sendmailusecasesofka@gmail.com";
        String to = "ichigodebleach1994@gmail.com";
        String body = "Mensaje recibido";

        message.setSubject(FROM);
        MimeMessageHelper helper;
        helper = new MimeMessageHelper(message, true);
        helper.setFrom(FROM);
        helper.setTo(to);
        helper.setText(body, true);
        javaMailSender.send(message);

        assertEquals(FROM, mimeMessage.getRecipients(MimeMessage.RecipientType.TO)[0].toString());
    }

}