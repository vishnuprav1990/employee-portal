package com.sg.employee;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import com.sg.employee.model.Employee;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class EmployeeAppTests {
	@LocalServerPort
	int randomServerPort;

	@Test
	public void testGetEmployeeListSuccess() throws URISyntaxException {
		RestTemplate restTemplate = new RestTemplate();

		final String baseUrl = "http://localhost:" + randomServerPort + "/employees/";
		URI uri = new URI(baseUrl);

		ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class);

		// Verify request succeed
		Assert.assertEquals(200, result.getStatusCodeValue());
	}

	@Test
	public void testAddEmployeeSuccess() throws URISyntaxException {
		RestTemplate restTemplate = new RestTemplate();
		final String baseUrl = "http://localhost:" + randomServerPort + "/employee/";
		URI uri = new URI(baseUrl);
		Employee employee = new Employee();
		buildEmployeeTestObject(employee);

		HttpEntity<Employee> request = new HttpEntity<>(employee);

		ResponseEntity<String> result = restTemplate.postForEntity(uri, request, String.class);

		// Verify request succeed
		Assert.assertEquals(200,result.getStatusCodeValue());
		Assert.assertEquals("Added employee successfully", result.getBody());
	}

	private Employee buildEmployeeTestObject(Employee employee) {
		employee.setFirstName("Test First");
		employee.setLastName("Test Last");
		employee.setGender("Male");
		employee.setDepartment("Test dept");
		employee.setDob(new Date());
		return employee;
	}
}
